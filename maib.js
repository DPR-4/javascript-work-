// // "use strict"

// // alert( 'Hello, world!' );
// // [1,2].forEach(alert);


// // for (let i = 1; i < 3; i++) { // shows 0, then 1, then 2
// //   alert("hello from me ",i)
// //   console.log("hello from me ",i);
// // }
// let name="Dhananjay";
// console.log(`hello from me ${name}`);
// // [1,2,name].forEach(alert);
// // let isgreaterthan=4<1;
// // let age =prompt("whay is going on here let me see the first",.45)
// // let ishere=prompt("are you here");
// // alert(typeof ishere);

// // let m=2;
// // m*=3+5;
// // console.log(m);

// // let k=2;
// // count=1;
// // k*=++count;
// // console.log(count);
// // console.log(k);

// // console.log("this is global sistuation going on so we need to work hard");
// // let a=(1+2,3+4);
// // console.log(a);

// // for(let a=1,b=3,c=a+b;a<10;a++,b++,c=a+b){
// //   console.log(a,b,c);
// // }

// //prompt also take argument as string
// // let k=prompt("enter the number");
// // console.log(typeof k);

// // let year=prompt("enter the year");
// // let cond=(year=="2015");
// // if(cond){
// //   alert("you are right");
// // }
// // else{
// //     alert("better luck next time");
// // }

// // let k=prompt("enter the number");

// // let condition=k>0?1:-1;
// // alert(condition);

// // let message=(k>3 && k<15)?"greater than 3":
// //     (k>15)? "this greater than 15":
// //     (k>100)? "this is greater than 100":
// //     "i dont know";

// // alert(message);

// // let m=1;
// // alert(!!m);

// // [1,2,"this is the reason"].forEach(alert);

// // let ae=12;
// // alert(!!ae);

// // simple switch case statements are here
// // let ae=15;
// // switch(ae){
// //     case 1:
// //         alert("this is the value we want case 1");
// //         break
// //     case 2:
// //         alert("this is the value we want case 2");
// //         break
// //     case 15:
// //         alert("this is the value we want case 15");
// //         break
// //     default:
// //         alert("nothing we got throught this");
// //         break
// // }

// // lets see some great hacks here

// // let ae=prompt("please enter the value","9");

// // switch(ae){
// //     case "0":
// //         alert("this is the value 0");
// //         break;
// //     case "1":
// //         alert("this is one value");
// //         break;

// //     case "9":
// //         alert("this is by defult value we want here");
// //         break;
// //     default:
// //         alert("enter any value than 9 1 or 0");
    

// // }

// // from this function we gonna see now

// // let ae=prompt("enter the value");
// // function message(ae){
// //     alert(`this is the value we got ${ae}`)
// // }

// // message(ae);

// // here we see the local and global variable
// // let m="this is the local variable";
// // function mess(){
    
// //     alert(m);
// // }
// // alert(m);
// // alert(m);
// // mess();


// // let user="smith";
// // function mess(){
// //     let user="john";
// //     alert(user);
// // }
// // mess();


// // let user="smith";

// // function mess(){
// //     alert(user);
// // }

// // mess();


// // function para(from,to){
// //     alert(from + "..." + to);
// // }
// // para("Dhananjay","Rutuja");

// // function showMessage(from, text) {

// //     from = '*' + from + '*'; // make "from" look nicer
  
// //     alert( from + ' : ' + text );
// // }

// // showMessage("Dhananjay","Rutuja");

// // default parameter in function

// // function mess(from,to="mantalae"){
// //     alert(from + " : " +to);
// // }

// // mess("Dhananjay","binural")

// // function another(){
// //     let g="see";
// //     return g;
// // }

// // function mess(d,g=another()){
// //     alert(d+" "+g);
// // }
// // mess("Dhananjay");



// // function sum(a,b){
// //     return a+b;
// // }

// // let result=sum(7,8);
// // alert(result);

// // let age=prompt("how old you are",18);
// // function checkage(age){
// //     if(age>=18){
// //         return true;
// //     }
// //     else{
// //         return false;
        
        
// //     }
// // }

// // function message(){
// //     if(checkage(age)){
// //         alert("acess granted ");
// //     }
// //     else{
// //         return confirm("does your parents allow to do this")
// //         alert("acess denied !!!!!!")
// //     }
// // }

// // message();

// // function showPrimes(n) {
// //     nextPrime: for (let i = 2; i < n; i++) {
  
// //       for (let j = 2; j < i; j++) {
// //         if (i % j == 0) continue nextPrime;
// //       }
  
// //       alert( i ); // a prime
// //     }
// //   }

// //   showPrimes(7)



// // function expression 

// // let sayhi=function(){
// //   alert("This is how it works");
// // }
// // // sayhi();

// // let func=sayhi;
// // func();
// // sayhi();

// // let ask=function(quetion ,yes,no){
// //   if (confirm(quetion)) yes();
// //   else no();
// // };

// // let yes=function(){
// //     alert("ya this one is good now");
// // };

// // let no=function(){
// //     alert("no this one is bad now");
// // };

// // ask("this is the quetion",yes,no);


// // let Dhananjay=function(quetion,sure ,seeyouagain){
// //     if(confirm(quetion)){
// //       sure();
// //     }
// //     else{
// //       seeyouagain();
// //     }
// // };

// // let sure=function(){
// //   alert("yes Dhananjay I love you");
// // };

// // let seeyouagain=function(){
// //   alert("we will be in touch");
// // };

// // Dhananjay("the most beautiful girl i ever seen in my life is you rishi",sure,seeyouagain);



// //let's see some few way to do the same thing


// // let Dhanajay=function(ask,sure,seeyou){
// //   if(confirm(ask)){
// //     sure();
// //   }
// //   else{
// //     seeyou();
// //   }
// // }

// // Dhanajay(
// //   "Do you love me rishi",
// //   function(){alert("i love you Dhananjay")},
// //   function(){alert("this will be stayed between us")}

// // )

// //really new kind of trick i saw

// // dpr("Dhananjay");
// // function dpr(name){
// //   alert(`hey this is my dude ${name}`);
// // }

// //########################################################
// //the main diffrence between the function expression and function declaration is 
// //early calls
// // like if we call the function before the declaration in declare function it will work
// // but the same condition when applied to the function expression then it fails to excute


// // let dpr=function(name){
// //   alert(`hey this is my dude ${name}`);
// // }

// // dpr("Dhananjay");


// // let a=prompt("enter your age",18);

// // if(a<18){
// //   function welcome(){
// //     alert("hey guys hello welcome here");
// //   }
// // }
// // else{
// //   function welcome(){
// //     alert("greeting guys");
// //   }
// // }

// // welcome();

// ///???? //i don't know why but both are working perfectly 
// //declartion and expression both are great

// // let a=prompt("enter ur age",18);
// // let welcome;
// // if(a<18){
// //   welcome=function(){
// //     alert("hello boys");
// //   }
// // }

// // else{
// //   welcome=function(){
// //     alert("guys");
// //   }
// // }

// // welcome();


// // (prompt("please enter the age",89)<18)?
// //   (function wel(){
// //     alert("this is not your bap ka ghar");
// //   })
// // :(function wel(){
// //     alert("ye to apka he ghar hai bhai sahab");
// //   })

// // wel();


// // Functions are values. They can be assigned, copied or declared in any place of the code.
// // If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
// // If the function is created as a part of an expression, it’s called a “Function Expression”.
// // Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
// // Function Expressions are created when the execution flow reaches them.
// // In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

// // So we should use a Function Expression only when a Function Declaration is not fit for the task. We’ve seen a couple of examples of that in this chapter, and will see more in the future


// //now let's see the arrow function where we left need to start from there

// // this arrow function is shorter form of the functional expression

// // let sum=(a,b)=>a+b;

// // alert(sum(12,12));

// //for single argument we can avoid the paranthesis 

// // let d=n=>n*n;
// // alert(d(7));


// // let sayhi=()=>alert("hello guys");
// // sayhi();

// // var me=(name)=>alert(`this is my name ${name}`);
// // me("Jorden welford");

// // let say=name=>alert(`this is my name ${name}`);
// // say("Munja");

// //please show me thefunction expression

// // let k=function(){
// //   alert("this is my dog");
// // }
// // k();

// //same function by arrow function let's see the example

// // let k=()=>alert("this is the way to say hello");
// // k();
// // let ask = (question, yes, no)=> {
// //   if (confirm(question)) yes();
// //   else no();
// // }

// // ask(
// //   "Do you agree?",
// //   ()=> { alert("You agreed."); },
// //   ()=> { alert("You canceled the execution."); }
// // );


// // let i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
// // alert(i);





