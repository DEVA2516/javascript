var library = [
    {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
    },
    {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
    },
    {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID:4561 
    }
];
let keys = 0;

library.forEach((v,i) => {
    v = Object.keys(v);
    v = v.sort()
    console.log(v);
    return 
     ;
});

// keys.forEach(v => {
//     //console.log(v);
//     console.log(library[1][v]);
    
// });
console.log(library[0]);

