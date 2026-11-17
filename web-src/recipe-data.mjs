export const RECIPE_STORAGE_KEY='fridge-recipes-v1';
export const RECIPE_ICONS=['🥗','🍝','🍜','🍚','🥪','🍲','🍳','🥞','🌮','🍕','🥔','🥦'];
export const starterRecipes=[
 {id:'spinach-eggs',name:'Spinach & eggs',icon:'🥗',minutes:15,servings:1,ingredients:['2 eggs','2 handfuls spinach','30 g cheddar','1 tsp mustard','1 tsp olive oil'],steps:['Boil the eggs for 9 minutes, then cool, peel and slice.','Wash the spinach and place it in a bowl. Add the sliced eggs and grated cheddar.','Mix the mustard and olive oil, drizzle over the salad and serve.']},
 {id:'tomato-pasta',name:'Tomato pasta',icon:'🍝',minutes:20,servings:2,ingredients:['180 g pasta','400 g chopped tomatoes','2 garlic cloves','1 tbsp olive oil','20 g parmesan','Salt and pepper'],steps:['Bring a pan of salted water to the boil. Cook the pasta according to the packet.','Finely chop the garlic. Warm the oil in a pan and gently cook the garlic for 1 minute.','Add the tomatoes and simmer for 10 minutes. Season to taste.','Drain the pasta, keeping a little cooking water. Toss with the sauce and a splash of the water, then top with parmesan.']},
 {id:'vegetable-rice',name:'Veggie rice',icon:'🍚',minutes:25,servings:2,ingredients:['150 g uncooked rice','1 carrot, diced','100 g frozen peas','2 eggs','1 tbsp soy sauce','1 tbsp vegetable oil'],steps:['Cook the rice according to its packet instructions and drain well.','Heat the oil in a large pan. Cook the diced carrot for 4 minutes, then add the peas.','Push the vegetables aside and scramble the eggs in the pan.','Add the rice and soy sauce. Stir over the heat until everything is hot, then serve.']},
 {id:'avocado-toast',name:'Avocado toast',icon:'🥪',minutes:10,servings:1,ingredients:['2 slices bread','1 ripe avocado','1 tsp lemon juice','A pinch of chilli flakes','Salt and pepper'],steps:['Toast the bread until golden.','Mash the avocado with the lemon juice, salt and pepper.','Spread over the toast and finish with chilli flakes.']},
 {id:'vegetable-soup',name:'Vegetable soup',icon:'🍲',minutes:30,servings:3,ingredients:['1 onion','2 carrots','1 potato','100 g peas','750 ml vegetable stock','1 tbsp olive oil'],steps:['Peel and dice the onion, carrots and potato.','Heat the oil in a saucepan. Cook the onion for 5 minutes until softened.','Add the carrots, potato and stock. Simmer for 18 minutes, or until the vegetables are tender.','Add the peas and simmer for another 3 minutes. Season and serve.']},
 {id:'cheese-omelette',name:'Cheese omelette',icon:'🍳',minutes:10,servings:1,ingredients:['2 eggs','30 g cheddar','1 tsp butter','Salt and pepper'],steps:['Beat the eggs with a pinch of salt and pepper. Grate the cheese.','Melt the butter in a small pan over medium heat. Pour in the eggs and gently move the cooked edges towards the centre.','When the egg is set, scatter over the cheese, fold the omelette and serve.']},
 {id:'banana-pancakes',name:'Banana pancakes',icon:'🥞',minutes:20,servings:2,ingredients:['1 ripe banana','1 egg','100 g plain flour','120 ml milk','1 tsp baking powder','1 tsp vegetable oil'],steps:['Mash the banana. Whisk in the egg and milk.','Stir in the flour and baking powder until just combined.','Lightly oil a pan over medium heat. Add small spoonfuls of batter.','Cook until bubbles form, flip and cook the other side until golden and cooked through.']},
 {id:'bean-tacos',name:'Bean tacos',icon:'🌮',minutes:15,servings:2,ingredients:['4 small tortillas','400 g canned beans, drained','1 tomato','1 handful lettuce','30 g cheddar','1 tsp ground cumin'],steps:['Warm the beans in a pan with the cumin and a splash of water.','Dice the tomato, shred the lettuce and grate the cheese.','Warm the tortillas and fill them with the beans. Add the vegetables and cheese.']},
 {id:'pesto-potatoes',name:'Pesto potatoes',icon:'🥔',minutes:30,servings:2,ingredients:['400 g baby potatoes','2 tbsp pesto','1 tbsp olive oil','20 g parmesan'],steps:['Heat the oven to 200°C. Halve the potatoes and toss with the oil.','Spread on a baking tray and roast for 25 minutes, turning halfway, until tender.','Toss with the pesto and sprinkle over the parmesan.']}
];
const lines=value=>String(value??'').split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
export function parseRecipe(input,id){
 const name=String(input.name??'').trim(),minutes=Number(input.minutes),servings=Number(input.servings);
 const ingredients=Array.isArray(input.ingredients)?input.ingredients:lines(input.ingredients);
 const steps=Array.isArray(input.steps)?input.steps:lines(input.steps);
 if(!name||name.length>60)throw new Error('Enter a recipe name (up to 60 characters).');
 if(!Number.isInteger(minutes)||minutes<1||minutes>1440)throw new Error('Enter a cooking time between 1 and 1,440 minutes.');
 if(!Number.isInteger(servings)||servings<1||servings>50)throw new Error('Enter between 1 and 50 servings.');
 if(!ingredients.length||ingredients.length>40||ingredients.some(x=>typeof x!=='string'||!x.trim()||x.length>180))throw new Error('Add 1–40 ingredients, one per line (up to 180 characters each).');
 if(!steps.length||steps.length>30||steps.some(x=>typeof x!=='string'||!x.trim()||x.length>1200))throw new Error('Add 1–30 steps, one per line (up to 1,200 characters each).');
 return {id,name,icon:RECIPE_ICONS.includes(input.icon)?input.icon:'🍲',minutes,servings,ingredients:ingredients.map(x=>x.trim()),steps:steps.map(x=>x.trim())};
}
export function loadRecipes(storage){
 try{
  const saved=storage.getItem(RECIPE_STORAGE_KEY);
  if(saved!==null){const data=JSON.parse(saved);if(!Array.isArray(data))throw new Error('Invalid recipe data');
   const ids=new Set();return data.map(item=>{if(typeof item.id!=='string'||!item.id||ids.has(item.id))throw new Error('Invalid recipe ID');ids.add(item.id);return parseRecipe(item,item.id);});}
 }catch{}
 return structuredClone(starterRecipes);
}
export function saveRecipes(storage,recipes){storage.setItem(RECIPE_STORAGE_KEY,JSON.stringify(recipes));}
export function removeRecipe(recipes,id){return recipes.filter(recipe=>recipe.id!==id);}
