// alert("Dhananjay");

// let user={
//     name:"Dhananjay",
//     age:21
// }

// user.sayhi=(k)=>{
//     alert("Hello Dhananjay"+" : "+k)
// }

// user.sayhi("Konichiwa");
// alert(user.name)
// let m=user;
// alert(m.sayhi("Icchi"));
// alert(m.sayhi())

// let user={
//     name:"Jonathan",
//     sayhi:function(){
//          this.name;
//         // we can use user.name instead of this.name;
//     }
// }

// console.log(user.sayhi)

// let j={
//     sayhi(){
//         alert("Dhananjay");
//     }
// }
// alert(user.sayhi())

// #########     "this" method is very useful when it comes to copying tha values to refrence

//like if we want to copy the user data to admin then it will obviously copy the all property
//but thing is like if we just copy all but in above object user there we are returnig value
//to avoid the change when new object is created we just can make sure use of the this keyword


// let user={
//     name:"Dhananjay"
// }

let say={
    name:"baba yaga"
}

function sayhi(){
    return this.name;
}

user.say=sayhi
say.say=sayhi

// alert(user.say());
// alert(say.say());

// alert(user['say']())

// alert("Dhananjay");

// /task

