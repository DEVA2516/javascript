a = [6, 7, 8, 1, 2];

console.log(printArrayMax(a));
console.log("----------------");
console.log(printEachMax(a));


function printArrayMax(a) {
    let max = a[0];

    for (let i = 0; i < a.length; i++) {
        if (a[i] > max)
            max = a[i];
    }
    return max;
}

function printEachMax(a) {
    let max = a[0];
    
    a.forEach(v => {
        if (v > max)
            max = v;
    });
    return max;

}