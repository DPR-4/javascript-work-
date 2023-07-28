// // console.log("Hello i am here now")

// // let name="Dhananjay";
// // let future=name;
// // console.log(name)
// // console.log(future)

// // this is happens in variable 
// // let name="Dhananjay";
// // let light=name;
// // console.log(name)
// // console.log(light)


// // ?##### but in object copying 
// // only adress is store where as the store element is remain same as it is

// // user={
// //     name:"light yagami"
// // }

// // let death=user;
// // death.name="Dhananjay";

// // console.log(death.name);
// // console.log(user.name);

// // alert(death===user);



// // two independent object can't be same even though they look simmilar

// // let a={};
// // let b={};

// // if(a==b){
// //     alert(true);
// // }
// // else{
// //     alert(false);
// // }


// // let a={
// //     num:5
// // };
// // let b={
// //     num:6
// // };

// // if(a.num<b.num){
// //     alert(true);
// // }
// // else{
// //     alert(false)
// // }

// // alert(a);
// // alert(b);

// // console.log(a);
// // console.log(b);


// // Cloning and merging, Object.assign
// // So, copying an object variable creates one more reference to the same object.

// // But what if we need to duplicate an object?

// // We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.



// //and this make the duplicate of the same object 
// //it is not like refrencing to original object
// //it is just recreating same object again
// // let original={
// //     future:"mask off",
// //     worker:"bees",
// //     owner:"queen"
// // };

// // let duplicate={};

// // for(let keys in original){
// //     duplicate[keys]=original[keys];
// // }
// // //original=duplicate;
// // for(let k in duplicate){
// //     console.log(k+" : "+duplicate[k]);
// // }

// // alert(original===duplicate);


// // this is one of the great example ha


// // We can also use the method Object.assign.

// // The syntax is:


// // let user={name:"Dhananjay"};
// // let p={surname:"Rayate",laugh:"ha ha aha"};
// // let p2={car:"s s camero"};

// // Object.assign(user,p,p2);

// // for(let k in user){
// //     alert(k+" : "+user[k]);
// // }


// // lets play the nested object 

// // let a={
// //     b:{name:"Dhananjay",
// //     ceo:"R tech"},
// //     c:{
// //         binural_beat:"40hz",
// //         use:"for study"
// //     }
// // }
// // // alert(a.b.name)
// // for(let key in a){
// //     for(let k in a[key]){
// //         alert(a[key][k]);
// //     }
// // }

// // let a={
// //     b:{
// //         c:{
// //             name:"Ram",
// //             peace:"full"
// //         }
// //     },
// //     d:{
// //         e:{
// //             name:"Krishana",
// //             peace:"full"
// //         }
// //     }
// // }

// // for(let key in a){
// //     console.log(key);
// //     for(let ke in a[key]){
// //         console.log(ke)
// //         for(let k in a[key][ke]){
            
// //             console.log(k+" : "+(a[key][ke][k]));
// //         }
// //     }
// // }


// //Object.assign(dest,source,..)

// // Shallow copies, in the context of JavaScript objects and arrays, refer to the process of copying the references of values from one object/array to another, rather than creating new independent copies of those values.

// //above is kind of shallow copies where the it point out of make copy of the refrence 
// //like particular address of the original object values

// let user={
//     name:"Dhananjay"
// }

// let source={
//     surname:"life"
// }

// let source_1={
//     life:"hell"
// }
// // user=source_1;
// // Object.assign(user,source_1,source)
// // user.life="heaven";
// // alert(user.life);
// // alert(source_1.life);
// // alert(user.name);
// // alert(user.life);
// // alert(user.surname);


// //from above example come to know that the when making shallow copies 
// //so it remove the pre-existing data of the dest object and add new refrence value in the dest
// //so no diffrence between assign obj=obj and object.assign(dest,persmission, permission);


// let night={
//     artist:"harry styls",
//     artist_rapper:"zyan malik"
// }

// let clone=Object.assign({},user);

// alert(clone==night);