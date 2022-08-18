arr = [1, 2, 10, 8, 46, 45, 4, 6, 2];

let max = arr[0];
let index = 0, j = 0;
let max_array = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        index = i;
        //max_array[j++] = max;
        //console.log(i);
    }
}
//console.log(max_array);

arr.splice(index, 1);


//console.log(arr);

max = arr[0];

if (arr.length > 1) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max)
            max = arr[i];
    }
    console.log(max);
    //code here
} else
    return -1;

