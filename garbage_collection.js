// alert("way down we go");

// console.log("Dhananjay");

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });

// console.log(family);
// alert(family)
