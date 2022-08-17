let a = [1, 2, 37, 21, 12];
let max = a[0];

for(let i = 0; i < a.length; i++){
    if (a[i] > max)
        max = a[i];
}

console.log(max);

console.log("-----------------");

let array = [2, 5, 8, 10, 2, 10]; 

max = a[0];

array.forEach(v => {
    if (v > max)
        max = v;     
});

console.log(max);


console.log("-----------------");

//max = a[0];

// let b = a.filter (v => {
//     max > v;

// });

// console.log(b);