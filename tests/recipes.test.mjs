import test from 'node:test';
import assert from 'node:assert/strict';
import {loadRecipes,saveRecipes,parseRecipe,removeRecipe,starterRecipes,RECIPE_STORAGE_KEY} from '../web-src/recipe-data.mjs';
const storage=()=>{const map=new Map();return {getItem:key=>map.get(key)??null,setItem:(key,value)=>map.set(key,value)};};
const input={name:'  Mushroom pasta  ',icon:'🍝',minutes:'25',servings:'2',ingredients:'200 g pasta\r\n\r\n150 g mushrooms\n1 tbsp oil ',steps:'Boil the pasta.\n Sauté the mushrooms.\nCombine and serve.'};
test('new recipe retains ingredients and ordered method after saving and reloading',()=>{
 const store=storage(),recipe=parseRecipe(input,'custom-pasta');saveRecipes(store,[recipe]);
 const [restored]=loadRecipes(store);assert.equal(restored.name,'Mushroom pasta');assert.deepEqual(restored.ingredients,['200 g pasta','150 g mushrooms','1 tbsp oil']);assert.deepEqual(restored.steps,['Boil the pasta.','Sauté the mushrooms.','Combine and serve.']);assert.equal(restored.minutes,25);assert.equal(restored.servings,2);
});
test('deleting the last recipe persists an empty collection rather than restoring defaults',()=>{
 const store=storage();saveRecipes(store,[parseRecipe(input,'custom-pasta')]);
 saveRecipes(store,removeRecipe(loadRecipes(store),'custom-pasta'));assert.deepEqual(loadRecipes(store),[]);
});
test('remove and undo preserve remaining recipes and original order',()=>{
 const store=storage(),original=loadRecipes(store),record=original[2];const changed=removeRecipe(original,record.id);
 assert.equal(changed.length,original.length-1);assert.equal(original.length,starterRecipes.length);
 changed.splice(2,0,record);saveRecipes(store,changed);assert.deepEqual(loadRecipes(store),original);
});
test('recipe editor rejects incomplete and out-of-range inputs',()=>{
 for(const patch of [{name:''},{minutes:'0'},{minutes:'2.5'},{servings:'51'},{ingredients:' \n '},{steps:''},{ingredients:['x'.repeat(181)]},{steps:['x'.repeat(1201)]}])assert.throws(()=>parseRecipe({...input,...patch},'invalid'));
});
test('starter recipes have complete detail data; malformed saved data safely falls back',()=>{
 for(const recipe of starterRecipes)assert.deepEqual(parseRecipe(recipe,recipe.id),recipe);
 const store=storage();store.setItem(RECIPE_STORAGE_KEY,'{bad');assert.equal(loadRecipes(store).length,starterRecipes.length);
 const list=loadRecipes(store);list[0].steps[0]='changed';assert.notEqual(starterRecipes[0].steps[0],'changed');
});
