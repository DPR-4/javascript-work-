// alert("Dhananjay")

//by akshay saini

// setTimeout(()=>{console.log("imergency call")},5000);

// function y(zx){
//     console.log("Dhananjay from y function");
//     zx();
// }

// function x(){
//     console.log("this is calling x function");
// }
// y(x);
// IIFE
//issue of code or callback
//like 
//two issues are there
//iversion of code - we lose the control over the code
//pyramid of doom or call back hell
let z=(()=>{let count=0;
document.getElementById("clickme").addEventListener("click",()=>{
    console.log("me clicked",++count)
    }   
)})()

let zy = (() => {
    console.log("see direct");
})();