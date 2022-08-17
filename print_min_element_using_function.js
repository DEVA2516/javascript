let a = [30,1,2,10];

console.log(printArrayMin(a));
console.log("-----------------");
console.log(printArrayEachMin(a));

function printArrayMin (a) {
    let min = a[0];
    for (let i=0;i<a.length;i++){
        if(a[i]<min)
            min = a[i];
    }
    return min;
}

function printArrayEachMin(a){
    let min = a[0];
    a.forEach(v => {
        if(v<min)
            min = v;   
    });
    return min;
}