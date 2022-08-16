var fs =  require("fs");
//let a = 45;
//console.log(a);

fs.readFile(process.argv[2],(err,buf) => { 
    buf = buf.toString().split("\n");
    console.log(buf.length-1);
} );
//a = 55;
//console.log(a);

//fs.readFile()