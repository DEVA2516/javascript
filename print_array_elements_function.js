let a = [6, 3, 4, 2, 1];

printArray(a);

function printArray(a) {
    for (i = 0; i < a.length; i++)
        console.log(a[i]);
}


console.log("--------------------------");

printArrayEach(a);

function printArrayEach(array) {
    
array.forEach(v => {
    console.log(v);
    
});
}