// String is nothing but group of characters.
//  string is a primitive datatype 

// 1)
// Declared & Assigned
const myName = "sujith";
console.log(myName.length);

// 2)
// Declared & Assigned
const myNameOne = "sujith";
console.log(myNameOne.toUpperCase());

// 3)
// Declared & Assigned
const myNameTwo = "SUJITH";
console.log(myNameTwo.toLowerCase());

/* 
    s    a     i     s     u     j      i      t     h
    0    1     2     3     4     5      6      7     8
*/

// 4)
// Declared & Assigned
const myNameThree = "saisujith";
console.log(myNameThree.indexOf('j'));
console.log(myNameThree.indexOf('i'));

// 5)
// Declared & Assigned
const myNameFour = "saisujith";
console.log(myNameFour.lastIndexOf('i'));

// 6)
// Declared & Assigned 
const myNameFive = 'sujith';
console.log(myNameFive.includes('i'));
console.log(myNameFive.includes('g'));

// 7)slice method
// Declared & Assigned
const myNameSix = 'sujith';
console.log(myNameSix.slice(0, 3));

// 8) split method
// Declared & Assigned
console.log(myNameSix.split(''));
console.log(myNameSix.split(' '));