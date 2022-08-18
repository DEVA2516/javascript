let a = [10,20,25,30,21];
let b = 55;
let found = false;

for(let i = 0; i <a.length;i++){
    if(a[i] == b){
        found = true;
        console.log("found..");
        break;
    }

}

if (found == false)
    console.log("not found");