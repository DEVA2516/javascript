let student = [{ 
    'name': "David Rayy", 
    'sclass': "VI",
    'rollno': 12 
},
{ 
    'name': "Dave gess", 
    'sclass': "III",
    'rollno': 11 
}
];

let keys_arrays = 0 ;

student.forEach(v => {
    keys_arrays += Object.keys(v).length;
    //console.log(Object.keys);
    
});

//keys = Object.keys(student);

console.log(keys_arrays);

//console.log(keys.length);