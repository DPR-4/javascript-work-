// In a browser, global functions and variables declared with var (not let/const!) become the property of the global object: 

//so here we can declare the global function in javascript from var keyword only let/cost not work here

// var msg="Dhananjay";
// alert(msg);
// alert(window.msg);

// let msg="see";

// alert(window.msg)

// If a value is so important that you’d like to make it available globally, write it directly as a property:

// window.current={
//     "name":"see"
// }

// alert(current.name )
// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
// alert(window.currentUser.name); // John


// if (!window.Promise) {
//     alert("Your browser is really old!");
//   }


// name proprty NFE

// function syhi(){
//     alert("Dhananjay")
// };

// alert(syhi.name)

function ask(question, ...handlers) {
    let isYes = confirm(question);
  
    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }
  
  }


//here is NFE (Named Function Expression)
//where we gonna see like 
//here func will can call internally only can't be use by outside 
//   let sayHi = function func(who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     func("Guest"); // use func to re-call itself
//   }
// };

// sayHi(); // Hello, Guest

// // But this won't work:
// func(); // Error, func is not defined (not visible outside of the function)
//here f should be capital like F
// let sum=new Function('a','b','return a+b');
// alert(sum(5,10));

