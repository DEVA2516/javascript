let fullname = [
    {
        'first': 'Elie', 
        'last':"Schoppik"
    }, 
    {
        'first': 'Tim',
        'last':"Garcia"
    }, 
    {
        'first':'Matt',
        'last':"Lane"
    }, 
     {
        'first': 'Colt', 
        'last':"Steele"
    }
];

let fkey = 'first';
let lkey = 'last';

extractFullName(fullname);


function extractFullName(fullname){

   let  b = fullname.map(v => {

        if (v.hasOwnProperty(fkey) && v.hasOwnProperty(lkey)){

            return v = v[fkey] + " " + v[lkey];

        }
    });

    console.log(b);
}