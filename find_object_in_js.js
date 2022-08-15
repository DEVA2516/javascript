let cars = [
    {
        'first': 'Elie',
        'last': "Schoppik"
    },
    {
        'first': 'Tim',
        'last': "Garcia",
        'isCarOwner': true
    },
    {
        'first': 'Matt',
        'last': "Lane"
    },
    {
        'first': 'Colt',
        'last': "Steele",
        'isCarOwner': true
    }
];

let key = 'isCarOwner';

//let owners;
//     cars.forEach((v,i) => {
//         if (v.hasOwnProperty(key)){
//             owners = findobj(v,key);
//             console.log(owners);
//         }
//     });

// function findobj(v,key){
//     if (v[key] == true){
//         return v;
//     }
// }

// 

let b = cars.filter(v => {
    return v[key] == true;
})

console.log(b[0]);