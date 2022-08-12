let teacher = [
    {'name': 'Elie'}, 
    {'name': 'Tim'}, 
    {'name': 'Matt'}, 
    {'name': 'Colt'}
];

teacher.forEach(addKeyValue);
console.log(teacher);

function addKeyValue(v){
    return v.title = 'instructor'; 

}