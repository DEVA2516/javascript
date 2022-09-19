let a = [11, 2, 34, 16, 6, 1, , 3, 2, 3, 10];
let b = [1, 2, 3, 12, 23, 16, 12];

console.log(commonElements(a, b));


function commonElements(a, b) {
    let str = '';
    let temp = [];
    let k = 0;

    for (let i = 0; i < a.length; i++) {
        if (!foundEle(temp, a[i])) {
            for (let j = 0; j < b.length; j++) {
                if (a[i] == b[j]) {
                    str += a[i] + " ";
                    temp[k++] = a[i];
                    //console.log(a[i]);
                }
            }
        }

    }
    return str;
}

console.log("---------------------");

// let str = '';

// a.forEach(va => {
//     b.forEach(vb => {
//         if (va == vb)
//             str += va + " ";
//     });

// });

// console.log(str);

function foundEle(temp, a) {
    let found = false;
    console.log(temp);
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] == a) {
            found = true;
            break;
        }
    }
    //console.log(found);
    return found;
}
