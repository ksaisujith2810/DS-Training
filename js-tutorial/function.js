// ES5 function declaration
function addSum(a, b) {
    return (a + b)
}
console.log(addSum(2, 4));

// reusable
console.log(addSum(7, 4));

function addSumOne(c, d) {
    return (c + d)
}
// invoking the function
const result = addSumOne(4, 3);
console.log(result);

// function expression
const resultTwo = function (a, b) {
    return (a + b)
}
// invoke the function
console.log(resultTwo(7, 3));

// ES6 arrow function
// type 1
const resultThree = (a, b) => {
    return (a + b)
}
console.log(resultThree(8, 1));

// type 2
const resultFour = (a, b) => (a + b)
console.log(resultFour(8, 1));

