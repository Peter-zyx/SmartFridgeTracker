import * as THREE from 'three';

// Geometry-based badge stays in the depth buffer and shares stock clipping.
// It cannot draw through a closed door or float outside a moving cabinet.
export function createExpiryMarker(clipPlanes){
 const group=new THREE.Group();
 const basic=(color,extra={})=>new THREE.MeshBasicMaterial({color,toneMapped:false,clippingPlanes:clipPlanes,...extra});
 const add=(geometry,material,z)=>{const mesh=new THREE.Mesh(geometry,material);mesh.position.z=z;group.add(mesh);return mesh;};
 const halo=add(new THREE.CircleGeometry(.17,32),basic(0xff443c,{transparent:true,opacity:.18,depthWrite:false}),-.006);
 add(new THREE.CircleGeometry(.122,32),basic(0xffffff),0);
 add(new THREE.CircleGeometry(.103,32),basic(0xed4038),.002);
 const stem=add(new THREE.BoxGeometry(.025,.09,.004),basic(0xffffff),.006);stem.position.y=.022;
 const dot=add(new THREE.CircleGeometry(.015,16),basic(0xffffff),.009);dot.position.y=-.051;
 group.userData.halo=halo;
 return group;
}
