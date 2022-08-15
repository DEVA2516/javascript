const fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);

//console.log(buf);

const str = buf.toString().split("\n");


//console.log(str);
//.split("\n");

//console.log(str);

console.log(str.length-1);