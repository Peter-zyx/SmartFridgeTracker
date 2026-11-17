import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {buildCabinetSnapshot,CABINET_SLIDE,CABINET_BOUNDS,boundedScroll,visibleAt} from '../web-src/cabinet-geometry.mjs';
// Textures need a canvas-shaped object; these tests inspect real Three.js mesh
// geometry and clipping planes without substituting any model or renderer math.
globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>({fillRect(){},fillText(){},createRadialGradient:()=>({addColorStop(){}})})})};
const {categoryModel}=await import('../web-src/interior.js');
function fixture(names,width=361){
 const cards=names.map((_,i)=>({offsetLeft:17+i*132,offsetWidth:125}));
 const element={clientWidth:width,scrollWidth:Math.max(width,34+names.length*132),scrollLeft:0,querySelectorAll:()=>cards};
 const part=(w,h,d,y,z)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),new THREE.MeshStandardMaterial());m.position.set(0,y,z);return m;};
 return {element,groups:names.map(categoryModel),floor:part(1,.045,1.6,-.64,0),frontRail:part(1,.065,.07,-.64,.83),rearRail:part(1,.035,.04,-.62,-.74)};
}
const foods=['Dairy','Vegetables','Leftovers','Yogurt','Meat & fish','Sauces','Deli','Fruit','Eggs','Snacks','Frozen veg','Ice cream','Frozen meals'];
const drinks=['Milk','Oat milk','Juice','Cola','Water','Sparkling water','Tonic','Wine','Beer','Cider'];
function firstMesh(group){let found;group.traverse(o=>{if(!found&&o.isMesh)found=o;});return found;}
test('offscreen yogurt cannot leak into the incoming drinks cabinet at any transition frame',()=>{
 const outgoing=buildCabinetSnapshot([fixture(['Dairy','Vegetables','Leftovers','Yogurt'])],3.61);
 const incoming=buildCabinetSnapshot([fixture(['Milk','Oat milk','Juice'])],3.61,'drinks');
 for(const direction of [-1,1])for(let frame=0;frame<=120;frame++){
  const t=frame/120;
  outgoing.userData.setSlide(-direction*CABINET_SLIDE*t);
  incoming.userData.setSlide(direction*CABINET_SLIDE*(1-t));
  outgoing.updateMatrixWorld(true);incoming.updateMatrixWorld(true);
  for(const stage of [outgoing,incoming])for(const {clone} of stage.userData.positions){
   const mesh=firstMesh(clone),point=clone.localToWorld(new THREE.Vector3(0,.2,0));
   if(visibleAt(mesh,point)){
    assert.ok(point.x>=CABINET_BOUNDS.left-1e-6&&point.x<=CABINET_BOUNDS.right+1e-6);
    assert.ok(point.x>=stage.position.x+CABINET_BOUNDS.left-1e-6&&point.x<=stage.position.x+CABINET_BOUNDS.right+1e-6);
    const other=stage===incoming?outgoing:incoming;
    assert.equal(visibleAt(firstMesh(other.userData.positions[0].clone),point),false,'Two stages must not share a visible stock position');
   }
  }
 }
 outgoing.userData.setSlide(-.8);outgoing.updateMatrixWorld(true);
 const yogurt=outgoing.userData.positions[3].clone;
 const leakedPoint=yogurt.localToWorld(new THREE.Vector3(0,.2,0));
 assert.ok(leakedPoint.x>0&&leakedPoint.x<CABINET_BOUNDS.right,'Regression point must be inside the overall fridge');
 assert.equal(visibleAt(firstMesh(yogurt),leakedPoint),false,'But outside its own moving cabinet');
});
test('all actual food and bottle models fit above glass and below the next shelf at 1–6 fridge shelf counts',()=>{
 for(const width of [288,361,398])for(let count=2;count<=7;count++){
  const rows=Array.from({length:count},()=>fixture([...foods,...drinks],width));
  const stage=buildCabinetSnapshot(rows,width/100);stage.updateMatrixWorld(true);
  for(const {clone,floorY,ceilingY} of stage.userData.positions){
   const bounds=new THREE.Box3().setFromObject(clone);
   assert.ok(bounds.min.y>=floorY-1e-5,`Below glass: ${bounds.min.y} < ${floorY}`);
   assert.ok(bounds.max.y<=ceilingY+1e-5,`Through shelf: ${bounds.max.y} > ${ceilingY}`);
  }
  stage.userData.dispose();
 }
});
test('Safari overscroll is clamped and returning to a cabinet restores the same positions',()=>{
 const row=fixture(['Dairy','Vegetables','Leftovers','Yogurt']);
 const stage=buildCabinetSnapshot([row],3.61);
 row.element.scrollLeft=-80;assert.equal(boundedScroll(row.element),0);stage.userData.updatePositions();
 const left=stage.userData.positions[0].clone.position.x;
 row.element.scrollLeft=0;stage.userData.updatePositions();assert.equal(stage.userData.positions[0].clone.position.x,left);
 row.element.scrollLeft=10000;stage.userData.updatePositions();
 const right=stage.userData.positions[0].clone.position.x;
 row.element.scrollLeft=row.element.scrollWidth-row.element.clientWidth;
 const restored=buildCabinetSnapshot([row],3.61);assert.equal(restored.userData.positions[0].clone.position.x,right);
});
test('content behind the rear liner, outside sidewalls or beyond the door is not rendered or clickable',()=>{
 const stage=buildCabinetSnapshot([fixture(['Milk'])],3.61,'drinks');const mesh=firstMesh(stage.userData.positions[0].clone);
 for(const point of [new THREE.Vector3(-.80,1,0),new THREE.Vector3(.80,1,0),new THREE.Vector3(0,1,.62),new THREE.Vector3(0,1,-.60)])assert.equal(visibleAt(mesh,point),false);
});

test('expiry marker distinguishes fresh, due soon, expired and undated food, and refreshes after date changes',async()=>{
 const {expiryAlert}=await import('../web-src/food-data.mjs');
 const today=new Date(2026,10,10);
 const food=expiresOn=>({quantity:1,expiresOn});
 assert.equal(expiryAlert([food('2026-11-13')],today).urgent,true);
 assert.equal(expiryAlert([food('2026-11-14')],today).urgent,false);
 assert.equal(expiryAlert([food('2026-11-09')],today).expired,true);
 assert.equal(expiryAlert([food(null)],today).urgent,false);
 assert.equal(expiryAlert([{quantity:0,expiresOn:'2026-11-09'}],today).urgent,false);
 const row=fixture(['Milk','Juice']);
 row.groups[0].userData.foods=[food('2026-11-13')];
 row.groups[1].userData.foods=[food('2026-11-14')];
 const stage=buildCabinetSnapshot([row],3.61,'drinks');
 stage.userData.updateAlerts(60001,true,true,today);
 assert.equal(stage.userData.alerts[0].marker.visible,true);
 assert.equal(stage.userData.alerts[1].marker.visible,false);
 stage.userData.updateAlerts(120002,true,true,new Date(2026,10,11));
 assert.equal(stage.userData.alerts[1].marker.visible,true);
 stage.userData.updateAlerts(120003,true,false);
 assert.equal(stage.userData.alerts[0].marker.visible,false,'Closed cabinet suppresses alerts');
});

test('alert follows its stock, shares clipping and click target, and does not cross the upper shelf',()=>{
 const row=fixture(['Dairy','Vegetables','Leftovers','Yogurt']);
 const stage=buildCabinetSnapshot([row,row,row,row,row,row,row],3.61);
 row.element.scrollLeft=95;stage.userData.updatePositions();stage.userData.setSlide(-.8);stage.updateMatrixWorld(true);
 for(const {clone,marker,ceilingY} of stage.userData.positions){
  assert.equal(marker.position.x,clone.position.x+.23);
  assert.deepEqual(marker.userData.category,clone.userData.category);
  const mesh=firstMesh(marker),stock=firstMesh(clone);
  assert.equal(mesh.material.depthTest,true);
  assert.equal(mesh.material.clippingPlanes,stock.material.clippingPlanes);
  assert.ok(new THREE.Box3().setFromObject(marker).max.y<=ceilingY+1e-5);
 }
});

test('game pieces move between shelves, settle, reject overfilled stacks, and restore after reopening', async () => {
 const {buildGameCabinet}=await import('../web-src/game-cabinet.mjs');
 const storage=new Map();
 globalThis.localStorage={getItem:key=>storage.get(key)??null,setItem:(key,value)=>storage.set(key,value)};
 const rows=[fixture(['Milk','Juice','Cola']),fixture(['Water','Beer'])];
 for(const row of rows)row.groups.forEach((group,index)=>{
   group.name=String(group.id);
   group.userData.foods=[{id:group.name,quantity:1,expiresOn:index===0?'2026-11-10':'2026-11-12'}];
 });
 const build=()=>buildGameCabinet(rows,3.61,'drinks');
 let stage=build(),game=stage.userData.game;
 const pieces=stage.children.filter(child=>child.userData.pieceId);
 const [milk,juice,cola,water,beer]=pieces;
 const initial=milk.position.clone();
 function drop(piece,target) {
   game.begin(piece.userData.pieceId);game.drag(target.x,target.y);game.release();
 }
 const settle=()=>{for(let i=0;i<150;i++)game.tick(1/60,false);};
 drop(milk,water.position.clone());
 settle();
 assert.equal(milk.position.x,water.position.x);
 assert.ok(milk.position.y>water.position.y+.1);
 const originalHeight=milk.position.y;
 game.begin(water.userData.pieceId);
 game.tick(1/60,false);
 assert.ok(milk.position.y<originalHeight && milk.position.y>water.position.y,'Upper piece must fall over time');
 game.drag(beer.position.x,beer.position.y);game.release();
 settle();
 assert.ok(milk.position.y<water.position.y,'Removing support settles the upper piece');
 // Drop above the bare glass and observe the first impact and rebound.
 game.begin(milk.userData.pieceId);
 const floor=milk.position.y;
 game.drag(milk.position.x,floor+.28);game.release();
 assert.equal(milk.position.y,floor+.28,'Release starts at the hand');
 let landed=false,rebounded=false;
 for(let i=0;i<180;i++){
   game.tick(1/120,false);
   assert.ok(milk.position.y>=floor-1e-7,'The base cannot tunnel through glass');
   if(milk.position.y<=floor+.0001 && milk.scale.y<1)landed=true;
   else if(landed && milk.position.y>floor+.003)rebounded=true;
 }
 assert.ok(landed && rebounded,'Drop compresses on impact and rebounds');
 assert.equal(milk.position.y,floor);
 assert.equal(milk.scale.y,1);
 game.begin(juice.userData.pieceId);game.drag(-8,1);game.cancel();
 assert.notEqual(juice.position.x,-8);
 drop(milk,new THREE.Vector3(milk.position.x,floor+.18,0));
 game.tick(1/60,true);
 assert.equal(milk.position.y,floor,'Reduced motion settles immediately');
 const persisted=milk.position.clone();
 stage.userData.updateAlerts(60150,false,false,new Date(2026,10,11));
 assert.notEqual(milk.rotation.z,0,'Expired stock shakes with warning badges off');
 assert.equal(juice.rotation.z,0,'Use-soon stock does not shake');
 stage.userData.updateAlerts(60151,true,true,new Date(2026,10,11));
 assert.equal(milk.rotation.z,0);
 stage.userData.dispose();stage=build();game=stage.userData.game;
 assert.deepEqual(game.position(milk.userData.pieceId).toArray(),persisted.toArray());
 assert.notDeepEqual(persisted.toArray(),initial.toArray());
 const {moveToStack}=await import('../web-src/game-layout.mjs');
 const stacks=[[['a'],['b','c']]];
 assert.equal(moveToStack(stacks,'a',0,1,stack=>stack.length<=2),false);
 assert.deepEqual(stacks,[[['a'],['b','c']]]);
 stage.userData.dispose();
});
