let a = [10,20,1,23,5,20,45,2];

for (let i = 0; i < a.length; i++){
    let min = a[i], min_index = i;
    for(let j = i+1 ; j < a.length; j++){
        if (a[j] < min){
            min = a[j];
            min_index = j;
        }
    }
    let temp = a[i];
    a[i] = a[min_index];
    a[min_index] = temp;
    //console.log(a);
}

console.log(a);

