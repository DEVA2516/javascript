let a = [10,2,10,0,1];
let min = a[0];

for (let i = 0; i < a.length; i++){
    if (a[i] < min)
        min = a[i];
}

console.log(min);

console.log("----------------");

min = a[0];

a.forEach(v => {
    if (v < min)
        min = v;
});

console.log(min);