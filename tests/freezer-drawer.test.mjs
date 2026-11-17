import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {attachFreezerDrawer,drawerBed,drawerTravel} from '../web-src/freezer-drawer.js';
import {buildCabinetSnapshot,CABINET_BOUNDS} from '../web-src/cabinet-geometry.mjs';

const context={stroke(){},lineTo(){},beginPath(){},moveTo(){},rotate(){},translate(){},save(){},restore(){},roundRect(){},fill(){},fillText(){},ellipse(){}};
globalThis.document={createElement:()=>({getContext:()=>context})};
const storage=new Map();
globalThis.localStorage={getItem:key=>storage.get(key),setItem:(key,value)=>storage.set(key,value)};
const foods=['Peas','Sweetcorn','Greens','Sorbet'].map(name=>({name,icon:'',quantity:1}));
const categories=[{name:'Frozen veg',userData:{foods}}];
function fixture(){
 const stage=buildCabinetSnapshot([],3.61);
 attachFreezerDrawer(stage,categories,true);
 return stage.userData;
}
test('closed drawer clears the doors; all frozen packages clear the cabinet when extended',()=>{
 const data=fixture(),{drawer}=data;
 const closed=new THREE.Box3().setFromObject(drawer);
 assert.ok(closed.max.y<.07);
 assert.ok(closed.max.z<.62);
 assert.ok(closed.min.y>CABINET_BOUNDS.bottom);
 drawer.position.z=drawerTravel;
 const open=new THREE.Box3().setFromObject(drawer);
 assert.ok(open.min.z>.76);
 assert.deepEqual(drawer.children.filter(o=>o.userData.freezerFood).map(o=>o.userData.freezerFood),foods);
 data.dispose();
});
test('moving a frozen package onto another settles it above its support and restores it on reentry',()=>{
 const data=fixture();
 const [peas,corn]=data.drawer.children.filter(o=>o.userData.freezerFood);
 data.drawerGame.begin(foods[0]);
 data.drawerGame.drag(corn.position.clone());
 data.drawerGame.release();
 for(let i=0;i<120;i++)data.drawerGame.tick(1/60,false);
 const occupied=new THREE.Box3().setFromObject(corn);
 assert.ok(peas.position.y>=occupied.max.y);
 assert.ok(peas.position.y<drawerBed+.25);
 assert.ok(Math.abs(peas.position.x-corn.position.x)<1e-5);
 const fresh=fixture();
 const restored=fresh.drawer.children.find(o=>o.userData.freezerFood===foods[0]);
 assert.ok(restored.position.distanceTo(peas.position)<1e-5);
 data.dispose();fresh.dispose();
});
