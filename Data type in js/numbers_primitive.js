//this is primitive type where we gonna learn about the numbers
// let n=100_000_000
// alert(n);

//after e 5 
//it shows how many zero should be there 
//like we can see 1e5-100000
// alert(7.1e5)

//like wise we have another kind of operator 
// alert(1e-3);
//0.001

//hexa decimal number also there 
//alert( 0xff ); // 255
// alert( 0xFF ); // 255 
let n=255;
// alert(n.toString(2))
//base value is like from 2 to 36

// alert(n.toString(16));

// Common use cases for this are:

// base=16 is used for hex colors, character encodings etc, digits can be 0..9 or A..F.

// base=2 is mostly for debugging bitwise operations, digits can be 0 or 1.

// base=36 is the maximum, digits can be 0..9 or A..Z. The whole latin alphabet is used to represent a number. A funny, but useful case for 36 is when we need to turn a long numeric identifier into something shorter, for example to make a short url. Can simply represent it in the numeral system with base 36:

// Rounding
// One of the most used operations when working with numbers is rounding.

// There are several built-in functions for rounding:

// Math.floor
// Rounds down: 3.1 becomes 3, and -1.1 becomes -2.
// Math.ceil
// Rounds up: 3.1 becomes 4, and -1.1 becomes -1.
// Math.round
// Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.
// Math.trunc (not supported by Internet Explorer)
// Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.