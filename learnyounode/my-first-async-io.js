var fs =  require("fs");


fs.readFile(process.argv[2],(err,buf) => { 
    buf = buf.toString().split("\n");
    console.log(buf.length-1);
} );
