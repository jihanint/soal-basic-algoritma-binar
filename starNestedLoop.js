function starNestedLoop(n, m) {
    var star = "";
    for (let i = 0; i < m; i++){
        star += "\n";
        for (let j = 0; j < n; j++){
            star += "*";
        }
    }
    
    console.log(star);
}

//TEST CASE
starNestedLoop(1,2)
// *
// *

starNestedLoop(2,3)
// **
// **
// **

starNestedLoop(4,1)
// ****