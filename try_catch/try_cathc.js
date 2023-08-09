// alert("Dhananj")
// let's see the try and catch method 
try{
//  console.log(Dhan)   
    throw new ReferenceError("Dhananjay is not here")
}
catch(error){
    console.log(error.name)   
    console.log(error.message)   
}
