

calc = '4*4-2+2*2';

// calc = calc.split("");

// calc.forEach((v,i) => {
//     if (v == '÷')
//         v = '/';
// });

// calc = calc.join("");

// str = str.split("");
// let n ='' ;
// for (let i = 0; i < str.length; i++) {
//     if (str[i] >= '0' && str[i] <= '9')
//         n = str[i];
// }

// console.log(n);

//console.log(eval(str));
// event bubbling & event delication

let op = calc.split(/[0-9]/);
let num = calc.split(/[+-/*]/);

console.log(op);
console.log(num);

let sum = +num[0];

op.forEach((v,i) => {
    if (v == '+')
        sum += +num[i+1];
    else if (v == '-')
        sum -= +num[i+1];
    else if (v == '*')
        sum *= +num[i+1];
    else if (v == '/')
        sum /= +num[i+1];
    else if (v == '%')
        sum %= +num[i+1];
    else    
        console.log("...")
        //res.send("something Wrong...");
} );

// let value = num.length - 1

// console.log(num[value]);
//res.send(num[value]);

//calc = 3*4-2

console.log(sum);

