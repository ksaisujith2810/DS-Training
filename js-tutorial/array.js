// arrays are ordered,integer indexed and collection of values.
    
// Declared & Assigned
const stateNames = ['telangana','andhrapradesh','goa','maharashtra','rajasthan'];
console.log(stateNames);

// 1) push method-add new element at the end of array
stateNames.push('tamilnadu');
console.log(stateNames);

// 2) unshift method-add new element at the beginning of array
stateNames.unshift('kerala');
console.log(stateNames);

// 3) pop method-remove last element from the array
stateNames.pop();
console.log(stateNames);

// 4)shift method-remove elements at the beginning of the array
stateNames.shift();
console.log(stateNames);

// 5)length property
console.log(stateNames.length);

// 6)sort method
console.log(stateNames.sort());

// 7)reverse method
console.log(stateNames.reverse());

// 8)indexOf method
console.log(stateNames.indexOf('goa'));

//  Declared & Assigned
const fruitNames = ['apple','banana','orange','mango','apple'];
console.log(fruitNames.lastIndexOf('apple'));

// includes
console.log(fruitNames.includes('mango'));

// combining of two arrays
const mobileCompany = ['samsung','oneplus','apple','vivo','oppo'];
const tvCompany = ['sansi','lg','sony','mi']
console.log(mobileCompany.concat(tvCompany));

// splice method- we can delete or add elements at specified position
// splice method takes three parameters-index position,delete count,add new elements
const result = mobileCompany.splice(0,3);
console.log(result);
console.log(mobileCompany);

const resultOne = mobileCompany.splice(1,0,'xiomi');
console.log(resultOne);
console.log(mobileCompany);

const friends = ['sujith','chitti','vikas','yashwanth',61,null,undefined];
console.log(friends.length.indexOf());