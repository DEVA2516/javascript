let a = ['sb','ab','aa','cs'];
a.sort((a,b) => {
    console.log(a,b,a > b);
    return a > b;
})
console.log(a);
//Array.sort()