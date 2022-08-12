let cars = [
    {
        'first': 'Elie',
        'last':"Schoppik"
    }, 
    {   'first': 'Tim', 
        'last':"Garcia", 
        'isCatOwner': true
    }, 
    {
        'first':'Matt', 
        'last':"Lane"
    }, 
    {
        'first': 'Colt', 
        'last':"Steele", 
        'isCatOwner': true
    }
    ];

    let key = 'isCatOwner';
    let owners ;
    cars.forEach((v,i) => {
        if (v.hasOwnProperty(key)){
            owners =findobj(v,key);
            console.log(owners);
        }
    });

function findobj(v,key){
    if (v[key]== true){
        return v;
    }
}

// 

let b = cars.filter(v => {
    return v[key] == true;
})

console.log(b[0]);