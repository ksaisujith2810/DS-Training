// number is a primitive datatype in js

// 1)
// Declared & Assigned
const productPrice = 12.3;
console.log(Math.round(productPrice));
console.log(typeof productPrice);

// Declared & Assigned
const productPriceOne = 24.7;
console.log(Math.round(productPriceOne));

// 2)
// Declared & Assigned
const productPriceTwo = 29.7;
console.log(Math.ceil(productPriceTwo));

// Declared & Assigned
const productPriceThree = 15.2;
console.log(Math.ceil(productPriceThree));

// 3)
// Declared & Assigned
const productPriceFour = 11.2;
console.log(Math.floor(productPriceFour));

// Declared & Assigned
const productPriceFive = 15.7;
console.log(Math.floor(productPriceFive));

// 4)
// absolute method(abs convert -ve to +ve)

// Declared & Assigned
const productPriceSix = -15.2;
console.log(Math.abs(productPriceSix));

// 5) (powers)
console.log(Math.pow(2, 5));

// 6)(square roots)
console.log(Math.sqrt(64));

// 7)(max and min method)
console.log(Math.max(12, 35, 88, 66, 29, 10));
console.log(Math.min(12, 35, 88, 66, 29, 10));

// string concatenation
// Declared & Assigned
const rollNum = 121710302061;
const myName = "SaiSujith";
const result = rollNum + myName;
console.log(result);


const year = 2022;
const myNameTwo = "Hello Spring";
const outPut =  myNameTwo + year;
console.log(outPut);

// ES5 feature
const myCity = 'kodad';
const myNameOne = 'sujith';
const myCollege = 'Gitam';

// my name is sujith i am from kodad and i completed my college in Gitam
const mySentence = 'my name is' + ' ' + myNameOne + ' ' + 'i am from' + ' ' + myCity + ' ' + 'and i completed my college in' + ' ' + myCollege;
console.log(mySentence);

// ES6 feature
// i am working in digisprint company 
const myCompany = 'digisprint';
const mySentenceOne = `i am working in ${myCompany} company`;
console.log(mySentenceOne);