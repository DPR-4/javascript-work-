// decorator

let Car=function(){
    let car={
        wheel:4
    }
    paint("black")(car);
    return car;
}

function paint(value){
   
    return function(car){
        car.color=value;
    }
}

// paint("black");
// console.log(Car());

