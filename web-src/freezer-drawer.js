import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import {boxPlanes, CABINET_BOUNDS} from './cabinet-geometry.mjs';
import {moveToStack} from './game-layout.mjs';
import {foodStatus,daysUntil} from './food-data.mjs';

export const drawerTravel=1.58;
export const drawerBed=-.65;
const colors=['#427655','#d4a642','#82a16c','#eee4be','#e8a64f','#9cbcab','#ba644e','#d5a562'];
const names={'Frozen peas':'Peas','Mixed vegetables':'Mixed veg','Vanilla ice cream':'Vanilla','Mango sorbet':'Mango','Vegetable dumplings':'Dumplings','Margherita pizza':'Margherita','Vegetable curry':'Veg curry'};

export function attachFreezerDrawer(stage,categories,game){
 const drawer=new THREE.Group();
 drawer.userData.drawer=true;
 stage.add(drawer);
 const materials=new Set(),geometries=new Set(),textures=new Set();
 const planes=boxPlanes(CABINET_BOUNDS).slice(0,2);
 function material(color,properties={}){
  const m=new THREE.MeshStandardMaterial({color,roughness:.48,clippingPlanes:planes,...properties});
  materials.add(m);return m;
 }
 function part(parent,geometry,mat,x,y,z){
  geometries.add(geometry);
  const m=new THREE.Mesh(geometry,mat);m.position.set(x,y,z);parent.add(m);return m;
 }
 function block(parent,w,h,d,x,y,z,mat,r=.018){
  return part(parent,new RoundedBoxGeometry(w,h,d,3,r),mat,x,y,z);
 }
 function print(parent,w,h,x,y,z,paint,flat=false){
  const c=document.createElement('canvas');c.width=384;c.height=192;
  paint(c.getContext('2d'));
  const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;textures.add(texture);
  const m=new THREE.MeshBasicMaterial({map:texture,toneMapped:false,transparent:true,clippingPlanes:planes});
  materials.add(m);
  const p=part(parent,new THREE.PlaneGeometry(w,h),m,x,y,z);
  if(flat)p.rotation.x=-Math.PI/2;
  return p;
 }
 const ivory=material(0xf0f3ef),liner=material(0xd5dfd8),rim=material(0xb1c5ba),recess=material(0x70877b);
 // The front seals the lower cavity while the basket, partitions and food move on the same rails.
 block(drawer,1.51,1.55,.075,0,-.805,.45,ivory,.035);
 block(drawer,1.48,.07,1.00,0,drawerBed-.035,-.055,liner);
 for(const x of [-.731,.731])block(drawer,.045,.60,1.00,x,drawerBed+.28,-.055,ivory);
 block(drawer,1.49,.60,.045,0,drawerBed+.28,-.54,ivory);
 block(drawer,1.39,.108,.028,0,-.19,.49,recess,.015);
 block(drawer,1.42,.055,.105,0,-.153,.504,ivory,.021);
 print(drawer,.34,.17,0,-.40,.490,ctx=>{
  ctx.strokeStyle='#467563';ctx.lineWidth=5;ctx.lineCap='round';
  ctx.save();ctx.translate(192,66);
  for(let i=0;i<6;i++){ctx.rotate(Math.PI/3);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-38);ctx.moveTo(-11,-22);ctx.lineTo(0,-30);ctx.lineTo(11,-22);ctx.stroke();}
  ctx.restore();ctx.fillStyle='#466758';ctx.textAlign='center';ctx.font='600 37px -apple-system,sans-serif';ctx.fillText('FREEZER',192,154);
 });
 const foods=categories.flatMap(group=>(group.userData.foods??[]).filter(food=>food.quantity>0).map(food=>({food,category:group.name})));
 const columns=3,rows=Math.max(1,Math.ceil(foods.length/columns));
 const strideX=.464,strideZ=.90/rows,depth=Math.min(.245,strideZ*.83);
 for(let i=1;i<columns;i++)block(drawer,.014,.105,.92,(i-1.5)*strideX,drawerBed+.052,-.045,rim,.005);
 const pieces=[];
 for(const [i,{food,category}] of foods.entries()){
  const pack=new THREE.Group();pack.userData.freezerFood=food;drawer.add(pack);
  const tint=colors[i%colors.length],wrap=material(tint);
  const round=category==='Ice cream',height=round ? .153 : .115;
  const w=round?Math.min(.34,depth*1.3):.384;
  if(round){
   const tub=part(pack,new THREE.CylinderGeometry(.5,.44,height,36),ivory,0,height/2,0);tub.scale.set(w,1,depth);
   const lid=part(pack,new THREE.CylinderGeometry(.515,.515,.028,36),wrap,0,height,0);lid.scale.set(w,1,depth);
  }else{
   block(pack,w,height,depth,0,height/2,0,wrap,.026);
   const seam=category==='Frozen veg';
   if(seam)for(const side of [-1,1])block(pack,.019,.035,depth*.96,side*(w/2-.008),height*.5,0,wrap,.005);
   else block(pack,w*.98,.022,depth*.99,0,height-.005,0,ivory,.009);
  }
  print(pack,w*(round ? .76 : .87),depth*(round ? .68 : .88),0,height+.016,0,ctx=>{
   ctx.fillStyle='#faf8ee';ctx.beginPath();ctx.roundRect(0,0,384,192,round?58:13);ctx.fill();
   ctx.textAlign='center';ctx.font='74px Apple Color Emoji,sans-serif';ctx.fillText(food.icon??'',192,87);
   ctx.fillStyle='#203d32';ctx.font='bold 46px -apple-system,sans-serif';ctx.fillText(names[food.name]??food.name,192,151,350);
  },true);
  const alert=print(pack,.083,.083,w*.36,height+.021,-depth*.32,ctx=>{
   ctx.fillStyle='#d93b35';ctx.beginPath();ctx.ellipse(192,96,185,93,0,0,Math.PI*2);ctx.fill();
   ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='bold 150px -apple-system,sans-serif';ctx.fillText('!',192,151);
  },true);
  const col=i%columns,row=Math.floor(i/columns);
  pack.position.set((col-1)*strideX,drawerBed+.004,(row+.5)*strideZ-.50);
  pack.rotation.y=(i%3-1)*.035;
  pieces.push({pack,alert,food,angle:pack.rotation.y,id:JSON.stringify([category,food.id??food.name]),height:height+.021,velocity:0});
 }
 const data=stage.userData,dispose=data.dispose,updateAlerts=data.updateAlerts;
 let nextCheck=0;
 data.drawer=drawer;
 if(game){
  const layout=Array.from({length:rows},()=>Array.from({length:columns},()=>[]));
  const byID=new Map(pieces.map(p=>[p.id,p]));
  const placed=new Set();
  const storageKey='freezer-drawer-layout-v1';
  const fits=stack=>stack.reduce((sum,id)=>sum+byID.get(id).height,0)<.55;
  let saved;
  try{saved=JSON.parse(localStorage.getItem(storageKey));}catch{}
  for(let r=0;r<rows;r++)for(let c=0;c<columns;c++){
   const ids=saved?.[r]?.[c];
   if(!Array.isArray(ids))continue;
   for(const id of ids)if(byID.has(id)&&!placed.has(id)&&fits([...layout[r][c],id])){
    layout[r][c].push(id);placed.add(id);
   }
  }
  for(const [i,p] of pieces.entries()){
   if(placed.has(p.id))continue;
   const preferred=layout[Math.floor(i/columns)][i%columns];
   const cell=fits([...preferred,p.id])?preferred:layout.flat().find(cell=>fits([...cell,p.id]));
   cell.push(p.id);
  }
  let held=null;
  function settle(dt,snap){
   layout.forEach((row,r)=>row.forEach((ids,c)=>{
    let floor=drawerBed+.004;
    for(const id of ids){
     const p=byID.get(id);
     if(p===held)continue;
     const pos=p.pack.position,amount=snap?1:1-Math.exp(-dt*22);
     pos.x+=((c-1)*strideX-pos.x)*amount;
     pos.z+=((r+.5)*strideZ-.50-pos.z)*amount;
     p.velocity-=dt*3.4;
     pos.y+=dt*p.velocity;
     if(snap||pos.y<=floor){
      pos.y=floor;p.velocity=snap||Math.abs(p.velocity)<.20?0:Math.abs(p.velocity)*.23;
     }
     floor=pos.y+p.height;
    }
   }));
  }
  settle(0,true);
  data.drawerGame={
   begin(food){held=pieces.find(p=>p.food===food);if(held){held.pack.position.y=drawerBed+.58;held.velocity=0;}},
   drag(point){if(held){held.pack.position.x=THREE.MathUtils.clamp(point.x,-strideX,strideX);held.pack.position.z=THREE.MathUtils.clamp(point.z,-.5+strideZ/2,.4-strideZ/2);}},
   release(){
    if(!held)return;
    const {x,z}=held.pack.position;
    if(moveToStack(layout,held.id,Math.round((z+.50)/strideZ-.5),Math.round(x/strideX)+1,fits)){
     try{localStorage.setItem(storageKey,JSON.stringify(layout));}catch{}
    }
    held=null;
   },
   cancel(){held=null;settle(0,true);},
   tick:settle
  };
 }
 data.updateAlerts=(t,reduced,show,today=new Date())=>{
  updateAlerts(t,reduced,show,today);
  const refresh=t>=nextCheck;
  for(const piece of pieces){
   if(refresh){piece.urgent=foodStatus(piece.food,today).urgent;piece.expired=daysUntil(piece.food.expiresOn,today)<0&&piece.urgent;}
   piece.alert.visible=show&&piece.urgent;
   if(game)piece.pack.rotation.y=piece.angle+(piece.expired&&!reduced?Math.sin(t*.014)*.022:0);
  }
  if(refresh)nextCheck=t+60000;
 };
 data.dispose=()=>{dispose();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());};
}
