//we gonna learned sets too in this series 
//set have no duplicacy
let a=[1,2,3,4,4];
let obj=new Set(a);
// console.log(a);
// console.log(obj);
// obj.add("thisi")
// obj.delete("thisi");
let obj1={
    name:"Dhananjay"
}
// obj.add(obj1);
// console.log(obj);

// console.log(obj.has(4)
// for(let k of obj){
//     console.log(k)
// }
// let i=0;
// obj.forEach((e)=>
//     // obj.add("thisi"),
//     console.log(e)
    
// )



//let's learn the map
//it's basically the key value pair data structure 

let maps=new Map([['a',"Dhananjay"],['v',"viju"],['n','nashik']]);
// console.log(maps)
// maps.set('a2',"illuminaties");
// maps.delete("a2");
// console.log(maps.get("a2"))
// console.log(maps);

// for(let [key,value] of maps){
//     console.log(`keys ${key} and this is the value ${value}`);
// }

// maps.forEach((value,key)=>
// console.log(`keys ${key} and ${value}`)
// )


// weakset this weakset just like only store the objects only
//this weakset only store the object only can't store value
//it can't use for loop or ittreate
// let ws=new WeakSet();
// // ws.add(1);
// let o={'a':'anjali'};
// ws.add(o)
// // ws.delete(o);
// console.log(ws);


//weakmap this is weakmap

let wm=new WeakMap();

let o1={'a':'Dhananjay'};
let o2={};

wm.set(o1,"private key");
// console.log(wm)
// console.log(wm.has(o2))

// so we have see the weakmap and weakset 

// so we gonna learned the entries 
// values and the keys

let user={
    name:"john",
    age:30
}

// for(let values of Object.entries(user)){
//     console.log(values);
// }


let s={
    john:20,
    mansi:30,
    kailas:40
}

let sumsalaries=function(s){
    let ans=0;
    for(let values of Object.values(s)){
        ans+=values;
    }
    return ans;
}


// alert(sumsalaries(s));

// let user1 = {
//     name: 'John',
//     age: 30
// };

// let count=(u)=>{
//     return Object.keys(u).length

// }
  

// alert( count(user) )


