// Illustrative food records. Dates are seeded once and then persisted locally.
const examples={
 Milk:[['Whole milk','🥛',1,'1 litre',2]],
 'Oat milk':[['Oat milk','🥛',1,'1 litre',6]],
 Juice:[['Orange juice','🍊',1,'750 ml',3]],
 Cola:[['Cola','🥤',2,'2 × 330 ml',90]],
 Water:[['Still mineral water','💧',2,'2 × 500 ml',180]],
 'Sparkling water':[['Sparkling water','💧',2,'2 × 500 ml',120]],
 Tonic:[['Tonic water','🥤',2,'2 × 200 ml',90]],
 Wine:[['White wine','🍷',1,'750 ml',120]],
 Beer:[['Lager','🍺',2,'2 × 330 ml',90]],
 Cider:[['Apple cider','🍎',1,'500 ml',90]],
 Dairy:[['Milk','🥛',1,'1 litre',1],['Cheddar','🧀',1,'200 g',9],['Butter','🧈',1,'250 g',21],['Double cream','🥛',1,'300 ml',7]],
 Vegetables:[['Spinach','🥬',1,'1 bag',2],['Broccoli','🥦',1,'1 head',6],['Carrots','🥕',3,'3 carrots',10],['Cucumber','🥒',1,'1 cucumber',6],['Red pepper','🫑',1,'1 pepper',7]],
 Leftovers:[['Vegetable pasta','🍝',1,'1 container',1],['Roast vegetables','🥘',1,'1 container',2]],
 Yogurt:[['Greek yogurt','🥣',1,'500 g',5],['Strawberry yogurt','🥣',2,'2 pots',8]],
 'Meat & fish':[['Chicken breast','🍗',2,'2 portions',2],['Salmon fillet','🐟',1,'1 fillet',4]],
 Sauces:[['Pesto','🫙',1,'1 jar',7],['Mayonnaise','🫙',1,'1 jar',25],['Mustard','🫙',1,'1 jar',35],['Soy sauce','🫙',1,'1 bottle',90],['Hot sauce','🌶️',1,'1 bottle',60],['Ketchup','🍅',1,'1 bottle',40]],
 Deli:[['Hummus','🧆',1,'200 g',5],['Sliced ham','🥓',1,'120 g',4]],
 Fruit:[['Oranges','🍊',2,'2 oranges',10],['Apples','🍎',2,'2 apples',14],['Blueberries','🫐',1,'1 punnet',4]],
 Eggs:[['Free-range eggs','🥚',12,'12 eggs',16]],
 Snacks:[['Dark chocolate','🍫',1,'1 bar',90],['Olives','🫒',1,'1 tub',10],['Cheese bites','🧀',1,'1 pack',8]],
 'Frozen veg':[['Frozen peas','🫛',1,'500 g',90],['Sweetcorn','🌽',1,'500 g',80],['Mixed vegetables','🥦',1,'1 bag',100]],
 'Ice cream':[['Vanilla ice cream','🍨',1,'500 ml',60],['Mango sorbet','🥭',1,'500 ml',70]],
 'Frozen meals':[['Vegetable dumplings','🥟',2,'2 packs',45],['Margherita pizza','🍕',1,'1 pizza',60],['Vegetable curry','🍛',1,'1 portion',30]]
};
export function dateKey(date){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
export function daysUntil(value,today=new Date()){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(value??''))return null;
 const [y,m,d]=value.split('-').map(Number);const date=new Date(y,m-1,d);
 if(date.getFullYear()!==y||date.getMonth()!==m-1||date.getDate()!==d)return null;
 return Math.round((Date.UTC(y,m-1,d)-Date.UTC(today.getFullYear(),today.getMonth(),today.getDate()))/86400000);
}
export function seedFoods(category,today=new Date()){
 return (examples[category]??[]).map(([name,icon,quantity,portion,days],i)=>{
 const expiry=new Date(today.getFullYear(),today.getMonth(),today.getDate()+days);
 return {id:`${category}-${i}`,name,icon,quantity,portion,expiresOn:dateKey(expiry)};
 });
}
export function foodStatus(food,today=new Date()){
 const days=daysUntil(food.expiresOn,today);
 return {urgent:days!==null&&days<=3,label:days===null?'No date':days<0?'Expired':days===0?'Use today':days===1?'Use tomorrow':days<=3?`Use in ${days} days`:`${days} days left`};
}
export function totals(foods,today=new Date()){
 return foods.reduce((total,food)=>({count:total.count+food.quantity,useSoon:total.useSoon+(foodStatus(food,today).urgent?food.quantity:0)}),{count:0,useSoon:0});
}

// A model represents a category; its alert opens the exact dated food records.
export function expiryAlert(foods,today=new Date()){
 const urgent=foods.filter(food=>food.quantity>0&&foodStatus(food,today).urgent);
 const expired=urgent.some(food=>daysUntil(food.expiresOn,today)<0);
 return {urgent:urgent.length>0,expired,label:expired?'Contains expired food':urgent.length?'Contains food due within 3 days':''};
}
