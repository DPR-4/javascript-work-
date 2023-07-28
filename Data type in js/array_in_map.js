let l=["Dhanajnay","calmdown","baby this"].map(i=>i.length)
// alert(l);
l.sort();
// alert(l);
let map=new Map;
map.set(1,"Dhananjay");
map.set('1',"this is what");

// alert(map.get("1"));
// alert(map.has("Dhananjay"));
//this has only check about key only not about the value
// alert(map.size)

// for(let i of map.keys()){
//     alert(i);
// }

// for(let m of map.values()){
//     alert(m);
// }

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);

//this way we also we can define the map

// for(let k of recipeMap){
//     alert(k);
// }

// recipeMap.forEach((value ,key ,map)=>{
//     alert(`${value} this is ${key} and this is ${map}`);
// })

// let obj={
//     D:"this is",
//     l:"desi kalakar"
// }

// let mapi=new Map(Object.entries(obj));

// alert(mapi.get("l"))
// let prices = Object.fromEntries([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4]
//   ]);
  
//   // now prices = { banana: 1, orange: 2, meat: 4 }
  

//   alert(prices.orange); // 2


