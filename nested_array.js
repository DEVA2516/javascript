let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7], 1, 2, [1, 2]];
let j = 0;

arr.forEach(v => {
    em = v.length;

    if (!isempty(em)) {

        console.log("row", j);

        v.forEach(b => {
            console.log(b);
        });

        j++;
    }
    //console.log(v);   
});

function isempty(value) {
    return (value < 0 || value == undefined) ? true : false;
}