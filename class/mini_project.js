class passwordd{
    constructor(){
        this.pass="";
    }

    givestrong(n){
        //let passwords="";
        let charcters="abcdefghijklmnopqrstwxyz";
        let numbers="1234567890";
        let special_char="!@#$%^&*_+";
        //let i=0;
        for(let i=0;i<n;i++){
            let randomIndex = Math.floor(Math.random() * charcters.length);
            this.pass=this.pass+charcters[randomIndex];
            
            let randomIndex_num = Math.floor(Math.random() * numbers.length);
            this.pass=this.pass+numbers[randomIndex_num];
            
            let randomIndex_special = Math.floor(Math.random() * special_char.length);
            this.pass=this.pass+special_char[randomIndex_special];
            //i+=3;
            
        }
        //this.pass=this.pass.substr(1,n);
        return this.pass.substr(0,n);
    }
}

let Dhananjayed=new passwordd();
// alert(Dhananjay.givestong_password(5));
// console.log(Dhananjayed.givestong_password(5));
// let charcters="abcdefghijklmnopqrstwxyz"
// console.log(charcters[Math.floor(Math.random()*3)])
console.log(Dhananjayed.givestrong(3));

