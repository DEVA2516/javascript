let arr = [1,2,3,4,5];
let d = 2;
for(let i=0,j=2;j>i && j<arr.length; i++,j++){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(arr);