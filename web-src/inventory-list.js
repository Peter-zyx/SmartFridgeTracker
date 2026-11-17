import {inventorySections} from './inventory.js';

const page = document.querySelector('#list-page');
const search = page.querySelector('#stock-search');
const results = page.querySelector('#stock-results');
const summary = page.querySelector('#stock-summary');

function element(tag, className, text) {
  const node = document.createElement(tag);
  node.className = className;
  node.textContent = text;
  return node;
}

function renderList() {
  const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const fragment = document.createDocumentFragment();
  let matches = 0;
  for (const section of inventorySections()) {
    const group = document.createElement('section');
    group.append(element('h2','stock-zone',section.name));
    for (const category of section.categories) {
      const items = category.foods.filter(food => {
        const searchable = [section.name, category.name, food.name].join(' ').toLowerCase();
        return food.quantity > 0 && terms.every(term => searchable.includes(term));
      });
      if (!items.length) continue;
      matches += items.length;
      const quantity = items.reduce((sum,food) => sum + food.quantity,0);
      const heading = element('h3','stock-category',category.name);
      heading.append(element('small','stock-total',quantity + (quantity===1?' item':' items')));
      const list = document.createElement('ul');
      list.className = 'stock-items';
      for (const food of items) {
        const row = document.createElement('li');
        const icon = element('span','stock-icon',food.icon);
        icon.setAttribute('aria-hidden','true');
        const description = element('span','stock-description',food.name);
        if (food.portion) description.append(element('small','stock-portion',food.portion));
        row.append(icon,description,element('span','stock-quantity','× '+food.quantity));
        list.append(row);
      }
      group.append(heading,list);
    }
    if (group.childElementCount>1) fragment.append(group);
  }
  if (!matches) fragment.append(element('p','stock-empty',terms.length?'No matching items':'Your inventory is empty'));
  results.replaceChildren(fragment);
  summary.textContent = matches + (matches===1?' result':' results');
}
search.addEventListener('input',()=>{renderList();page.scrollTop=0;});
search.addEventListener('keydown',event=>{
  if(event.key==='Enter')search.blur();
  if(event.key==='Escape'){
    event.stopPropagation();
    if(search.value){event.preventDefault();search.value='';renderList();}
    else search.blur();
  }
});
window.addEventListener('list-show',()=>{
  search.value='';
  renderList();
  page.hidden=false;
  page.scrollTop=0;
  page.querySelector('h1').focus({preventScroll:true});
});
window.addEventListener('list-hide',()=>{search.blur();page.hidden=true;});
