let a = [23, 34, 20, 50, 10, 70, 2, 85];
let sum = 0;
let product = 1;

a.forEach(v => {
    sum += v; 
    product *= v;
    
});

console.log(sum);
console.log(product);

//console.log(a.reduce((a,b) =>  a + b));
//console.log(a.reduce((a,b) =>  a * b));
