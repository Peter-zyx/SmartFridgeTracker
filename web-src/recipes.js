import {inventoryFoods} from './inventory.js';
import {ingredientStock,ingredientStatuses,canMakeRecipe} from './ingredient-match.mjs';
import {RECIPE_ICONS,loadRecipes,saveRecipes,parseRecipe,removeRecipe} from './recipe-data.mjs';
const root=document.querySelector('#recipes-page');
const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const backIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m7-7-7 7 7 7"/></svg>';
let recipes=loadRecipes(localStorage),selectedId=null,manage=false,view='list',returnView='list',deleted=null,toastTimer;
root.innerHTML=`<section class="recipe-pane recipe-library" data-pane="list" aria-label="Recipe library">
 <header class="recipe-heading"><div><p class="recipe-eyebrow">YOUR COLLECTION</p><h1>Recipes<span>.</span></h1></div><button class="recipe-add" aria-label="Add recipe">+</button></header>
 <div class="recipe-list-tools"><span id="recipe-count"></span><button id="recipe-manage">Manage</button></div>
 <div class="recipe-grid"></div><div class="recipe-empty" hidden><span>🍽️</span><h2>Your recipe book is empty</h2><button class="recipe-primary" id="recipe-empty-add">Add a recipe</button></div>
 </section>
 <section class="recipe-pane recipe-detail" data-pane="detail" aria-label="Recipe details" inert></section>
 <section class="recipe-pane recipe-editor" data-pane="editor" aria-label="Recipe editor" inert></section>
 <div class="recipe-toast" role="status" hidden><span></span><button type="button">Undo</button></div>`;
const $=s=>root.querySelector(s);
function setView(next){view=next;root.dataset.view=next;for(const pane of root.querySelectorAll('[data-pane]'))pane.inert=pane.dataset.pane!==next;}
function focusHeading(pane){requestAnimationFrame(()=>$(pane+' h1')?.focus({preventScroll:true}));}
function renderLibrary(){
 $('#recipe-count').textContent=`${recipes.length} ${recipes.length===1?'recipe':'recipes'}`;
 $('#recipe-manage').textContent=manage?'Done':'Manage';$('#recipe-manage').hidden=!recipes.length;$('#recipe-manage').setAttribute('aria-pressed',String(manage));
 const stock=ingredientStock(inventoryFoods());
 $('.recipe-grid').innerHTML=recipes.map(recipe=>{
  const ready=canMakeRecipe(recipe,stock);
  return `<article class="recipe-tile"><button class="recipe-card" data-recipe="${esc(recipe.id)}" aria-label="Open ${esc(recipe.name)}${ready?', ingredients available':''}"><span class="recipe-logo" aria-hidden="true">${esc(recipe.icon)}${ready?'<span class="recipe-ready"><svg viewBox="0 0 16 16"><path d="m3.5 8 3 3 6-6"/></svg></span>':''}</span><strong>${esc(recipe.name)}</strong><small>${recipe.minutes} min</small></button>${manage?`<button class="recipe-remove" data-delete="${esc(recipe.id)}" aria-label="Delete ${esc(recipe.name)}">−</button>`:''}</article>`;
 }).join('');
 $('.recipe-empty').hidden=recipes.length>0;
}
function persist(next){try{saveRecipes(localStorage,next);recipes=next;return true;}catch{notify('Could not save. Please try again.');return false;}}
function notify(message,undo=false){clearTimeout(toastTimer);$('.recipe-toast span').textContent=message;$('.recipe-toast button').hidden=!undo;$('.recipe-toast').hidden=false;toastTimer=setTimeout(()=>{$('.recipe-toast').hidden=true;},6500);}
const stockLabel = {ready:'In stock', missing:'Missing', short:'Not enough', unknown:'Check amount'};
function ingredientRow(item, status) {
 const ready = status === 'ready';
 return `<li class="ingredient-${ready?'ready':'warning'}">
  <span class="ingredient-name">${esc(item)}</span>
  <span class="ingredient-status"><span class="ingredient-symbol" aria-hidden="true">${ready?'✓':'!'}</span><span${ready?' class="sr-only"':''}>${stockLabel[status]}</span></span>
 </li>`;
}
function openRecipe(id){
 const recipe=recipes.find(r=>r.id===id);if(!recipe)return;selectedId=id;
 const statuses=ingredientStatuses(recipe,ingredientStock(inventoryFoods()));
 $('.recipe-detail').innerHTML=`<header class="recipe-subnav"><button class="recipe-back recipe-circle" aria-label="Back to recipes">${backIcon}</button><button class="recipe-edit" type="button">Edit</button></header>
 <div class="recipe-hero"><div class="recipe-hero-logo" aria-hidden="true">${esc(recipe.icon)}</div><h1 tabindex="-1">${esc(recipe.name)}</h1><div class="recipe-meta"><span>◷ ${recipe.minutes} min</span><span>${recipe.servings} ${recipe.servings===1?'serving':'servings'}</span></div></div>
 <section class="recipe-ingredients"><h2>Ingredients <small>${recipe.ingredients.length}</small></h2><ul>${recipe.ingredients.map((item,i)=>ingredientRow(item,statuses[i])).join('')}</ul></section>
 <section class="recipe-method"><h2>Method</h2><ol>${recipe.steps.map((step,i)=>`<li><span aria-hidden="true">${i+1}</span><p>${esc(step)}</p></li>`).join('')}</ol></section>
 <button class="recipe-delete-text" data-delete="${esc(recipe.id)}">Delete recipe</button>`;
 $('.recipe-detail').scrollTop=0;setView('detail');focusHeading('.recipe-detail');
}
function openEditor(recipe=null){
 returnView=recipe?'detail':'list';selectedId=recipe?.id??null;
 $('.recipe-editor').innerHTML=`<header class="recipe-subnav"><button class="recipe-editor-back recipe-circle" aria-label="Cancel recipe changes">${backIcon}</button><span>${recipe?'Edit recipe':'New recipe'}</span></header>
 <h1 tabindex="-1">${recipe?'Make it yours.':'Add a recipe.'}</h1>
 <form id="recipe-form"><fieldset class="recipe-icon-picker"><legend>Dish icon</legend>${RECIPE_ICONS.map(icon=>`<label><input type="radio" name="icon" value="${icon}" ${(recipe?.icon??'🍲')===icon?'checked':''}><span>${icon}</span></label>`).join('')}</fieldset>
 <label class="recipe-field">Recipe name<input name="name" maxlength="60" required value="${esc(recipe?.name??'')}" placeholder="e.g. Mushroom pasta"></label>
 <div class="recipe-form-row"><label class="recipe-field">Time (minutes)<input name="minutes" type="number" min="1" max="1440" required value="${recipe?.minutes??20}" inputmode="numeric"></label><label class="recipe-field">Servings<input name="servings" type="number" min="1" max="50" required value="${recipe?.servings??2}" inputmode="numeric"></label></div>
 <label class="recipe-field">Ingredients <small>One ingredient and its amount per line</small><textarea name="ingredients" rows="5" maxlength="7200" required placeholder="200 g pasta&#10;150 g mushrooms">${esc(recipe?.ingredients.join('\n')??'')}</textarea></label>
 <label class="recipe-field">Method <small>One step per line</small><textarea name="steps" rows="6" maxlength="36000" required placeholder="Bring a pan of water to the boil.&#10;Slice and sauté the mushrooms.">${esc(recipe?.steps.join('\n')??'')}</textarea></label>
 <p class="recipe-form-error" role="alert" hidden></p><button class="recipe-primary" type="submit">Save recipe</button></form>`;
 $('.recipe-editor').scrollTop=0;setView('editor');focusHeading('.recipe-editor');
 $('#recipe-form').onsubmit=e=>{e.preventDefault();try{
  const data=Object.fromEntries(new FormData(e.currentTarget));const id=selectedId??crypto.randomUUID();const saved=parseRecipe(data,id);
  const next=selectedId?recipes.map(r=>r.id===selectedId?saved:r):[saved,...recipes];
  if(!persist(next))return;renderLibrary();openRecipe(id);notify('Recipe saved');
 }catch(error){$('.recipe-form-error').hidden=false;$('.recipe-form-error').textContent=error.message;}};
}
function goBack(){if(view==='editor'&&returnView==='detail')openRecipe(selectedId);else{setView('list');requestAnimationFrame(()=>(root.querySelector(`[data-recipe="${CSS.escape(selectedId??'')}"]`)??$('.recipe-add')).focus({preventScroll:true}));}}
root.addEventListener('click',e=>{
 const card=e.target.closest('[data-recipe]');if(card){openRecipe(card.dataset.recipe);return;}
 const remove=e.target.closest('[data-delete]');if(remove){
  const index=recipes.findIndex(r=>r.id===remove.dataset.delete);if(index<0)return;
  const record=recipes[index];if(!persist(removeRecipe(recipes,record.id)))return;
  deleted={record,index};renderLibrary();setView('list');notify('Recipe deleted',true);return;
 }
 if(e.target.closest('.recipe-add,#recipe-empty-add'))openEditor();
 if(e.target.closest('.recipe-edit'))openEditor(recipes.find(r=>r.id===selectedId));
 if(e.target.closest('.recipe-back,.recipe-editor-back'))goBack();
});
$('#recipe-manage').onclick=()=>{manage=!manage;renderLibrary();};
$('.recipe-toast button').onclick=()=>{if(!deleted)return;const next=[...recipes];next.splice(deleted.index,0,deleted.record);if(persist(next)){deleted=null;renderLibrary();notify('Recipe restored');}};
window.addEventListener('recipes-show',()=>{root.inert=false;root.setAttribute('aria-hidden','false');renderLibrary();setView('list');});
window.addEventListener('recipes-hide',()=>{root.inert=true;root.setAttribute('aria-hidden','true');$('.recipe-toast').hidden=true;});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('recipes-open')&&!document.querySelector('dialog[open]')&&view!=='list'){e.preventDefault();e.stopImmediatePropagation();goBack();}},true);
renderLibrary();setView('list');
