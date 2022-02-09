function evenOdd(arr) {
    // Declare and Assign
    const evenArray = [];
    const oddArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i])
        } else {
            oddArray.push(arr[i])
        }
    }
    return [evenArray, oddArray]
}
// dynamic nature
console.log(evenOdd([1, 2, 3, 4, 5, 6]));

// reusable
console.log(evenOdd([1, 2, 3, 4, 5, 6, 45, 43, 22, 56, 7, 32, 4, 678, 889, 33]));


// Print Even & Odd

/*
    To check whether a number is even or odd,
    we can use 'Assignment Operators' and 'Comparison Operators'.
    n % 2 === 0 - Even number
    n % 2 === 1 - Odd number
*/

// with function to know whether it is even or odd
    // let n=20
for (let a = 0; a <= 15; a++) {
    if (a % 2 === 0) {
        // reassign
        console.log(`${a} is even`);
    } else {
        console.log(`${a} is odd`);
    }
}

function sujith(arr){
    const emptyArray=[]
    for(let i=0;i<8;i++){
        emptyArray.push(i)
    }
    return emptyArray
}
console.log(sujith());