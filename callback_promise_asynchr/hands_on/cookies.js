//let's learn the genrator

//

function* me(){
    yield 1;
    yield 2;
    // yield 63;
    return 3;
}


// let see=me();

// let one = see.next();

// alert(JSON.stringify(one));

// let two = see.next();

// alert(JSON.stringify(two));

// let three = see.next();

// alert(JSON.stringify(three));


let list=[...me()];

alert(list)