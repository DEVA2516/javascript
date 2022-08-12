var library = [
    {
        'author': 'Bill Gates',
        'title': 'The Road Ahead',
        'readingStatus': true
    },
    {
        'author': 'Steve Jobs',
        'title': 'Walter Isaacson',
        'readingStatus': true
    },
    {
        'author': 'Suzanne Collins',
        'title': 'Mockingjay: The Final Book of The Hunger Games',
        'readingStatus': false
    }
];

let key = 'readingStatus';


    library.forEach((v,i)=> {
        //console.log(v);
        if(library[i][key] == true)
            console.log(library[i]);
    });


//else 
//    console.log("not property...");


console.log(library.filter((v,i) => {
 return library[i][key] == true;
}));