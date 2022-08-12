let student = { 
    'name': "David Rayy", 
    'sclass': "VI",
    'rollno': 12 
};

console.log("before delete of object:\n",student);

if (student.hasOwnProperty('rno'))
    delete student.rollno;
else
    console.log(".....not property of object........")    


console.log("after delete of object:\n",student);