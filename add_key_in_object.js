let str = '2*2+4*12+112';
let sum = 0;

let numbers = str.split(/[0-9]/);
let operator = str.split(/[+-/*]/);

console.log(numbers);
console.log(operator);

for(let i=0;i<str.length;i++){
    if (str[i] == '+')
        sum = numbers[i] + numbers[i+1];
    else if (str[i] == '+')
        sum = numbers[i] + numbers[i+1];
    
}

// str.forEach(v => {
//     console.log(v);

// });

