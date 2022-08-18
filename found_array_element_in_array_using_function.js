let a = [10, 20, 30, 12, 10];
let b = 4;

if (found(a, b))
    console.log("found");
else
    console.log("not found");



function found(a, b) {
    let found = false;
    for (i = 0; i < a.length; i++) {
        if (a[i] == b) {
            found = true;
            break;
        }
    }
    return found;
}