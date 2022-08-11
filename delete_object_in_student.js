let student = { 
    'name': "David Rayy", 
    'sclass': "VI",
    'rollno': 12 
};

console.log("before delete of object:\n",student);

delete student.rollno;

console.log("after delete of object:\n",student);