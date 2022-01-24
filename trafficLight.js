function trafficLight(color) {
    var message = "";
    if(color == ""){
        message = "please insert color";
    }
    else{
        
        if((color == "red") ||(color == "orange")|| (color == "green")){

            if(color == "red"){
                message = "stop";
            }
            else if(color == "orange"){
                message = "careful";
            }
            else if(color == "green"){
                message = "go";
            }
    
        }

        else{
            message = "color invalid";
        }

    }

    return message;
}

// TEST CASE
console.log(trafficLight("red")) // stop
console.log(trafficLight("orange")) // careful
console.log(trafficLight("green")) // go
console.log(trafficLight("blue")) // color invalid
console.log(trafficLight("purple")) // color invalid
console.log(trafficLight("axew")) // color invalid
console.log(trafficLight("")) // please insert color