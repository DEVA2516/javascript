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
let keys = 0;

for (i = 0; i < library.length; i++) {
    let min = library[i].libraryID , min_index = i;
    //console.log(min);
    for (j = i; j < library.length; j++) {
        if (library[j].libraryID < min) {
            min = library[j].libraryID;
            min_index = j;
    }
    let temp = library[i];
    library[i] = library[min_index];
    library[min_index]= temp;    
    }
    console.log(library[i].libraryID);

}

console.log(library);