import './inventory.js';
import './recipes.js';
import {settings} from './menu.js';
import {snapshotCabinet} from './interior.js';
import {CABINET_SLIDE,boundedScroll,clamp,visibleAt} from './cabinet-geometry.mjs';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

// Photo reference: Westinghouse WSE6100WF. Geometry is an original, simplified
// interpretation of its two full-height doors, central seam and paired handles.
const host=document.querySelector('#scene');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
let focused=false,progress=0,phase='home',opening=0,transitionStart=0;
const inventory=document.querySelector('#inventory');
try {
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(34,1,.1,100);
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.setClearColor(0,0);
  renderer.localClippingEnabled=true;
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure=1;
  host.appendChild(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0xffffff,0xc3c6c1,2.1));
  const key=new THREE.DirectionalLight(0xfffcf6,3.2);
  key.position.set(-3,5,6);scene.add(key);
  const fill=new THREE.DirectionalLight(0xffffff,.65);
  fill.position.set(4,1,-3);scene.add(fill);
  const fridge=new THREE.Group();scene.add(fridge);
  const enamel=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.31,metalness:.07});
  const shell=new THREE.MeshStandardMaterial({color:0xf5f5f3,roughness:.43,metalness:.04});
  const gasket=new THREE.MeshStandardMaterial({color:0x929791,roughness:.82});
  const feet=new THREE.MeshStandardMaterial({color:0x444943,roughness:.85});
  function box(w,h,d,x,y,z,mat=enamel,r=.025){
    const mesh=new THREE.Mesh(new RoundedBoxGeometry(w,h,d,5,r),mat);
    mesh.position.set(x,y,z);fridge.add(mesh);return mesh;
  }
  // Approximately 90 x 176 x 74 cm. Left freezer is slightly narrower.
  // Hollow cabinet, so the open doors reveal an illuminated interior.
  box(1.80,3.48,.09,0,0,-.66,shell,.025);
  box(.07,3.48,1.30,-.865,0,-.055,shell,.025);
  box(.07,3.48,1.30,.865,0,-.055,shell,.025);
  box(1.80,.07,1.30,0,1.705,-.055,shell,.025);
  box(1.80,.07,1.30,0,-1.705,-.055,shell,.025);
  const interior=new THREE.MeshStandardMaterial({color:0xe7ece8,roughness:.65,emissive:0xb9dccb,emissiveIntensity:.12});
  box(1.65,3.30,.025,0,0,-.60,interior,.01);
  // A single liner stays in place when the shelf contents change.
  box(.06,3.30,1.08,-.805,0,-.02,enamel,.018);
  box(.06,3.30,1.08,.805,0,-.02,enamel,.018);
  box(1.55,.025,.035,0,1.58,-.48,new THREE.MeshBasicMaterial({color:0xfafffa}),.005);
  let stockedInterior=null,activeCabinet='fridge',cabinetTransition=null;
  function syncInterior(){
    if(stockedInterior){fridge.remove(stockedInterior);stockedInterior.userData.dispose();}
    stockedInterior=snapshotCabinet(activeCabinet);fridge.add(stockedInterior);
  }
  syncInterior();
  const interiorLight=new THREE.PointLight(0xedfff3,0,5);interiorLight.position.set(0,1.5,.42);fridge.add(interiorLight);
  const leftStart=fridge.children.length;
  box(.801,3.40,.14,-.4775,.018,.69,enamel,.036);
  const leftPanel=fridge.children[leftStart];
  const rightPanel=box(.931,3.40,.14,.4085,.018,.69,enamel,.036);
  // Fine central gasket remains visible between the independent doors.
  const centreSeal=box(.032,3.35,.025,-.067,.018,.687,gasket,.004);
  // Long, gently bowed vertical handles, spaced around the centre seam.
  function handle(x){
    for(const y of [-1.08,.10,1.27]){
      box(.043,.105,.095,x,y,.80,shell,.014);
    }
    const curve=new THREE.CatmullRomCurve3([
      new THREE.Vector3(x,-1.16,.817),new THREE.Vector3(x,-1.04,.875),
      new THREE.Vector3(x,.05,.9),new THREE.Vector3(x,1.22,.875),
      new THREE.Vector3(x,1.34,.817)
    ]);
    const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,48,.024,12,false),enamel);
    fridge.add(mesh);
  }
  const handleStart=fridge.children.length;handle(-.155);
  const leftParts=[leftPanel,...fridge.children.slice(handleStart)];
  const rightStart=fridge.children.length;handle(.025);
  // Integrated portrait display on the right door, clear of its handle.
  const screenEdge=new THREE.MeshStandardMaterial({color:0xcbd3cc,roughness:.4});
  box(.574,.854,.024,.48,.64,.776,screenEdge,.025);
  box(.558,.838,.025,.48,.64,.795,enamel,.025);
  const screenCanvas=document.createElement('canvas');
  screenCanvas.width=480;screenCanvas.height=736;
  const screenContext=screenCanvas.getContext('2d');
  const screenTexture=new THREE.CanvasTexture(screenCanvas);
  screenTexture.colorSpace=THREE.SRGBColorSpace;
  screenTexture.anisotropy=renderer.capabilities.getMaxAnisotropy();
  function drawDisplay(){
    const ctx=screenContext;
    ctx.fillStyle='#e7ece8';ctx.fillRect(0,0,480,736);
    ctx.textAlign='center';ctx.fillStyle='#25312d';
    ctx.font='500 86px -apple-system, sans-serif';
    ctx.fillText(new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',hourCycle:settings.clock==='12'?'h12':'h23'}),240,213);
    ctx.fillStyle='#6d7e72';ctx.font='25px -apple-system, sans-serif';
    ctx.fillText(new Date().toLocaleDateString('en-GB',{weekday:'short',day:'numeric',month:'short'}),240,260);
    ctx.strokeStyle='#27a879';ctx.lineWidth=9;ctx.beginPath();ctx.arc(240,366,24,Math.PI,0);ctx.stroke();
    ctx.fillStyle='#27a879';ctx.beginPath();ctx.roundRect(205,365,70,57,11);ctx.fill();
    ctx.fillStyle='#63766b';ctx.font='23px -apple-system, sans-serif';ctx.fillText('Tap to wake',240,585);
    screenTexture.needsUpdate=true;
  }
  window.addEventListener('clock-change',drawDisplay);
  drawDisplay();setInterval(drawDisplay,30000);
  const display=new THREE.Mesh(new THREE.PlaneGeometry(.508,.782),new THREE.MeshBasicMaterial({map:screenTexture,toneMapped:false}));
  display.position.set(.48,.64,.809);fridge.add(display);
  const rightParts=[rightPanel,...fridge.children.slice(rightStart)];
  const leftHinge=new THREE.Group();leftHinge.position.set(-.878,0,.69);fridge.add(leftHinge);
  const rightHinge=new THREE.Group();rightHinge.position.set(.874,0,.69);fridge.add(rightHinge);
  scene.updateMatrixWorld(true);
  leftParts.forEach(part=>leftHinge.attach(part));rightParts.forEach(part=>rightHinge.attach(part));
  // Restrained top trim, lower plinth and adjustable feet.
  box(1.76,.025,1.29,0,1.745,-.045,enamel,.008);
  box(1.65,.045,.10,0,-1.725,.57,shell,.012);
  box(.14,.075,.23,-.68,-1.773,.36,feet,.014);
  box(.14,.075,.23,.68,-1.773,.36,feet,.014);
  // Soft contact shadow; the environment itself stays one solid colour.
  const c=document.createElement('canvas');c.width=c.height=128;
  const ctx=c.getContext('2d');const g=ctx.createRadialGradient(64,64,10,64,64,64);
  g.addColorStop(0,'rgba(45,50,43,.20)');g.addColorStop(1,'rgba(45,50,43,0)');
  ctx.fillStyle=g;ctx.fillRect(0,0,128,128);
  const shadow=new THREE.Mesh(new THREE.PlaneGeometry(3.1,2.5),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(c),transparent:true,depthWrite:false}));
  shadow.rotation.x=-Math.PI/2;shadow.position.y=-1.815;scene.add(shadow);
  const start=new THREE.Vector3(),end=new THREE.Vector3();
  function resize(){
    const {width,height}=host.getBoundingClientRect();
    renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();
    // Fit by both dimensions so narrow phones do not crop the doors.
    const halfFov=THREE.MathUtils.degToRad(camera.fov/2);
    const distance=Math.max(2.55/Math.tan(halfFov),1.50/(Math.tan(halfFov)*camera.aspect));
    start.set(-distance*.31,distance*.115,distance*.95);
    const near=Math.max(2.12/Math.tan(halfFov),1.09/(Math.tan(halfFov)*camera.aspect));
    end.set(0,.06,near);
  }
  let activePage=null;
  function updateCabinetNavigation(){
    const activeTab=activePage==='recipes'?'recipe':activePage??activeCabinet;
    for(const button of document.querySelectorAll('.inventory-nav button')){
      const selected=button.id===activeTab+'-button'||(activeTab==='fridge'&&button.dataset.section==='fridge-section');
      button.classList.toggle('active',selected);
      if(selected)button.setAttribute('aria-current','page');else button.removeAttribute('aria-current');
    }
    const pageLabels={menu:'Settings',recipes:'Recipes'};
    inventory.setAttribute('aria-label',pageLabels[activePage] ?? (activeCabinet==='drinks'?'Drinks cabinet':'Fridge inventory'));
    host.setAttribute('aria-label',activeCabinet==='drinks'?'Drinks cabinet. Tap a bottle for details; swipe each shelf to browse.':'Open fridge. Tap food to view it; swipe each shelf to browse.');
    document.querySelector('#close-fridge').setAttribute('aria-label',activeCabinet==='drinks'?'Back to fridge':'Back to closed fridge');
  }
  function selectCabinet(kind){
    if(phase!=='inventory'||cabinetTransition||!['fridge','drinks'].includes(kind))return;
    setPage(null);
    if(kind===activeCabinet){updateCabinetNavigation();return;}
    cancelShelfGesture();
    const outgoing=stockedInterior,direction=kind==='drinks'?1:-1;
    activeCabinet=kind;stockedInterior=snapshotCabinet(kind);fridge.add(stockedInterior);
    updateCabinetNavigation();
    if(reducedMotion.matches){fridge.remove(outgoing);outgoing.userData.dispose();return;}
    stockedInterior.userData.setSlide(direction*CABINET_SLIDE);
    cabinetTransition={outgoing,direction,start:performance.now()};
  }
  function setPage(next){
    if(next===activePage)return;
    cancelShelfGesture();
    if(activePage){
      document.body.classList.remove(activePage+'-open');
      window.dispatchEvent(new Event(activePage+'-hide'));
    }
    activePage=next;
    host.inert=Boolean(next);
    if(next){
      document.body.classList.add(next+'-open');
      window.dispatchEvent(new Event(next+'-show'));
    }
    updateCabinetNavigation();
  }
  for(const [event,page] of [['recipe-select','recipes'],['menu-select','menu']]){
    window.addEventListener(event,()=>{if(phase==='inventory'&&!cabinetTransition)setPage(page);});
  }
  window.addEventListener('cabinet-select',event=>selectCabinet(event.detail));
  function act(){
    if(phase==='home'){
      focused=true;phase='zooming';transitionStart=performance.now();
      document.body.classList.add('zoomed');host.setAttribute('aria-label','Close-up fridge. Tap to open both doors and see inventory.');
    }else if(phase==='focused'){
      syncInterior();
      document.querySelector('.inventory-scroll').scrollTop=0;
      phase='opening';transitionStart=performance.now();
    }
  }
  function returnToFridge(){
    if(phase!=='inventory'||cabinetTransition)return;
    if(activePage){setPage(null);return;}
    if(activeCabinet==='drinks'){selectCabinet('fridge');return;}
    cancelShelfGesture();
    inventory.inert=true;host.inert=false;document.body.classList.remove('inventory-ready');
    document.body.classList.remove('interior-open');
    phase='closing';transitionStart=performance.now();host.focus({preventScroll:true});
  }
  document.querySelector('#close-fridge').onclick=returnToFridge;
  const ray=new THREE.Raycaster();let pointerStart=null,touchShelf=null;
  function cancelShelfGesture(){
    if(pointerStart?.id!==undefined&&host.hasPointerCapture(pointerStart.id))host.releasePointerCapture(pointerStart.id);
    pointerStart=null;touchShelf=null;
  }
  function moveShelf(gesture,x){
    const dx=x-gesture.x;if(Math.abs(dx)<=8&&!gesture.moved)return;
    gesture.moved=true;gesture.row.style.scrollSnapType='none';
    gesture.row.scrollLeft=clamp(gesture.left-dx,0,Math.max(0,gesture.row.scrollWidth-gesture.row.clientWidth));
    stockedInterior.userData.updatePositions();
  }
  function pointRay(e){const r=host.getBoundingClientRect();ray.setFromCamera(new THREE.Vector2((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1),camera);}
  function shelfAt(e){
    pointRay(e);const point=new THREE.Vector3();
    ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,0,1),0),point);
    const {top,pitch,scale,rowElements}=stockedInterior.userData;
    const index=Math.round((top-point.y)/(pitch*scale));
    return rowElements[Math.max(0,Math.min(rowElements.length-1,index))];
  }
  function hitStock(e){
    pointRay(e);
    for(const hit of ray.intersectObject(stockedInterior,true)){
      if(!visibleAt(hit.object,hit.point))continue;
      let item=hit.object,category=null;
      while(item&&item!==stockedInterior){
        if(!item.visible){category=null;break;}
        if(item.userData.category)category=item;
        item=item.parent;
      }
      if(category)return category;
    }
    return null;
  }
  host.addEventListener('pointerdown',e=>{
    if(!e.isPrimary||activePage||pointerStart||cabinetTransition||!['home','focused','inventory'].includes(phase))return;
    const inCabinet=phase==='inventory';
    const row=inCabinet?shelfAt(e):null;
    pointerStart={id:e.pointerId,x:e.clientX,y:e.clientY,row,left:row?boundedScroll(row):0};
    if(inCabinet)host.setPointerCapture(e.pointerId);
  });
  host.addEventListener('pointermove',e=>{
    if(pointerStart?.id!==e.pointerId||phase!=='inventory'||cabinetTransition)return;
    if(pointerStart.row)moveShelf(pointerStart,e.clientX);
  });
  function cancelPointer(e){if(pointerStart?.id===e.pointerId)cancelShelfGesture();}
  host.addEventListener('pointercancel',cancelPointer);
  host.addEventListener('lostpointercapture',cancelPointer);
  window.addEventListener('blur',cancelShelfGesture);
  host.addEventListener('pointerup',e=>{
    const gesture=pointerStart;
    if(gesture?.id!==e.pointerId||cabinetTransition)return;
    pointerStart=null;
    if(gesture.moved||Math.hypot(e.clientX-gesture.x,e.clientY-gesture.y)>12)return;
    if(phase==='inventory'){
      const item=hitStock(e);
      if(item){
        const {row,index}=item.userData.category;
        stockedInterior.userData.rowElements[row].querySelectorAll('.food-card')[index]?.click();
      }
    }else{pointRay(e);if(ray.intersectObject(fridge,true).length)act();}
  });

  host.addEventListener('touchstart',e=>{
    if(phase!=='inventory'||cabinetTransition||e.touches.length!==1)return;
    const touch=e.touches[0],row=shelfAt(touch);if(!row)return;touchShelf={row,x:touch.clientX,left:boundedScroll(row)};
  },{passive:true});
  host.addEventListener('touchmove',e=>{
    if(!touchShelf||phase!=='inventory'||cabinetTransition||e.touches.length!==1)return;
    const dx=e.touches[0].clientX-touchShelf.x;if(Math.abs(dx)<8)return;
    e.preventDefault();if(pointerStart)pointerStart.moved=true;
    moveShelf(touchShelf,e.touches[0].clientX);
  },{passive:false});
  host.addEventListener('touchend',()=>{touchShelf=null;});
  host.addEventListener('touchcancel',()=>{touchShelf=null;});
  host.addEventListener('keydown',e=>{
    if(e.key==='Enter'||e.key===' '){e.preventDefault();act();}
    if(e.key==='Escape'&&phase==='focused'){focused=false;phase='home';document.body.classList.remove('zoomed');host.setAttribute('aria-label','White double-door fridge. Tap to zoom in.');}
  });
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!document.querySelector('dialog[open]'))returnToFridge();});
  new ResizeObserver(resize).observe(host);resize();
  let last=0;
  const ease=t=>t*t*(3-2*t);
  function frame(t){requestAnimationFrame(frame);const dt=Math.min((t-last)/1000,.05);last=t;
    if(activePage)return;

    progress+=((focused?1:0)-progress)*(reducedMotion.matches?1:1-Math.exp(-dt*6));
    if(cabinetTransition){
      const {outgoing,direction,start:began}=cabinetTransition;
      const fraction=Math.min(1,(t-began)/600),slide=ease(fraction);
      outgoing.userData.setSlide(-direction*CABINET_SLIDE*slide);stockedInterior.userData.setSlide(direction*CABINET_SLIDE*(1-slide));
      if(fraction===1){fridge.remove(outgoing);outgoing.userData.dispose();cabinetTransition=null;}
    }
    const elapsed=t-transitionStart;
    if(phase==='zooming'&&(elapsed>650||reducedMotion.matches))phase='focused';
    // Stay in this renderer: opening and browsing share one camera and cabinet.
    if(phase==='opening'){
      opening=ease(Math.min(elapsed/(reducedMotion.matches?1:1350),1));
      if(reducedMotion.matches||elapsed>2300){
        opening=1;phase='inventory';inventory.inert=false;
        document.body.classList.add('interior-open','inventory-ready');
        updateCabinetNavigation();
      }
    }
    if(phase==='closing'){
      opening=1-ease(Math.max(0,Math.min((elapsed-550)/(reducedMotion.matches?1:1200),1)));
      if(reducedMotion.matches||elapsed>1800){opening=0;phase='focused';}
    }
    centreSeal.visible=opening<.03;
    leftHinge.rotation.y=-opening*Math.PI*.57;rightHinge.rotation.y=opening*Math.PI*.57;
    interiorLight.intensity=opening*.7;
    const push=phase==='inventory'?1:phase==='opening'?(reducedMotion.matches?1:ease(Math.max(0,Math.min((elapsed-850)/1300,1)))):phase==='closing'?1-ease(Math.min(elapsed/700,1)):0;
    camera.position.lerpVectors(start,end,progress);camera.position.z-=push*1.10;
    camera.position.y-=push*.12;
    camera.lookAt(0,-push*.12,0);renderer.render(scene,camera);
  }requestAnimationFrame(frame);
}catch(error){console.error(error);document.querySelector('#render-error').hidden=false;}
