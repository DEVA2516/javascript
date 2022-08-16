const fs = require('fs');
console.log(fs);

let a= 45;
console.log(a);
// console.log(process.argv[2]);
 let buf = fs.readFileSync(process.argv[2]);
 console.log(buf);

a = 55;
console.log(a);


// const str = buf.toString().split("\n");


// //console.log(str);
// //.split("\n");

// //console.log(str);

// console.log(str.length-1);