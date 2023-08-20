

let data=fetch('https://api.github.com/users/DPR-4');
console.log(data);
data.then((result) => {
    alert(result);
}).catch((err) => {
    
});