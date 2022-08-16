let arr = [1,2,3,4,5];
let d = 2;
for(let i=2 ,j=0; i < arr.length && j<arr.length; i++,j++){
    if (i != j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    }
console.log(arr);
}