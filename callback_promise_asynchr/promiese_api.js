


let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("this is the first p1");
    },3000);
})
let p2=new Promise((resolve,reject)=>{
    resolve("this is the first p2");
    // reject(console.error("this is the rror"))
})
let p3=new Promise((resolve,reject)=>{
    resolve("this is the first p3");
})


// let me=promise.p1;

// me.then((result) => {
    
// }).catch((err) => {
    
// });


// let all_set=Promise.all([p1,p2,p3]);
// let all_set=Promise.any([p1,p2,p3]);
// let all_set=Promise.allSettled([p1,p2,p3]);
let all_set=Promise.race([p1,p2,p3]);

// promise.all(all_set).then((result) => {
//     result.array.forEach(element => {
//         console.log(element)
//     });
    
// }).catch((err) => {
    
// });

all_set.then((value)=>{
    console.log(value);
})

