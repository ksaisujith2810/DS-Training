// object are non primitive data types in js

// Declare & Assign
const myDetails = {
    myName: 'sujith',
    myCity: 'kodad',
    myState: 'telangana'
}
console.log(myDetails);

// updating property    
myDetails['myState'] = 'ts';
myDetails.myCity='kdd';
console.log(myDetails);

// adding new property
myDetails['myCountry'] = 'india';
console.log(myDetails);

// deleting new property
delete myDetails['myCountry']
console.log(myDetails);

const result = Object.keys(myDetails).length;
console.log(result);

// list all object properties
const propertyResult = Object.keys(myDetails);
console.log(propertyResult);

// list all object values 
const valueResult = Object.values(myDetails);
console.log(valueResult);

// to check particular property available or not
const propertyExist = Object.keys(myDetails).includes('myState');
console.log(propertyExist);

const propertyExistOne = Object.keys(myDetails).includes('myDistrict');
console.log(propertyExistOne);

// to check particular value present or not
const propertyExistTwo = Object.values(myDetails).includes('sujith');
console.log(propertyExistTwo);

// 
const emptyObject = {};
console.log(emptyObject);
const laptopDetails = {
    productName: 'dell',
    productRam:  '16gb'
}
// 2 parameters - target object(empty object),source object
const resultObject = Object.assign(emptyObject,laptopDetails);
console.log(emptyObject);

const resultedArray = Object.entries(laptopDetails);
console.log(resultedArray);

const arrayOfObjects =  {
    fruit: 'apple',
    price: 50,
    color: 'red'
};
// for in loop are used only  in objects
for(const key in arrayOfObjects){
    console.log(key);
    console.log(arrayOfObjects[key]);
}


