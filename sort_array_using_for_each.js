let arr = [3,8,7,6,5,-4,-3,2,1];

arr.forEach((v,i) => {
    let min = arr[i] , min_index = i;
    arr.forEach((b,j) => {
        if(b < min){
            min = b;
            min_index = j;
            console.log(j);
        }
         //console.log(arr[j]);
        
    });
    //console.log(min);
    let temp = arr[i];
    arr[i] = arr[min_index];
    arr[min_index] = temp;
    
    //console.log(arr);
});

//console.log(arr);