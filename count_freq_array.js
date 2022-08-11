let arr = [3, 'a', 3, 'a', 'a', 2, 3, 'a', 'a'];
//let b = 'a';
let count = 0;
let temp = [];
let k = 0;

arr.forEach(v => {
    if (!found(temp, v)) {
        arr.forEach(b => {
            if (v == b)
                count++;

        });
        console.log(v, count);
        temp[k++] = v;
        count = 0;
    }
});


function found(temp, v) {
    let found = false;

    temp.forEach(temp_value => {
        if (v == temp_value)
            found = true;
    });

    return found;
}