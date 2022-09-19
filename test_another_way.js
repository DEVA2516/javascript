// let calc = '228/3+2';

// let k = 0,v=0;
// let n = "";
// let num = [],temp = [];


// calc = calc.split("");

// for (let i = 0 ; i<calc.length;i++){

//     if (isnumber(calc[i-1]) && isnumber(calc[i])) {
//         n += calc[i];
//     }
//     else if(isnumber(calc[i])){
//         n += calc[i];
//         //console.log(n);
//     }
//     else {
//         num[k++] = n;
//         n = '';
//         temp[v++] = calc[i];
//     }



//     //else if (calc[i] == ('*' || '-'||'+'||'/'))

// }
// let sum = 0;
// console.log(num);
// console.log(temp);

    function isnumber(n) {
        return (n >= '0' && n <= '9') ? true : false;
    }

// // for (let i = 0;i<calc.length;i++){

// //     if (isnumber(calc[i-1]) && isnumber(calc[i])) {
// //         num = calc[i] + calc[i-1];
// //     }
// //     else if(isnumber(calc[i]))
// //         num = calc[i];

// //     else {
// //         if (calc[i] == '/')
// //             sum = num / (num2 = calc[i+1]);
// //             if (calc[i] == '+')
// //             sum = num / (num2 = calc[i+1]);
// //             if (calc[i] == '/')
// //             sum = num / (num2 = calc[i+1]);
// //     }
// //     }
// //          }

// //     //else if (calc[i] == ('*' || '-'||'+'||'/'))


// // console.log(sum);}

// let v = '';
// let v1 = 0;
// let calc = '3+4*2';
// let count = 0;
// op = '';

// //console.log(a.charAt(0));
// let a = calc
// // calc.split("");
// //console.log(a);op = a[i];

// for (let i = 0; i < a.length; i++) {

//     if (isnumber(a[i]) && i!=a.length-1) {
//         v += a[i];
//         //console.log(v);
//     }

//     else {
//         if(i==a.length-1)v += +a[i]


//         count++;

//         console.log(v1, v, op);
//         // op = a[i];

//         if (count % 2 == 0 || i==a.length-1) {

//             if (op == '*') {
//                 v1 *= +v;
//                 v = '';
//             }
//             else if (op == '/') {
//                 v1 /= +v;
//                 v = '';
//             }
//             else if (op == '+') {
//                 v1 += +v;
//                 v = '';
//             }
//             else if (op == '-') {
//                 v1 -= +v;
//                 v = '';
//             }
//             else {
//                 v1 %= +v;
//                 v = '';
//             }

//         } else {
//             v1 = +v;
//             v = ''
//         }
//      op =a[i]
//         //console.log(op);

//     }
// }
// console.log(v1, v, op);
// console.log(v1);


let v1 = 0, v = '',op = '';
let count = 0;
let a = '3*4+1+5+10';



for (let i = 0; i < a.length; i++) {

    if (isnumber(a[i])) {
        v += a[i];
        //console.log(v);
    }

    else {

        //if(i==a.length-1)v += +a[i]
       
        count++;

        //console.log(v1, v, op);

        if (count % 2 == 0) {

            v1 = operateEval(v,op,v1);
            v = ''
            count = 1;

        }

        else {
            v1 = +v;
            v = ''
        }
            
        op = a[i]

    }
}

function operateEval(v,op,v1) {
    
    if (op == '*') {
        v1 *= +v;
        v = '';
    }
    else if (op == '/') {
        v1 /= +v;
        v = '';
    }
    else if (op == '+') {
        v1 += +v;
        v = '';
    }
    else if (op == '-') {
        v1 -= +v;
        v = '';
    }
    else {
        v1 %= +v;
        v = '';
    }
    //console.log(v1);

    return v1;
}

//console.log(v1);

console.log(operateEval(v,op,v1));