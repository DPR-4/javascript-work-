class railway{
     submit(){
        alert(`${this.name} your form submitted succefully for train number ${this.rail}`);
     }

     cancel(){
        alert(`${this.name} your form cancel#### succefully for train number ${this.rail}`);
     }

     fill(name,railwayno){
        this.name=name;
        this.rail=railwayno;
     }
}



// let Dhananjay=new railway();
// let Rishiketti=new railway();

// Dhananjay.fill("Dhananjay",420);
// Rishiketti.fill("Rishiketti",1420);

// // Dhananjay.submit();
// // Rishiketti.submit();
// Dhananjay.submit();
// Rishiketti.submit();
// Dhananjay.cancel();
// Rishiketti.cancel();

//same class we can write without writing the class anymore let's see how we can do this

// function user(name){
//     this.name=name;
// }


// user.prototype.sayhi=function(){
//     alert(`hello ${this.name}`);
// }

// let Dha=new user("Dhananjay");
// Dha.sayhi();



