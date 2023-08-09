class animal{
    constructor(name){
        this.speed=0;
        this.name=name;
        //this.total=name;
    }

    color(color,speed){
        this.speed=10;
        alert(`the colour of the ${this.name} is ${color} and it's speed is ${speed}`);
    }

    
}
class Rabbit extends animal{
    constructor(name){
        super(name);
        this.total=name;
    }
    hide(){
        alert(`this can only be acessed by ${this.total}`)
    }
}


let tortois=new animal("tortois");
// tortois.color("black",5);

let rabit=new Rabbit("rabit");
// rabit.color("white",50);
// rabit.hide();

class employee{
    constructor(name){
        this.name=name;
    }
    login(){
        alert(`this is the login time of the ${this.name}`);
    }

    logout(){
        alert(`employee just logout`);
    }

    requestleves(number){
        alert(`you can get leaves ${number}`)
    }
}

class newjoinee extends employee{
    constructor(name){
        super(name)
        this.name;
    }
    hide(){
        alert(`our employee  ${this.name} just hide`)
    }

    requestleves(number){
        super.requestleves(8)
        this.hide()
        alert("so your new you will get some benifits");
    }
}

let Dhananjay=new newjoinee("Dhananjay");
// Dhananjay.login();
// Dhananjay.logout();
// Dhananjay.requestleves(5);


//static method is really greate thing

// let's see it 

class oldi{
    constructor(name){
        this.name=name;
    }

    proclaim(){
        alert("this is announcing that we are going through "+oldi.capitilize(this.name));
    }


    static capitilize(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
        // return name.charAt(0).toUpperCase() + name.substr(1,name.length);
    }
}

class golidi extends oldi{
    constructor(name){
        super(name);
        this.name=name;
    }

    proclaim(){
        console.log(oldi.capitilize(this.name));
    };
}
//
let o=new golidi("dhananjay");
o.proclaim();
// alert(new golidi("dhananjay").capitilize(Dhananjay))

//so this method can only use by the define class only and this can't be acessed by the other 
//
