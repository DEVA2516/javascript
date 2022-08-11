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

extractFullName(fullname);


function extractFullName(fullname){
    fullname.forEach(v => {
        v = Object.values(v);
        let FName = '';
        v.forEach (b => FName += b +" ");
        console.log(FName);
    });
}