let a = [1,3,2,5,12,4];

console.log(sortArray(a));

function sortArray (a) {
    
    for(let i = 0; i  < a.length; i++){
        let min = a[i], minj = i;
        for(let j = i+1; j < a.length; j++){
            if(a[j] < min){
                min = a[j];
                minj = j;
            }
        }
        let temp = a[i];
        a[i]  = a[minj];
        a[minj]= temp;
    }
    return a;
}