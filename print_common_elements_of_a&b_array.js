let a = [11, 2, 34, 16, 6, 1, 10];
let b = [1, 2, 3, 12, 23, 16, 12];

console.log(commonElements(a, b));

function commonElements(a, b) {
    let str = '';
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] == b[j])
                str += a[i] + " ";
        }
    }
    return str;
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