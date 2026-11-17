import {daysUntil} from './food-data.mjs';

// Recipe lines and stock portions use the same base units. Unknown package
// sizes stay unknown: one bag of spinach does not establish a weight.
const units = new Map();
function unit(dimension, factor, names) {
  for (const name of names.split(' ')) units.set(name, {dimension, factor});
}
unit('g', 1, 'g gram grams gramme grammes');
unit('g', 1000, 'kg kilogram kilograms');
unit('ml', 1, 'ml millilitre millilitres milliliter milliliters');
unit('ml', 1000, 'l litre litres liter liters');
unit('ml', 5, 'tsp teaspoon teaspoons');
unit('ml', 15, 'tbsp tablespoon tablespoons');
for (const pack of ['bag','bottle','box','container','fillet','handful','head','jar','pack','portion','pot','punnet','slice','tub','clove','pinch','can']) {
  unit(pack, 1, pack+' '+(pack==='box'?'boxes':pack+'s'));
}
const fractions = {'½':'1/2','¼':'1/4','¾':'3/4','⅓':'1/3','⅔':'2/3'};
function clean(text) {
  return String(text ?? '').toLowerCase().replace(/[½¼¾⅓⅔]/g, c=>' '+fractions[c])
    .replace(/[-‐‑](?=[a-z])/g,' ').replace(/\s+/g,' ').trim();
}
const amountPattern = /^(\d+\s+\d+\/\d+|\d+\/\d+|\d*\.\d+|\d+)(?=\s|[a-z]|$)\s*/;
function measure(text) {
  const match = text.match(amountPattern);
  if (!match) return {name:text, dimension:'presence', amount:1};
  const amount = match[1].split(/\s+/).reduce((sum, n) => {
    const [a,b=1] = n.split('/').map(Number);
    return sum + a/b;
  },0);
  let name = text.slice(match[0].length);
  const word = name.match(/^[a-z]+\b/)?.[0];
  const u = units.get(word);
  if (u) name = name.slice(word.length).trim().replace(/^of\s+/,'');
  return {name, dimension:u?.dimension ?? 'count', amount:amount*(u?.factor ?? 1)};
}
const aliases = new Map(Object.entries({
  'free range egg':'egg', 'whole milk':'milk', 'cheddar cheese':'cheddar',
  'still mineral water':'water', 'garlic clove':'garlic'
}));
const plurals = {potatoes:'potato',tomatoes:'tomato',leaves:'leaf',loaves:'loaf',knives:'knife'};
function nameKey(text) {
  const words = clean(text).replace(/\s+(?:to taste|as needed)$/,'')
    .replace(/\b(?:grated|diced|sliced|peeled|ripe|finely|chopped|shredded|large|small|medium)\s+/g,'').trim().split(/\s+/);
  const last = words.pop();
  const singular = plurals[last] ?? last.replace(/ies$/,'y').replace(/(?<!s|u|i)s$/,'');
  const name = [...words,singular].join(' ');
  return aliases.get(name) ?? name;
}
export function ingredientStock(foods,today=new Date()) {
  const lots=[];
  for (const food of foods) {
    if (!(food.quantity>0) || !food.name || (daysUntil(food.expiresOn,today) ?? 0)<0) continue;
    const amounts = {count:food.quantity};
    const portion = clean(food.portion);
    const pack = portion.match(/^(\d+)\s*[×x]\s*(.+)$/);
    const measured = measure(pack ? pack[2] : portion);
    if (measured.dimension!=='presence' && measured.dimension!=='count' && !measured.name) {
      amounts[measured.dimension] = measured.amount * (pack ? Number(pack[1]) : 1);
    }
    lots.push({name:nameKey(food.name), amounts});
  }
  return lots;
}

function requirements(line) {
  const text = clean(line).replace(/,\s*(?:finely |roughly )?(?:chopped|diced|sliced|peeled|drained|grated|to taste)$/,'');
  return text.split(/\s+(?:and|&)\s+/).map(part => {
    const req = measure(part.replace(/^(?:a|an)\s+/,'1 '));
    req.name = nameKey(req.name);
    return req;
  });
}

function allocateRequirement({name, dimension, amount}, stock, remaining) {
  if (!name || !Number.isFinite(amount) || amount <= 0) return 'unknown';
  let found = false, unmeasured = false, needed = amount;
  for (const [i, lot] of stock.entries()) {
    if (lot.name !== name) continue;
    found = true;
    if (dimension === 'presence') return 'ready';
    const capacity = lot.amounts[dimension];
    if (!capacity) {
      if (remaining[i] > 0) unmeasured = true;
      continue;
    }
    const used = Math.min(needed, remaining[i] * capacity);
    needed -= used;
    remaining[i] -= used / capacity;
    if (needed < 1e-8) return 'ready';
  }
  if (!found) return 'missing';
  return unmeasured ? 'unknown' : 'short';
}

export function ingredientStatuses(recipe, stock) {
  const statuses = recipe.ingredients.map(() => 'ready');
  const remaining = stock.map(() => 1);
  const needs = recipe.ingredients.flatMap((line, index) =>
    requirements(line).map(req => ({...req, index})));
  // Reserve measured amounts before whole packages to avoid counting the
  // same lot twice. Store the result against the original ingredient line.
  const priority = dimension => dimension === 'presence' ? 0 : dimension === 'count' ? 2 : 1;
  needs.sort((a,b) => priority(a.dimension) - priority(b.dimension));
  const severity = {ready:0, unknown:1, short:2, missing:3};
  for (const req of needs) {
    const status = allocateRequirement(req, stock, remaining);
    if (severity[status] > severity[statuses[req.index]]) statuses[req.index] = status;
  }
  return statuses;
}

export function canMakeRecipe(recipe, stock) {
  const statuses = ingredientStatuses(recipe, stock);
  return statuses.length > 0 && statuses.every(status => status === 'ready');
}
