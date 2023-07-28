// alert("Dhananjay");
//so let's see the closure program in this chapter let's seee the 

// so mess only visible inside of the body only
//let's see the diffrent kind of the techniques

// {
//     let mess="see you again"

//     alert(mess);
// }

// console.log(mess)

// one day i will be also an iitian for sure
// mark my words present Dhananjay Just wait and watch
//let's how life makes me 

//lexical enivironmet 
//refrence through namste javascrpt channel

// (function(){
//     var msg="Dhananjay";
//     alert(msg)
// })();
// alert("Dh");

//to work this function we need to cover whole statement or function in round bracket
//and we need to  put this IIFE (Immediately Invoked Function Expression)
//it immediately invoked and  calls where it decalre

// function(){
//     let them="rain";
//     alert(them);
// }();

// So, the parentheses around the function is a trick to show JavaScript that the function is created in the context of another expression, and hence it’s a Function Expression: it needs no name and can be called immediately.       

// Ways to create IIFE

// (function() {
//     alert("Parentheses around the function");
//   })();
  
//   (function() {
//     alert("Parentheses around the whole thing");
//   }());
  
//   !function() {
//     alert("Bitwise NOT operator starts the expression");
//   }();
  
//   +function() {
//     alert("Unary plus starts the expression");
//   }();

// Summary
// There are two main differences of var compared to let/const:

// var variables have no block scope, their visibility is scoped to current function, or global, if declared outside function.
// var declarations are processed at function start (script start for globals).
// There’s one more very minor difference related to the global object, that we’ll cover in the next chapter.

// These differences make var worse than let most of the time. Block-level variables is such a great thing. That’s why let was introduced in the standard long ago, and is now a major way (along with const) to declare a variable.