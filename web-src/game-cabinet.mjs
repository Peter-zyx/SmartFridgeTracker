import * as THREE from 'three';
import {buildCabinetSnapshot, CABINET_BOUNDS, clamp} from './cabinet-geometry.mjs';
import {createExpiryMarker} from './expiry-marker.mjs';
import {foodStatus, daysUntil} from './food-data.mjs';
import {buildStacks, columns, moveToStack} from './game-layout.mjs';

export function buildGameCabinet(rows, width, kind, foodModel, floorLimit) {
  const stage = buildCabinetSnapshot(rows.map(row => ({...row, groups: []})), width, kind, floorLimit);
  const data = stage.userData;
  const floors = rows.map((_, i) => data.top - (i * data.pitch + .6175) * data.scale);
  const ceilings = floors.map((_, i) => i ? floors[i - 1] - .055 * data.scale : CABINET_BOUNDS.top);
  const slot = (CABINET_BOUNDS.right - CABINET_BOUNDS.left - .06) / columns;
  const left = -slot * columns / 2;
  const pieces = new Map();
  const ids = rows.map(() => []);
  const materials = new Set(), markerGeometry = new Set();
  const clip = stage.children[0]?.children[0]?.material.clippingPlanes;
  const key = 'fridge-game-layout-v1-' + kind;
  let saved;
  try { saved = JSON.parse(localStorage.getItem(key)); } catch {}
  rows.forEach((row, r) => row.groups.forEach((group, index) => {
    for (const food of group.userData.foods ?? []) {
      if (!(food.quantity > 0)) continue;
      const id = JSON.stringify([group.name, food.id ?? food.name]);
      if (pieces.has(id)) continue;
      const stock = (kind === 'drinks' ? group : foodModel(food, group.name)).clone(true);
      stock.position.set(0, 0, 0);
      // The drink model's contact shadow belongs on the shelf, not on a stacked bottle.
      for (const child of [...stock.children]) {
        if (child.material?.map && child.rotation.x === -Math.PI/2) stock.remove(child);
      }
      stock.traverse(mesh => {
        if (!mesh.material) return;
        mesh.material = mesh.material.clone();
        mesh.material.clippingPlanes = clip;
        materials.add(mesh.material);
      });
      const base = new THREE.Group();
      base.userData.category = {row:r,index};
      base.userData.pieceId = id;
      base.userData.food = food;
      base.add(stock);
      const badge = createExpiryMarker(clip);
      badge.traverse(mesh => {
        if (mesh.material) materials.add(mesh.material);
        if (mesh.geometry) markerGeometry.add(mesh.geometry);
      });
      base.add(badge);
      stage.add(base);
      ids[r].push(id);
      pieces.set(id, {id, food, base, stock, badge, size:new THREE.Box3().setFromObject(stock)});
    }
  }));
  const stacks = buildStacks(ids, saved);
  // Fit every piece even on a short phone or a densely stocked shelf.
  const clearance = Math.min(...ceilings.map((top, i) => top - floors[i]));
  const levels = Math.max(2, ...ids.map(row => Math.ceil(row.length / columns)));
  for (const piece of pieces.values()) {
    const {size, stock, badge} = piece;
    const extent = size.getSize(new THREE.Vector3());
    const fit = Math.min(slot * .86 / extent.x, (clearance / levels - .025) / extent.y, .40 / extent.z);
    stock.scale.multiplyScalar(fit);
    stock.position.set(-(size.max.x+size.min.x)*fit/2, -size.min.y*fit, -(size.max.z+size.min.z)*fit/2);
    piece.height = extent.y * fit;
    piece.velocity = 0;
    piece.compression = 0;
    badge.scale.setScalar(.24);
    badge.position.set(Math.min(extent.x*fit*.42,.085), piece.height - .006, extent.z*fit/2+.012);
  }
  // An outdated arrangement can outgrow a shelf when the cabinet is resized.
  function fits(stack,r) {
    return stack.reduce((h,id) => h + pieces.get(id).height + .003, .002) <= ceilings[r]-floors[r];
  }
  if (stacks.some((shelf,r) => shelf.some(stack => !fits(stack,r)))) {
    stacks.splice(0, stacks.length, ...buildStacks(ids, null));
  }
  let held = null, nextCheck = 0, moving = true;
  const restZ = .15;
  function resetMotion(p) {
    p.velocity = 0;
    p.compression = 0;
    p.approach = null;
    p.base.scale.setScalar(1);
  }

  // Resolve each stack from bottom to top. The contact surface follows the
  // actual moving support, including the brief compression at impact.
  function step(dt, snap) {
    let active = false;
    stacks.forEach((shelf,r) => shelf.forEach((stack,c) => {
      if (!stack.length) return;
      const x = left + slot*(c+.5);
      let surface = floors[r] + .002;
      let headroom = ceilings[r] - stack.reduce((sum,id) =>
        id === held?.id ? sum : sum + pieces.get(id).height + .003, 0);
      let support = null;
      for (const id of stack) {
        const p = pieces.get(id);
        if (p === held) continue;
        const pos = p.base.position;
        const limit = Math.max(surface, headroom);
        if (snap) {
          resetMotion(p);
          pos.set(x,surface,restZ);
        } else if (p.approach) {
          // Guide the piece over its slot before letting it fall. This also
          // clears the supporting object when released low on its front face.
          const path = p.approach;
          path.elapsed += dt;
          const t = Math.min(1,path.elapsed/.16);
          const ease = t*t*(3-2*t);
          const y = clamp(Math.max(path.start.y,surface+.035),surface,limit);
          pos.x = THREE.MathUtils.lerp(path.start.x,x,ease);
          pos.y = THREE.MathUtils.lerp(path.start.y,y,1-(1-t)**3);
          pos.z = THREE.MathUtils.lerp(path.start.z,restZ,t*t);
          if (t === 1) p.approach = null;
          active = true;
        } else {
          p.velocity -= 7.6*dt;
          pos.y += p.velocity*dt;
          if (pos.y <= surface) {
            const impact = Math.max(0,-p.velocity);
            pos.y = surface;
            p.velocity = impact > .38 ? impact*.23 : 0;
            if (impact > .38) {
              p.compression = Math.min(.052,impact*.022);
              if (support) support.compression = Math.max(support.compression,p.compression*.55);
            }
          } else if (pos.y > limit) {
            pos.y = limit;
            p.velocity = Math.min(0,p.velocity);
          }
          p.compression *= Math.exp(-dt*17);
          if (p.compression < .0005) p.compression = 0;
          p.base.scale.set(1+p.compression*.4,1-p.compression,1+p.compression*.4);
          active ||= p.velocity !== 0 || pos.y > surface+.00001 || p.compression > 0;
        }
        surface = pos.y + p.height*p.base.scale.y + .003;
        headroom += p.height+.003;
        support = p;
      }
    }));
    moving = active;
  }
  function tick(dt, reduce) {
    if (!moving) return;
    if (reduce) { step(0,true); return; }
    // Substeps keep impacts consistent on both 30 Hz and 120 Hz screens.
    const count = Math.max(1,Math.ceil(dt*120));
    for (let i=0; i<count && moving; i++) step(dt/count,false);
  }
  step(0,true);
  data.game = {
    tick,
    begin(id) {
      held = pieces.get(id);
      if (held) { resetMotion(held); moving = true; }
    },
    position(id) { return pieces.get(id)?.base.position; },
    drag(x,y) {
      if (!held) return;
      held.base.position.set(clamp(x,left+slot/2,-left-slot/2), clamp(y,floors.at(-1),CABINET_BOUNDS.top-held.height), .32);
    },
    release() {
      if (!held) return;
      const {x,y} = held.base.position;
      const row = floors.findIndex(floor => y+held.height*.5 >= floor);
      const col = clamp(Math.floor((x-left)/slot),0,columns-1);
      if (moveToStack(stacks,held.id,row,col,fits)) {
        try { localStorage.setItem(key,JSON.stringify(stacks)); } catch {}
      } else if (!stacks[row]?.[col]?.includes(held.id)) {
        // A full stack rejects the drop. Restore the source stack together.
        held = null; step(0,true); return;
      }
      held.approach = {start:held.base.position.clone(),elapsed:0};
      held = null;
      moving = true;
    },
    cancel() { held=null;step(0,true); }
  };
  data.updateAlerts = (time, reduce, show, today = new Date()) => {
    const refresh = time >= nextCheck;
    if (refresh) nextCheck = time + 60000;
    let index = 0;
    for (const piece of pieces.values()) {
      if (refresh) {
        piece.urgent = foodStatus(piece.food,today).urgent;
        const days = daysUntil(piece.food.expiresOn,today);
        piece.expired = days !== null && days < 0;
      }
      piece.badge.visible = show && piece.urgent;
      const beat = (time + index++ * 183) % 2600;
      piece.base.rotation.z = !reduce && piece.expired && piece !== held && beat < 620
        ? .033 * Math.sin(beat/620*Math.PI*6) * Math.sin(beat/620*Math.PI) : 0;
    }
  };
  const disposeShelves = data.dispose;
  data.dispose = () => { disposeShelves(); materials.forEach(m=>m.dispose()); markerGeometry.forEach(g=>g.dispose()); };
  data.updateAlerts(0,true,false);
  return stage;
}
