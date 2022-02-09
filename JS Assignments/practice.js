// 02-02-2022

// 1)Create a function that takes two numbers as arguments and return their sum.

// declare and assign
function addNum(a, b) {
    return (a + b)
}
// invokeing the function
console.log(addNum(4, 7));

// reusable
console.log(addNum(-11, -17));
console.log(addNum(87, 67));

// 2)Write a function that takes an integer minutes and converts it to seconds

// declare and assign
function minSec(a) {
    return a * 60
}

// invoking the function
console.log(minSec(7));

// reusable
console.log(minSec(10));
console.log(minSec(25));

// 3)Create a function that takes a number as an argument, increments the number by +1 and returns the result.

// declare and assign
function increment(a) {
    return (a + 1)
}
// invoking the function
console.log(increment(4));

// reusable
console.log(increment(6));
console.log(increment(-1));

// 4)Write a function that converts hours into seconds.
function hrSec(a) {
    return a * 60 * 60
}
// invoking the function
console.log(hrSec(1));

// reusable
console.log(hrSec(8));
console.log(hrSec(12));

// 5)Return the First Element in an Array

// declare and assign
function firstValue(arr) {
    return arr[0]
}
// invoking the function
console.log(firstValue([1, 3, 5, 7, 9]));

// reusable
console.log(firstValue([61, 60, 64, 62, 59]));
console.log(firstValue([-22, 44, 55, 66, 77]));

// 6)Is the String Empty?

// declare and assign
function isEmpty(a) {
    return (a.length === 0);
}
// invoking the function
console.log(isEmpty(""));

// reusable
console.log(isEmpty(" "));
console.log(isEmpty("SYVY "));

// 7)Less Than 100?

// declare and assign
function lessThan100(a) {
    return (a < 100)
}
// invoking the function
console.log(lessThan100(47));

// reuable
console.log(lessThan100(120));
console.log(lessThan100(-76));

// 8)Using the "&&" Operator
function and(a, b) {
    return a && b;
}

console.log(and(true, false));

// reusable
console.log(and(true, true));
console.log(and(false, true));
console.log(and(false, false));

// 9)Area of a Triangle
function area(b, h) {
    return (b * h) / 2;
}

console.log(area(6, 2));

// reusable
console.log(area(4, 9));
console.log(area(10, 10));

// 10) Return Something to Me!
function giveMeSomething(str) {
    // return 'something' + ' ' + str;
    return `something ${str}`;
}

console.log(giveMeSomething("i need to eat"));

// reusable
console.log(giveMeSomething("i need to perform"));
console.log(giveMeSomething("new"));

// 11)Equality Check
function checkEquality(a, b) {
    return a === b;
}

console.log(checkEquality(1, true));

// reusable
console.log(checkEquality(0, "0"));
console.log(checkEquality(6, 6));

// 12)The Farm Problem
function animals(a, b, c) {
    return (a * 2) + (b * 4) + (c * 4);
}

console.log(animals(2, 3, 5));

// reusability
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));