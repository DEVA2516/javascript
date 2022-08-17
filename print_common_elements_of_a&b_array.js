let a = [11, 2, 34, 16, 6, 1, 10];
let b = [1, 2, 3, 12, 23, 16, 12];

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            console.log(a[i]);
        }
    }
}

console.log("---------------------");

let str = '';

a.forEach(va => {
    b.forEach(vb => {
        if (va == vb)
            str += va + " ";
    });
    
});

console.log(str);