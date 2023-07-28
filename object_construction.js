// // Constructor function
// // Constructor functions technically are regular functions. There are two conventions though:

// // 1.They are named with capital letter first.
// // 2.They should be executed only with "new" operator.

// function User(name){
//     this.name=name;
//     this.isadmin=false
// }

// let user=new User("Dhananjay");
// // alert(user.name);
// // alert(user.isadmin);
// // alert("Dhananjay");


// function User(name) {
//     if (!new.target) { // if you run me without new
//       return new User(name); // ...I will add new for you
//     }
  
//     this.name = name;
//   }
  
//   let john = User("John"); // redirects call to new User
// //   alert(john.name)


// // Summary
// // Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
// // Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.

// let obj={}

// function A() { 
//     return obj
//  }
// function B() { 
//     return obj
//  }

// let a = new A();
// let b = new B();

// // // alert( a == b ); // true
// // function Calculator(){
// //     this.read = function() {
// //         this.a = +prompt('a?', 0);
// //         this.b = +prompt('b?', 0);
// //     };

// //     this.sum = function() {
// //     return this.a + this.b;
// //   };

// //   this.mul = function() {
// //     return this.a * this.b;
// //   };
// // }

// // let calci=new Calculator();
// // calci.read();

// // alert(calci.sum());
// // alert(calci.mul());


// // function Dos(){
// //     this.read=function(){
// //         this.val=5;
// //         this.val2=8
// //         //return this.val;
// //     }

// //     this.sum=function(){
// //         return this.val+this.val2;
// //     }
// // }

// // let me =new Dos
// // me.read()
// // alert(me.sum());

// function Accumulator(value){
//     this.value=value;
//     this.read=function(){
//         this.a=+prompt("pleas eenter the values  ",0);
//         this.value+=this.a;
//     }
    
//     // return this.value
// }

// let accumulator = new Accumulator(1); // initial value 1

// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value

// alert(accumulator.value);