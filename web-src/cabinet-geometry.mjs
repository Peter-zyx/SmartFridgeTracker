import * as THREE from 'three';
import {expiryAlert} from './food-data.mjs';
import {createExpiryMarker} from './expiry-marker.mjs';

export const CABINET_BOUNDS=Object.freeze({left:-.775,right:.775,bottom:-1.65,top:1.64,back:-.56,front:.55});
export const CABINET_SLIDE=1.60;
export const clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
export function boundedScroll(element){return clamp(element.scrollLeft,0,Math.max(0,element.scrollWidth-element.clientWidth));}
export function boxPlanes(bounds){
 return [new THREE.Plane(new THREE.Vector3(1,0,0),-bounds.left),new THREE.Plane(new THREE.Vector3(-1,0,0),bounds.right),
 new THREE.Plane(new THREE.Vector3(0,1,0),-bounds.bottom),new THREE.Plane(new THREE.Vector3(0,-1,0),bounds.top),
 new THREE.Plane(new THREE.Vector3(0,0,1),-bounds.back),new THREE.Plane(new THREE.Vector3(0,0,-1),bounds.front)];
}
export function visibleAt(object,point){
 return (!object.material?.clippingPlanes||object.material.clippingPlanes.every(plane=>plane.distanceToPoint(point)>=-1e-6));
}

// The enclosure is stationary. Only shelves and their contents participate in a
// cabinet transition. Each moving stage has its own bounds as well as the outer
// cavity bounds, so offscreen stock can never leak into the adjacent stage.
export function buildCabinetSnapshot(items,width,kind='fridge',floorLimit){
 const result=new THREE.Group(),scale=1.65/width;
 const count=Math.max(1,items.length);
 const pitch=floorLimit!==undefined?(CABINET_BOUNDS.top-floorLimit)/(count*scale):kind==='drinks'?3.16/(Math.max(1,items.length)*scale):Math.min(1.75,3.16/(Math.max(1,items.length)*scale));
 const top=floorLimit!==undefined?floorLimit+((count-1)*pitch+.6175)*scale:1.55-pitch*scale*.5;
 const materials=new Set(),ownedGeometry=new Set(),positions=[],alerts=[];
 const stageLeft=new THREE.Plane(new THREE.Vector3(1,0,0),-CABINET_BOUNDS.left);
 const stageRight=new THREE.Plane(new THREE.Vector3(-1,0,0),CABINET_BOUNDS.right);
 const planes=[...boxPlanes(CABINET_BOUNDS),stageLeft,stageRight];
 const attachMaterials=(object,clip)=>object.traverse(mesh=>{
  if(!mesh.material)return;
  mesh.material=mesh.material.clone();mesh.material.clippingPlanes=clip;materials.add(mesh.material);
 });
 items.forEach((s,index)=>{
  const rowGroup=new THREE.Group();rowGroup.scale.setScalar(scale);rowGroup.position.set(0,top-index*pitch*scale,-.03);result.add(rowGroup);
  for(const source of [s.floor,s.frontRail,s.rearRail]){
   const clone=source.clone(true);clone.scale.x=width-.12;attachMaterials(clone,planes);rowGroup.add(clone);
  }
  const cards=[...s.element.querySelectorAll('.food-card')];
  const floorY=rowGroup.position.y-.6175*scale;
  const ceilingY=index===0?CABINET_BOUNDS.top:rowGroup.position.y+(pitch-.6725)*scale;
  const foodPlanes=[...planes,new THREE.Plane(new THREE.Vector3(0,1,0),-floorY),new THREE.Plane(new THREE.Vector3(0,-1,0),ceilingY)];
  s.groups.forEach((source,i)=>{
   const clone=source.clone(true);clone.position.set(0,0,0);
   const bounds=new THREE.Box3().setFromObject(clone);
   const availableHeight=Math.min(pitch-.10,(ceilingY-floorY)/scale-.02);
   const fit=Math.min(1,availableHeight/(bounds.max.y-bounds.min.y),(cards[i].offsetWidth/100-.07)/(bounds.max.x-bounds.min.x));
   clone.scale.multiplyScalar(fit);clone.position.y=-.610-bounds.min.y*fit;
   clone.userData.category={row:index,index:i};attachMaterials(clone,foodPlanes);rowGroup.add(clone);
   const marker=createExpiryMarker(foodPlanes);
   marker.userData.category={row:index,index:i};
   marker.position.set(.23,clamp(clone.position.y+bounds.max.y*fit+.15,-.39,(ceilingY-rowGroup.position.y)/scale-.19),.48);
   marker.traverse(mesh=>{if(mesh.material)materials.add(mesh.material);if(mesh.geometry)ownedGeometry.add(mesh.geometry);});
   rowGroup.add(marker);
   const alert={marker,foods:source.userData.foods??[],status:null};alerts.push(alert);
   positions.push({clone,marker,element:s.element,card:cards[i],floorY,ceilingY});
  });
 });
 function updatePositions(){for(const {clone,marker,element,card} of positions){
  clone.position.x=(card.offsetLeft-boundedScroll(element)+card.offsetWidth/2-element.clientWidth/2)/100;
  marker.position.x=clone.position.x+.23;
 }}
 let nextAlertCheck=0;
 function updateAlerts(time,reducedMotion=false,show=true,today=new Date()){
  const refresh=time>=nextAlertCheck;if(refresh)nextAlertCheck=time+60000;
  for(const alert of alerts){
   if(refresh||!alert.status){alert.status=expiryAlert(alert.foods,today);alert.marker.userData.alertLabel=alert.status.label;}
   alert.marker.visible=show&&alert.status.urgent;
   const pulse=reducedMotion?0:(Math.sin(time/2200*Math.PI*2)+1)/2;
   alert.marker.userData.halo.scale.setScalar(1+pulse*.08);
   alert.marker.userData.halo.material.opacity=.16+pulse*.10;
  }
 }
 function setSlide(x){result.position.x=x;stageLeft.constant=-CABINET_BOUNDS.left-x;stageRight.constant=CABINET_BOUNDS.right+x;}
 result.userData={dispose:()=>{materials.forEach(m=>m.dispose());ownedGeometry.forEach(g=>g.dispose());},updatePositions,updateAlerts,setSlide,positions,alerts,rowElements:items.map(s=>s.element),pitch,rows:items.length,scale,width,top};
 updatePositions();updateAlerts(0,true);setSlide(0);return result;
}
