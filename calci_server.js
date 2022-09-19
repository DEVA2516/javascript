var express = require('express');
var app = express();

app.get('/', (req, res) => {

    let calc = req.query.calc;
    console.log(calc);

    let op = calc.split(/[0-9]/).filter(v => v != '');
    let num = calc.split(/[+-/*%"]/);
    console.log(op);
    console.log(num);

    op.forEach((v, i) => {
        if (v == '+')
            num[i + 1] = +num[i] + +num[i + 1];
        else if (v == '-')
            num[i + 1] = +num[i] - +num[i + 1];
        else if (v == '*')
            num[i + 1] = +num[i] * +num[i + 1];
        else if (v == '/')
            num[i + 1] = +num[i] / +num[i + 1];
        else if (v == '%')
            num[i + 1] = +num[i] % +num[i + 1];
        else  // console.log("...")
        res.send("something Wrong...");
    });

    let value = num.length - 1

    //console.log(num[value]);
    res.send(""+num[value]);

  

    //res.send(" " + c); // like return
})
///app.post()


// app.post('/',(req,res) => { 
//     console.log(req);
//     res.send('hello '); // like return
// })

app.listen(3000, () => { console.log(' post running..') });