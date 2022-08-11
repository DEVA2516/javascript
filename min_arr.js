let arr = [3,8,7,6,5,-4,-3,2,1];
let min = arr[0]  ,minj = arr[0];
arr.forEach((v,i) => {
    if(v < min)
        min = v;
});
let temp = minj;
minj = min;
min = temp;
console.log(arr);