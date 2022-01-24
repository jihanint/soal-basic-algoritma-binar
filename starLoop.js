function starLoop(n) {
    var star = "";
    
    if (n == 0){
        console.log("");
    }
    
    else if (n > 0) {
        for (let i=0; i < n; i++){
        star = "*";
        console.log(star);
        }
    }

    else{
        console.log("number invalid")
    }
}

// TEST CASE

//starLoop(1)
// *

//starLoop(2)
// *
// *

//starLoop(6)
//*
//*
//*
//*
//*
//*

//starLoop(0)
//

//starLoop(-5)
// number invalid