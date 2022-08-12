let teacher = [
    {'name': 'Elie'}, 
    {'name': 'Tim'}, 
    {'name': 'Matt'}, 
    {'name': 'Colt'}
];
key = 'title';
value = 'Instructor';

addKeyValue(teacher,key,value)

console.log(teacher);

function addKeyValue(teacher,key,value){
    teacher.forEach(v => {
        //console.log(v);
         v.key = value; 
    });
}