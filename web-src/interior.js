import * as THREE from 'three';
import {buildCabinetSnapshot} from './cabinet-geometry.mjs';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

// One renderer per cabinet, with a scissored 3D scene for each independently
// scrolling shelf. Transparent DOM hit targets retain native accessibility.
const mounted=new Map();
const material=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.46,...extra});
const white=material(0xffffff),green=material(0x27a879),darkGreen=material(0x285840),cream=material(0xeee6ce),orange=material(0xf3a66b);
const glass=material(0xd3e8df,{transparent:true,opacity:.3,roughness:.15,metalness:.08,depthWrite:false});
const labelCache=new Map();
function labelTexture(text,color='#183a32',background='#fffef6'){
 const key=text+color+background;if(labelCache.has(key))return labelCache.get(key);
 const c=document.createElement('canvas');c.width=256;c.height=256;const ctx=c.getContext('2d');
 ctx.fillStyle=background;ctx.fillRect(0,0,256,256);ctx.textAlign='center';ctx.fillStyle=color;
 ctx.font='600 38px -apple-system,sans-serif';ctx.fillText(text,128,145);
 const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;labelCache.set(key,texture);return texture;
}
function mesh(group,geo,mat,x,y,z){const m=new THREE.Mesh(geo,mat);m.position.set(x,y,z);group.add(m);return m;}
function box(g,w,h,d,x,y,z,mat=white,r=.025){return mesh(g,new RoundedBoxGeometry(w,h,d,3,r),mat,x,y,z);}
function ball(g,r,x,y,z,mat,sx=1,sy=1,sz=1){const m=mesh(g,new THREE.SphereGeometry(r,20,14),mat,x,y,z);m.scale.set(sx,sy,sz);return m;}
function cylinder(g,rt,rb,h,x,y,z,mat){return mesh(g,new THREE.CylinderGeometry(rt,rb,h,24),mat,x,y,z);}
function label(g,text,w,h,x,y,z,color,bg){return mesh(g,new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:labelTexture(text,color,bg),toneMapped:false}),x,y,z);}
function carton(g,x,z,scale=1){
 const c=new THREE.Group();c.position.set(x,0,z);c.scale.setScalar(scale);g.add(c);
 box(c,.39,.82,.34,0,.41,0,white);box(c,.4,.19,.35,0,.53,0,green,.01);
 const profile=new THREE.Shape();profile.moveTo(-.195,0);profile.lineTo(.195,0);profile.lineTo(0,.17);profile.closePath();
 const roofGeometry=new THREE.ExtrudeGeometry(profile,{depth:.34,bevelEnabled:false});roofGeometry.translate(0,0,-.17);mesh(c,roofGeometry,white,0,.82,0);
 cylinder(c,.055,.055,.035,.09,.98,.04,green);label(c,'MILK',.32,.29,0,.31,.176);
}
function jar(g,x,z,color=0xc38e4c,text=''){const j=new THREE.Group();j.position.set(x,0,z);g.add(j);const fill=material(color);
 cylinder(j,.17,.17,.48,0,.24,0,fill);cylinder(j,.184,.184,.055,0,.51,0,darkGreen);
 cylinder(j,.18,.18,.48,0,.25,0,glass);if(text)label(j,text,.26,.20,0,.27,.185);return j;}
function tub(g,x,z,text='YOGURT',color=0xffffff){const t=new THREE.Group();t.position.set(x,0,z);g.add(t);cylinder(t,.22,.17,.43,0,.215,0,material(color));cylinder(t,.235,.235,.035,0,.45,0,green);label(t,text,.32,.20,0,.25,.205);return t;}
function container(g,x,z,color=0xe5b175){const c=new THREE.Group();c.position.set(x,0,z);g.add(c);
 box(c,.65,.29,.43,0,.17,0,glass,.055);box(c,.57,.15,.35,0,.14,0,material(color),.04);
 box(c,.69,.05,.47,0,.33,0,white,.04);box(c,.21,.045,.03,0,.30,.24,green,.012);return c;
}
function vegetables(g,part){
 // A bunch of carrots and a head of leafy greens.
 if(part!=='leaves')for(let i=0;i<3;i++){const carrot=mesh(g,new THREE.ConeGeometry(.085,.59,16),material(0xe99441),.17+i*.095,.30,.08-i*.08);carrot.rotation.z=Math.PI+.15;
 for(let j=0;j<2;j++){const leaf=ball(g,.1,.18+i*.095,.63,.04-i*.08,darkGreen,.42,1.7,.4);leaf.rotation.z=(j-.5)*.5;}}
 if(part!=='carrots')for(let i=0;i<9;i++){const a=i*2.4;const leaf=ball(g,.18,-.21+Math.sin(a)*.13,.27+(i%3)*.10,-.03+Math.cos(a)*.12,material(i%2?0x608d42:0x85a85b),.7,1.4,.5);leaf.rotation.z=Math.sin(a)*.6;}
}
function eggs(g){box(g,.86,.09,.47,0,.045,0,cream,.025);for(let row=0;row<2;row++)for(let i=0;i<3;i++)ball(g,.115,(i-1)*.25,.18,(row-.5)*.23,material(0xf3e6cc),.86,1.25,.86);}
function fruit(g){const colors=[0xef9b34,0xdd6e42,0xe9b94d];for(let i=0;i<3;i++){const x=(i-1)*.23,z=i===1?-.16:.08;ball(g,.19,x,.20,z,material(colors[i]));cylinder(g,.012,.012,.075,x,.40,z,darkGreen);const leaf=ball(g,.07,x+.05,.42,z,darkGreen,1.4,.25,.6);leaf.rotation.z=.3;}}
function tray(g){box(g,.85,.045,.58,0,.03,0,white,.04);box(g,.88,.06,.025,0,.045,.3,cream,.012);}
const contactCanvas=document.createElement('canvas');contactCanvas.width=contactCanvas.height=64;
const contactContext=contactCanvas.getContext('2d');const contactGradient=contactContext.createRadialGradient(32,32,4,32,32,32);
contactGradient.addColorStop(0,'rgba(24,58,50,.24)');contactGradient.addColorStop(1,'rgba(24,58,50,0)');
contactContext.fillStyle=contactGradient;contactContext.fillRect(0,0,64,64);
const contactTexture=new THREE.CanvasTexture(contactCanvas);
// Rounded bottles share the cabinet's existing lighting and materials.
function drinkBottle(g,name){
 const styles={
  Milk:[0xf7f6ec,'MILK',0x27a879], 'Oat milk':[0xe1d3b2,'OAT',0x183a32],
  Juice:[0xe8b351,'ORANGE',0x27a879], Cola:[0x4b3024,'COLA',0x183a32],
  Water:[0xcbded6,'WATER',0x7ca28f], 'Sparkling water':[0xb9d2c1,'SPARKLING',0x183a32],
  Tonic:[0xdce4d4,'TONIC',0x183a32], Wine:[0x586c3e,'WINE',0x183a32],
  Beer:[0x80582b,'LAGER',0xc8b36f], Cider:[0x81975c,'CIDER',0x183a32]
 };
 const [color,text,capColor]=styles[name];
 const longNeck=['Wine','Beer','Cider'].includes(name);
 const points=[[0,0],[.18,0],[.21,.035],[.215,.10],[.215,.72],[.205,.80],[.17,.86],[.09,.94],[.075,longNeck?1.24:1.04],[0,longNeck?1.24:1.04]].map(([x,y])=>new THREE.Vector2(x,y));
 const body=material(color,{roughness:.25,metalness:.06});
 mesh(g,new THREE.LatheGeometry(points,32),body,0,.01,0);
 cylinder(g,.087,.087,.065,0,longNeck?1.25:1.06,0,material(capColor));
 label(g,text,.35,.32,0,.49,.218,'#183a32','#fffef6');
 // Slim specular strip suggests glass without WebGL transparency artifacts.
 const sheen=material(0xffffff,{transparent:true,opacity:.20,depthWrite:false});
 box(g,.023,.49,.008,-.13,.44,.175,sheen,.004);
 if(name==='Water'||name==='Sparkling water')for(let i=0;i<3;i++){
  const ring=mesh(g,new THREE.TorusGeometry(.216,.009,6,32),body,0,.12+i*.075,0);ring.rotation.x=Math.PI/2;
 }
 if(name==='Beer'){g.scale.setScalar(.89);}
}
export function categoryModel(name){
 const g=new THREE.Group();
 switch(name){
 case 'Milk':case 'Oat milk':case 'Juice':case 'Cola':case 'Water':case 'Sparkling water':case 'Tonic':case 'Wine':case 'Beer':case 'Cider':drinkBottle(g,name);break;
 case 'Dairy':carton(g,-.20,-.03,.92);box(g,.35,.20,.30,.27,.11,.15,material(0xf0d17d),.025);break;
 case 'Vegetables':vegetables(g);break;
 case 'Leftovers':container(g,-.10,.05,0xdca365);const top=container(g,.07,-.04,0x8ea26d);top.position.y=.37;break;
 case 'Yogurt':tub(g,-.2,0);const y=tub(g,.22,-.15,'YOGURT');y.scale.setScalar(.85);break;
 case 'Meat & fish':tray(g);const fillet=box(g,.59,.16,.32,0,.15,.02,material(0xeeaa93),.06);fillet.rotation.y=-.12;for(let i=0;i<5;i++){const stripe=box(g,.014,.005,.30,-.23+i*.105,.234,.02,material(0xfce2d0),.002);stripe.rotation.y=-.12;}break;
 case 'Sauces':jar(g,-.24,.04,0x76934c,'PESTO');const sauce=jar(g,.19,-.05,0xc0774b,'SAUCE');sauce.scale.y=1.3;break;
 case 'Deli':tray(g);cylinder(g,.22,.22,.18,-.14,.15,0,material(0xe1c69b));box(g,.3,.16,.3,.22,.15,.07,material(0xeec974));break;
 case 'Fruit':fruit(g);break;
 case 'Eggs':eggs(g);break;
 case 'Snacks':box(g,.29,.64,.15,-.19,.34,-.04,darkGreen);label(g,'COCOA',.25,.22,-.19,.42,.04,'#fff','#285840');jar(g,.22,.07,0x929154,'OLIVES');break;
 case 'Frozen veg':box(g,.55,.73,.24,0,.38,0,material(0xb9dccb),.065);label(g,'GREENS',.43,.30,0,.38,.125);break;
 case 'Ice cream':tub(g,-.19,.03,'VANILLA',0xf3e6cc);tub(g,.23,-.15,'MANGO',0xf3cf8d);break;
 case 'Frozen meals':container(g,0,0);box(g,.74,.065,.53,0,.42,0,darkGreen);break;
 default:container(g,0,0,0xb9dccb);
 }
 const contact=mesh(g,new THREE.PlaneGeometry(1.1,.85),new THREE.MeshBasicMaterial({map:contactTexture,transparent:true,depthWrite:false}),0,.004,.03);contact.rotation.x=-Math.PI/2;
 g.rotation.y=-.13;return g;
}

export function mountInterior(root,rows){
 mounted.get(root)?.dispose();
 let renderer;
 try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true});}catch(error){console.error(error);return;}
 renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0,0);
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;
 const canvas=renderer.domElement;canvas.className='interior-canvas';canvas.setAttribute('aria-hidden','true');root.prepend(canvas);root.classList.add('modeled');
 const rowElements=[...root.querySelectorAll('.shelf-row')];
 const scenes=rows.map((row,index)=>{
  const scene=new THREE.Scene();scene.background=new THREE.Color(0xf7f9f7);
  scene.add(new THREE.HemisphereLight(0xffffff,0xa8baae,2.1));
  const key=new THREE.DirectionalLight(0xffffff,2.4);key.position.set(-2,5,4);scene.add(key);
  const light=new THREE.PointLight(0xe9fff2,1.6,6);light.position.set(0,1.0,.6);scene.add(light);
  const shell=new THREE.Group();scene.add(shell);
  // Cabinet dimensions are resized to match the viewport in draw().
  const back=box(shell,1,2.5,.08,0,.25,-.8,material(0xe6ede8),.025);
  const left=box(shell,.14,2.5,1.7,-1,.25,0,white,.04),right=box(shell,.14,2.5,1.7,1,.25,0,white,.04);
  const floor=box(shell,1,.045,1.60,0,-.64,0,glass,.012);
  const rearRail=box(shell,1,.035,.04,0,-.62,-.74,white,.008);
  const frontRail=box(shell,1,.065,.07,0,-.64,.83,material(0xb9dccb,{roughness:.25,metalness:.15}),.012);
  const led=box(shell,1,.025,.025,0,1.26,-.48,new THREE.MeshBasicMaterial({color:0xfafffa}),.005);
  // Subtle back-wall air vents reinforce the interior rather than card layout.
  const vents=[];for(let n=0;n<4;n++)vents.push(box(shell,.30,.016,.008,0,.89+n*.075,-.752,material(0xcbd8cf),.004));
  const groups=row.map(category=>{const group=categoryModel(category.name);group.name=category.name;group.userData.foods=category.foods??[];group.position.y=-.61;scene.add(group);return group;});
  const camera=new THREE.OrthographicCamera(-2,2,1.2,-1.2,.1,30);camera.position.set(0,2.1,9);camera.lookAt(0,-.04,0);
  return {scene,camera,groups,back,left,right,floor,rearRail,frontRail,led,element:rowElements[index]};
 });
 let alive=true,raf=0,dirty=true,oldWidth=0,oldHeight=0;
 const resizeObserver=new ResizeObserver(()=>dirty=true);resizeObserver.observe(root);
 const markDirty=()=>dirty=true;rowElements.forEach(row=>row.addEventListener('scroll',markDirty,{passive:true}));
 const observer=new MutationObserver(markDirty);observer.observe(document.body,{attributes:true,attributeFilter:['class']});
 function draw(){
  raf=requestAnimationFrame(draw);if(!alive||!dirty||!document.body.classList.contains('inventory-visible'))return;
  const width=root.clientWidth,height=root.clientHeight;if(!width||!height)return;
  if(width!==oldWidth||height!==oldHeight){renderer.setSize(width,height,false);oldWidth=width;oldHeight=height;}
  renderer.setScissorTest(false);renderer.clear();renderer.setScissorTest(true);

  scenes.forEach(s=>{
   const row={width:s.element.clientWidth,left:s.element.offsetLeft,top:s.element.offsetTop+s.element.parentElement.offsetTop};const rowHeight=s.element.clientHeight-35;const w=row.width/100,h=rowHeight/100;
   s.camera.left=-w/2;s.camera.right=w/2;s.camera.top=h/2;s.camera.bottom=-h/2;s.camera.updateProjectionMatrix();
   s.back.scale.x=w;s.left.position.x=-w/2+.035;s.right.position.x=w/2-.035;
   for(const part of [s.floor,s.frontRail,s.rearRail,s.led])part.scale.x=w-.12;
   const cards=[...s.element.querySelectorAll('.food-card')];
   s.groups.forEach((group,i)=>{group.position.x=(cards[i].offsetLeft-s.element.scrollLeft+cards[i].offsetWidth/2-row.width/2)/100;});
   const bottom=height-row.top-rowHeight;
   renderer.setViewport(row.left,bottom,row.width,rowHeight);renderer.setScissor(row.left,bottom,row.width,rowHeight);renderer.render(s.scene,s.camera);
  });dirty=false;
 }
 draw();
 mounted.set(root,{scenes,root,dispose:()=>{alive=false;cancelAnimationFrame(raf);resizeObserver.disconnect();observer.disconnect();rowElements.forEach(row=>row.removeEventListener('scroll',markDirty));scenes.forEach(s=>s.scene.traverse(o=>{o.geometry?.dispose();if(o.material&&!Object.values({white,green,darkGreen,cream,orange,glass}).includes(o.material))o.material.dispose();}));renderer.dispose();renderer.forceContextLoss();canvas.remove();root.classList.remove('modeled');}});
}

// The opening animation uses the very same shelf geometry/materials as the
// inventory renderer, cloned only to supply a second world transform.
export function snapshotCabinet(kind='fridge'){
 const roots=kind==='drinks'?['#drinks-shelves']:['#shelves','#freezer-shelf'];
 const rows=roots.flatMap(selector=>mounted.get(document.querySelector(selector))?.scenes??[]);
 const width=document.querySelector('#shelves').clientWidth/100;
 return buildCabinetSnapshot(rows,width,kind);
}
