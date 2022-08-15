var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 5254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 2345
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 1256
    }
];

// for (let i = 0; i < library.length; i++) {

//     let min = library[i].libraryID, min_index = i;

//     for (let j = i; j < library.length; j++) {

//         if (library[j].libraryID < min) {
//             min = library[j].libraryID;
//             min_index = j;
//         }
//     }
//         let temp = library[i];
//         library[i] = library[min_index];
//         library[min_index] = temp;
    

   // console.log(library[i].libraryID);

//}





//let keys = 0;

// for (let i = 0; i < library.length; i++) {

//     let min = library[i].libraryID, min_index = i;

//     for (let j = i; j < library.length; j++) {

//         if (library[j].libraryID < min) {
//             min = library[j].libraryID;
//             min_index = j;
//         }
//     }
//         let temp = library[i];
//         library[i] = library[min_index];
//         library[min_index] = temp;
    

   // console.log(library[i].libraryID);

//}

//console.log(library);


// library.forEach((v, i) => {
//     let min = library[i].libraryID, min_index = i;

//     library.forEach((b, j) => {
//         if (library[j].libraryID < min && i < j) {
//             min = library[j].libraryID;
//             min_index = j;
//         }
//     });

//     let temp = library[i];
//     library[i] = library[min_index];
//     library[min_index] = temp;

//     //console.log(arr);
// });

// console.log(library);

console.log(library.sort(library[i].libraryID));