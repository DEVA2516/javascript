let str = 'The Quick123 Brown Fox';
str = str.split("");

console.log(str);

str.forEach((s, i) => {

    if (s >= 'A' && s <= 'Z')
        return str[i] = s.toLowerCase();
    
    else if (s >= 'a' && s <= 'z')
        return str[i] = s.toUpperCase();
    
    else
        return  s;

});

console.log(str.toString().replace(/,/g,""));