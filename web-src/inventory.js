import {mountInterior} from './interior.js';
import {seedFoods,totals} from './food-data.mjs';
const initial=[
 [{name:'Dairy',icon:'🥛',count:4,useSoon:1},{name:'Vegetables',icon:'🥬',count:7},{name:'Leftovers',icon:'🍱',count:2,useSoon:2},{name:'Yogurt',icon:'🥣',count:3}],
 [{name:'Meat & fish',icon:'🐟',count:3},{name:'Sauces',icon:'🫙',count:6},{name:'Deli',icon:'🧀',count:2}],
 [{name:'Fruit',icon:'🍊',count:5},{name:'Eggs',icon:'🥚',count:12},{name:'Snacks',icon:'🍫',count:3}]
];
let shelves;
try{const saved=JSON.parse(localStorage.getItem('fridge-shelves-v1'));if(Array.isArray(saved)&&saved.length>=1&&saved.length<=6&&saved.every(row=>Array.isArray(row)&&row.every(x=>typeof x.name==='string'&&typeof x.icon==='string'&&Number.isFinite(x.count))))shelves=saved;}catch{}
shelves??=initial;
function ensureFoods(category){
 if(!Array.isArray(category.foods))category.foods=seedFoods(category.name);
 Object.assign(category,totals(category.foods));
}
for(const row of shelves)for(const category of row)ensureFoods(category);
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const modal=$('#item-dialog');
function save(){try{localStorage.setItem('fridge-shelves-v1',JSON.stringify(shelves));}catch{}}
function rowHTML(row,i,editable=true,source=editable?i:'frozen'){return `<section class="shelf"><div class="shelf-row" tabindex="0" aria-label="${String(source).startsWith('drinks-')?'Drinks shelf '+(i+1):editable?'Shelf '+(i+1):'Freezer'} inventory, scroll horizontally">${row.map((item,j)=>`<button class="food-card" data-shelf="${source}" data-item="${j}"><span class="food-art">${item.icon}</span><span class="food-name">${esc(item.name)}</span><span class="food-count">${item.count} ${item.count===1?'item':'items'}</span></button>`).join('')}${editable?`<button class="add-card" data-add="${i}" aria-label="Add category to shelf ${i+1}"><span>+</span><small>Add</small></button>`:''}</div><div class="shelf-ledge"></div></section>`;}
const frozen=[{name:'Frozen veg',icon:'🥦'},{name:'Ice cream',icon:'🍨'},{name:'Frozen meals',icon:'🥟'}];
try{const saved=JSON.parse(localStorage.getItem('fridge-frozen-v1'));if(Array.isArray(saved))for(const category of frozen){const match=saved.find(x=>x.name===category.name);if(Array.isArray(match?.foods))category.foods=match.foods;}}catch{}
frozen.forEach(ensureFoods);
try{localStorage.setItem('fridge-frozen-v1',JSON.stringify(frozen));}catch{}
const drinks=[
 [{name:'Milk',icon:'🥛'},{name:'Oat milk',icon:'🥛'},{name:'Juice',icon:'🍊'}],
 [{name:'Cola',icon:'🥤'},{name:'Water',icon:'💧'},{name:'Sparkling water',icon:'💧'},{name:'Tonic',icon:'🥤'}],
 [{name:'Wine',icon:'🍷'},{name:'Beer',icon:'🍺'},{name:'Cider',icon:'🍎'}]
];
try{const saved=JSON.parse(localStorage.getItem('fridge-drinks-v1'));if(Array.isArray(saved))for(const category of drinks.flat()){const match=saved.flat().find(x=>x.name===category.name);if(Array.isArray(match?.foods))category.foods=match.foods;}}catch{}
drinks.flat().forEach(ensureFoods);
try{localStorage.setItem('fridge-drinks-v1',JSON.stringify(drinks));}catch{}
$('#drinks-shelves').innerHTML=drinks.map((row,i)=>rowHTML(row,i,false,'drinks-'+i)).join('');
mountInterior($('#drinks-shelves'),drinks);
function render(){ shelves.flat().forEach(ensureFoods);frozen.forEach(ensureFoods);$('#shelves').innerHTML=shelves.map((row,i)=>rowHTML(row,i)).join('');$('#shelf-count').textContent=shelves.length;$('#shelf-less').disabled=shelves.length<=1;$('#shelf-more').disabled=shelves.length>=6;$('#freezer-shelf').innerHTML=rowHTML(frozen,0,false);mountInterior($('#shelves'),shelves);mountInterior($('#freezer-shelf'),[frozen]);save();}
$('#shelf-more').onclick=()=>{if(shelves.length<6){shelves.push([]);render();}};
$('#shelf-less').onclick=()=>{if(shelves.length>1){const last=shelves.pop();shelves.at(-1).push(...last);render();$('#inventory-note').textContent='Categories from the removed shelf moved to the shelf above.';}};
let target=null;
function showDialog(title,content){modal.classList.remove('food-detail');$('#dialog-title').textContent=title;$('#dialog-body').innerHTML=content;modal.showModal();}
function foodEntry(food){
 return `<article class="food-entry"><span class="entry-icon" aria-hidden="true">${esc(food.icon)}</span><div class="entry-info"><h3>${esc(food.name)}</h3><p>${esc(food.portion)}</p></div></article>`;
}
$('#inventory').addEventListener('click',e=>{
 const add=e.target.closest('[data-add]');if(add){target={shelf:Number(add.dataset.add),item:null};showDialog('Add category',`<label>Category name<input id="category-name" maxlength="32" required placeholder="e.g. Breakfast" autocomplete="off"></label><button class="save-item" type="submit">Add to shelf</button>`);return;}
 const card=e.target.closest('[data-item]');if(card){
 const frozenCard=card.dataset.shelf==='frozen';
 const drinkRow=card.dataset.shelf.startsWith('drinks-');
 const category=(drinkRow?drinks[Number(card.dataset.shelf.split('-')[1])]:frozenCard?frozen:shelves[Number(card.dataset.shelf)])[Number(card.dataset.item)];
 target=null;ensureFoods(category);
 const foods=[...category.foods].sort((a,b)=>(a.expiresOn||'9999').localeCompare(b.expiresOn||'9999'));
 showDialog(category.name,`<p class="category-summary">${category.count} ${category.count===1?'item':'items'}</p><div class="food-list">${foods.length?foods.map(foodEntry).join(''):'<p class="empty-category">No food in this category yet.</p>'}</div>`);
 modal.classList.add('food-detail');
 }

});
$('#category-form').onsubmit=e=>{e.preventDefault();if(!target)return;const name=$('#category-name').value.trim();if(!name)return;shelves[target.shelf].push({name,count:0,icon:'🧺',foods:[]});render();modal.close();};
$('#dialog-close').onclick=()=>modal.close();modal.addEventListener('click',e=>{if(e.target===modal)modal.close();});
for(const button of document.querySelectorAll('[data-section]'))button.onclick=()=>window.dispatchEvent(new CustomEvent('cabinet-select',{detail:'fridge'}));
$('#drinks-button').onclick=()=>window.dispatchEvent(new CustomEvent('cabinet-select',{detail:'drinks'}));
$('#recipe-button').onclick=()=>window.dispatchEvent(new Event('recipe-select'));
$('#menu-button').onclick=()=>window.dispatchEvent(new Event('menu-select'));
render();
// Horizontal drag works with both touch and a simulator mouse. Vertical gestures
// remain native so the shelf area can still scroll down to the freezer.
let drag=null,ignoreClickUntil=0;
$('#inventory').addEventListener('pointerdown',e=>{
 const row=e.target.closest('.shelf-row');if(!row)return;
 drag={row,x:e.clientX,y:e.clientY,left:row.scrollLeft,id:e.pointerId,moved:false};
});
$('#inventory').addEventListener('pointermove',e=>{
 if(!drag||drag.id!==e.pointerId)return;
 const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
 if(!drag.moved&&Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>8){drag=null;return;}
 if(Math.abs(dx)>8&&!drag.moved){drag.moved=true;drag.row.style.scrollSnapType='none';drag.row.setPointerCapture(e.pointerId);}
 if(drag.moved){e.preventDefault();drag.row.scrollLeft=drag.left-dx;ignoreClickUntil=performance.now()+350;}
},{passive:false});
function endDrag(){if(drag?.moved){drag.row.style.scrollSnapType='';ignoreClickUntil=performance.now()+350;}drag=null;}
$('#inventory').addEventListener('pointerup',endDrag);
$('#inventory').addEventListener('pointercancel',endDrag);
$('#inventory').addEventListener('click',e=>{if(performance.now()<ignoreClickUntil){e.preventDefault();e.stopImmediatePropagation();}},true);
// WebKit can promote a touch stream before all pointer moves arrive. Handle
// horizontal touch movement directly; leave vertical panning to the browser.
let touchDrag=null;
$('#inventory').addEventListener('touchstart',e=>{
 const row=e.target.closest('.shelf-row');if(!row||e.touches.length!==1)return;
 const t=e.touches[0];touchDrag={row,x:t.clientX,y:t.clientY,left:row.scrollLeft,moved:false};
},{passive:true});
$('#inventory').addEventListener('touchmove',e=>{
 if(!touchDrag||e.touches.length!==1)return;
 const t=e.touches[0],dx=t.clientX-touchDrag.x,dy=t.clientY-touchDrag.y;
 if(!touchDrag.moved&&Math.abs(dy)>Math.abs(dx)&&Math.abs(dy)>8){touchDrag=null;return;}
 if(Math.abs(dx)>8){e.preventDefault();touchDrag.moved=true;touchDrag.row.style.scrollSnapType='none';touchDrag.row.scrollLeft=touchDrag.left-dx;ignoreClickUntil=performance.now()+500;}
},{passive:false});
function endTouch(){if(touchDrag?.moved){touchDrag.row.style.scrollSnapType='';ignoreClickUntil=performance.now()+500;}touchDrag=null;}
$('#inventory').addEventListener('touchend',endTouch);
$('#inventory').addEventListener('touchcancel',endTouch);
