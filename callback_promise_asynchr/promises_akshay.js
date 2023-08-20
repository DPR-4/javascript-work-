// Creating a Promise, Chaining & Error Handling | Ep 03 Season 02 Namaste JavaScript


//this is promise chain where we goona see the promise chaining and errror handling 
//
let cart=["shoes","banana","watermellon","chanba"];
let promise=createorder(cart)
console.log(promise)
promise.then((result) => {
    console.log(result);
    return result;
})
.catch(()=>{
    console.log("sorry this is not working")
})
.then((orderid)=>{
    return purchaseproduct(orderid);
})

.then((purchaseproduct)=>{
    console.log(purchaseproduct)
})



function createorder(cart){
    let pr=new Promise (function(resolve,reject){
        if(!validate()){
            let err="some error found mana";
            reject(err)
        }

        let orderid=2;
        if(orderid){
            setInterval(()=>{resolve(orderid)},5000);
            
        }
    })

    return pr;
    
}
function validate(){
    // return false;
    return true;
}

function purchaseproduct(orderid){
    return cart[orderid];
}