let a = [23, 34, 20, 50, 10, 70, 2, 85];

// for(let i in a)  // in = index
//     console.log(i);

// for(let i of a)    // of = values
//     console.log(i);

// for each
// let max = a[0];

//a.forEach(myfun);


//function myfun(v,i,a){
//console.log(i,"=",v,a);
//let sum = 0;
//sum += v;
//console.log(this);
//if(v > max)
//max = v;
//}

//  console.log(max);

// anonymous function - not function name


//a.forEach(function(v,i,a) {
//console.log(i," = ", v);
//console.log(this);
//});

// let sum = 0;
//a.forEach((v,i,a) => console.log(this));

// map - it returns new array

// b = a.map(v => v+1);

//console.log(b);

//let b = a.filter((v,i) => {v > 30 && v < 50;});
//console.log(b)
let b = 10;
console.log(a.filter(v => { 
    //console.log(v);
    return v==b;
}));

// a.reduce((a, b) => {
//     console.log(a, b);
//     return a - b;
// });
