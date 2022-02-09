// 1
const firstName = 'sai';
const last_name = 'sujith';

let address = 'main street';
        address = 'first street';
        console.log(firstName,last_name,address);

// 2
const street = 'azad nagar';
const country = 'india';

const fullMailingAddress = street + ' ' + country;
console.log(fullMailingAddress);

// 3
const score1 = 60;
const score2 = 61;
const score3 = 62;

const totalScore = score1+score2+score3;
const average = totalScore/3;

console.log(totalScore);
console.log(average);


const plates = 20;
const people = 7;
let remainingPlates = 20 % 7;
remainingPlates++;
const message = 'There are ' +" "+ remainingPlates +' '+' plates available';
console.log(message);

// 4
const fruits = ['banana','apple','grapes','orange','mango',61]
const firstFruit = fruits[0];
fruits[5] = 'kiwi';

console.log(firstFruit);
console.log(fruits);

// 5
function calculateTotal(subTotal, tax) {
    return subTotal + tax;
}
const order1 = calculateTotal(14, 26);
const order2 = calculateTotal(27, 25);
const order3 = calculateTotal(59, 61);

console.log(order1, order2, order3);