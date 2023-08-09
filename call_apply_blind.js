// let name={
//     first:"Dhananjay",
//     last:"Rayate",
   
// }

// // name.printfullname();

// // we can use this as borrow method

// let name2={
//     first:"Rasika",
//     last:"borade"
// }
// // so here we call method use we just borrowed the function from the other 
// // name.printfullname.call(name2);
// // but here we didn't use the () rounded bracket

// // so we can use this method seprate manner too

// printfullname=function(hometown,family,see){
//     alert(this.first+" "+this.last);
//     console.log(this.first+" "+this.last+" "+"from  "+ hometown+" "+"belongs to s"+ family+" "+see);
// }

// // printfullname.call(name,"Dindori");
// // printfullname.call(name2,"Nashik");

// // printfullname.apply(name2,["dindori","Rich"])


// // bind method
// //there is not much diffrence between the bind and call
// //bind usually use when the we want to use it later work

// let print_s=printfullname.bind(name2,"Dindori","choose");
// console.log(print_s);
// // print_s();

// //let's see the one more example of the this method

// let group={
//     title:"MR.",
//     student:["Dhananjay","Andrew","John","libra"],

//     showlist:function(){
//         this.student.forEach(stud=>
//             alert(this.title+" "+stud)
//         )
//     }
// }

// // group.showlist();
// //mybind we create this protype by our self let's do it


// Function.prototype.mybind=function(...arg){
//     let obj=this;
//     let phase=arg.slice(1);
//     return function(...arg2){
//         obj.apply(arg[0],[...phase,...arg2]);
//     }
// }

// let p=printfullname.mybind(name,"Dindori","rishi");
// // p("this is what");



















// let named={
//     name:"Dhananjay ji",
//     surname:"Rayate ji"
// }

// let saymyname=function(look){
//     console.log(this.name + " surname" +this.surname+" "+look);
// }

// // saymyname.call(named,"naruto");
// // saymyname.apply(named,["liked"])

// //now let's see the pollyfill method in bind

// Function.prototype.mepan=function(...arg){
//     // return function
//     let methodsobj=this;
//     let phase=arg.slice(1);
//     return function(){
//         methodsobj.apply(arg[0],[phase]);
//     }
// }

// let m=saymyname.mepan(named,"oh yeah");
// // m();

// //let's do the pratice here



