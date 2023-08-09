let user={
    get full(){
        return this.name;
    },
    age:25,
    set age(newage){
        if(typeof(newage)=="number" && newage>0){
            this.age=newage;
        }
        else{
            alert("put valid data");
        }
    }
}

// to use getter and setter in the class we have to use _variable name like _name

// user.name="Dhananjay"
// // alert(user.name);
// // user.age=-2;
// // alert(user.age);
// alert(user.full)


class clock{
    
    time(){
        //let dated=new Date()
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const seconds = currentTime.getSeconds().toString().padStart(2, '0');
        alert(seconds)
    }
}

// let clo=new clock();
// clo.time()

// class animals{
//     constructor(name){
//         this.name=name;
//     }


    
// }

// let me=new animals("cat");
// alert(me.name)