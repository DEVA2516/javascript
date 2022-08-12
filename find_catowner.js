let cat = [
    { 'first': 'Elie', 'last': "Schoppik" }, 
    {'first': 'Tim', 'last': "Garcia", 'isCatOwner':true},
    {'first': 'Matt', 'last': "Lane" },
    {'first': 'Colt', 'last': "Steele", 'isCatOwner': true }
];

let key = 'isCatOwner';
let b;

filterbyvalue(cat,key);
console.log(b);

function filterbyvalue(cat,key){
    b = cat.filter(v => v.hasOwnProperty(key));
}