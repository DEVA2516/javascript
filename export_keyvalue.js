let teacher = [
    { 'name': 'Elie' },
    { 'name': 'Tim' },
    { 'name': 'Matt' },
    { 'name': 'Colt' }
];
key = 'name';
let new_arr = [];

exportkey(teacher, key);

function exportkey(teacher, key) {
    teacher.forEach((v, i) => {
        new_arr.push(teacher[i][key]);
    });
}

console.log(new_arr);