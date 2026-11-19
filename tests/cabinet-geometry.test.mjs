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
