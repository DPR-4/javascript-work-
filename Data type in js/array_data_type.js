// // A primitive

// // Is a value of a primitive type.
// // There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.
// // An object

// // Is capable of storing multiple values as properties.
// // Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.

// // let name="Dhananjay";
// // // alert(name.toUpperCase());

// // let n=1.2345;
// // alert(n.toFixed(3));

// // alert("Lightning mecqueen")

// // alert( 9999999999999999 );

// // let a=["Dhananjay","falak","sath","mere","chal"];

// // for(let k of a){
// //     alert(k);
// // }

// // let ar=new Array("Dhananjay","name");
// // alert(ar[1]);

// // a[1]="stop";
// // for(let m of  a){
// //     alert(m);
// // }

// // for (let i=0;i<a.length;i++){
// //     alert(a[i]);
// // }

// let mix=["name",{ "Dhananjay": 'John' },function(){return "DDope shope"},true];

// // for(let k of mix){
// //     alert(k);
// // }
// // alert(mix[1]["Dhananjay"])

// // alert(mix[2]())
// // alert(3);

// // for(let k in  mix){
// //     alert(k);
// // }

// // alert(typeof mix[1]=="object")
// // alert(typeof mix[2]=="function")


// // for(let i=0;i<mix.length;i++){
// //     if(typeof mix[i]=="object"){
// //         alert(mix[i].Dhananjay)
// //     }
// //     else if(typeof mix[i]=="function"){
// //         alert(mix[i]());
// //     }
// //     else{
// //         alert(mix[i]);
// //     }
// // }
// // alert(a.at(-1))

// let a=["katrina","kareena","madhuri","optium","jaqualeen"];
// // alert(a.length);
// // alert(a.pop());
// // alert(a.length)
// // alert(a.lastIndexOf("madhuri"))
// a.push("chalo");
// // alert(a.at(-1))
// // alert(a.length)

// //shifi work to delete the first element from the array
// // alert(a.shift());


// // alert(a.length)

// // unshift this function is use to add element at the first index only
// // let see the example

// a.unshift("Dhananjay_bhau");
// // alert(a);

// let fruit=[];

// // fruit.unshift("rashkae","kamar");
// // fruit.push("this ","best");
// // alert(fruit)

// let k=fruit;
// // alert(k===fruit);
// // k.push("Dhanajay");
// // alert(fruit[0]);

// // it is just like the object where the it also refer to single object only

// let unwind=["Dhananjay",2,5,6,"Hair too long"];
// unwind.length=3;
// // alert(unwind)
// // unwind.length=5;
// // alert(unwind)
// // values will be truncate if we just change the size of the array and it gonna change whole thing 

// // let arr = [1, 2, 3];

// // alert( arr ); // 1,2,3
// // alert( String(arr) === '1,2,3' ); // true

// // alert([1]+2);
// // alert([3,5]+2)

// // Arrays do not have Symbol.toPrimitive, neither a viable valueOf, they implement only toString conversion, so here [] becomes an empty string, [1] becomes "1" and [1,2] becomes "1,2".

// // When the binary plus "+" operator adds something to a string, it converts it to a string as well, so the next step looks like this:

// let styles=["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// // alert(Math.floor(styles.length-1/2));
// styles[Math.floor(styles.length-1)/2]="classic";
// // alert(styles)

// // delete styles[1];
// // alert(styles)

// // slice and splice operation
// let s=["tim","sundar","cook","pichai","nanda"];
// // alert(s.length);
// // alert(s.slice(1,3));
// // alert(s.length);
// // let m=s.splice(1,4,"Dhananjay");
// // alert(m);
// // s.forEach(alert)

// // s.forEach((item,index,array)=>{
// //     alert(`${ite} of this ${index} and this is ${array}`)
// // })

// // so according to the position it works
// // like at first item and second it will take as index and third it will take array

// //searching in the array

