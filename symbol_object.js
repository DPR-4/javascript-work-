// let a=Symbol("This");
// let b=Symbol("This");

// alert(a==b);

// this symbol is use to create unique primitive or new primitive one 

myobj={};
let id=Symbol("id");
// let k1=Symbol();
myobj[id]="Dhanajay";
// let id=Symbol("id");
myobj[id]=Symbol("Shersha");
myobj["4"]="Pania";
// alert(myobj[k]);
 console.log(myobj)

for(let key in myobj){
    console.log(key,myobj[key]);
}


// symbol conversionn or object conersion is still remaing please recover as soon as posisble