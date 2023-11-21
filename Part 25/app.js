// FILTER ARRAY METHOD
console.log('...'.repeat(3), 'FILTER ARRAY METHOD', '...'.repeat(3));

let score = [15, 5, 34, 67, 78, 82, 96, 27, 48, 56];

// Filter return true or false only and make a new array

let newScore = score.filter((s) => {
    return s>20;
});
console.log(newScore);

let users = [
    {name : 'pranjal', premium : true},
    {name : 'krishna', premium : true},
    {name : 'rahul', premium : false},
    {name : 'ishan', premium : false}
];

let newUsers = users.filter(u => {
    return u.premium;
});

console.log(newUsers);

// CONVERT ARRAY TO STRING
console.log('...'.repeat(3), 'CONVERT TO STRING', '...'.repeat(3));

let arr = [1,3,2,4,5,6,7,8]
let str = arr.toString();
console.log(str);

let str1 = arr[1].toString();
console.log(str1);

// MAKE A NEW ARRAY USING FILTER METHOD, ONLY FILTER THOSE NUMBERS WHICH ARE DOUBLE DIGIT
console.log('...'.repeat(1), 'MAKE A NEW ARRAY USING FILTER METHOD, ONLY FILTER THOSE NUMBERS WHICH ARE DOUBLE DIGIT', '...'.repeat(1));

let numbers = [4,34,56,78,100,500,2345,12345];
let newNumbers = numbers.filter(n => {
    return n.toString().length == 2;
});

console.log(newNumbers);

// MAP METHOD
console.log('...'.repeat(3), 'MAP METHOD', '...'.repeat(3));

// Map return a new array

let prices = [1,2,34,56]
let sellingPrices = prices.map(p => {
    return p**2;
});
console.log(sellingPrices);

// REDUCE METHOD
console.log('...'.repeat(3), 'REDUCE METHOD', '...'.repeat(3));

// Reduce has two perameter, One is function and another one is value of accumulator.
// Default value of accumulator is 0, But in the case of multiplication the value is 1.
// Function has two perameter, One is accumulator and another one is current value.
// Whenever we return, it goes to accumulator and replace the the value.
// Reduce method reduce the array into an one value.

// eg:1
let a = [1,2,3,4,5,6,7,8,9];
let sum = a.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log(sum);

// eg:2
let game = [
    {name : 'pranjal', score : 52},
    {name : 'krishna', score : 56},
    {name : 'pranjal', score : 23},
    {name : 'krishna', score : 34}
];

let pranjalScore = game.reduce((acc, curr) => {
    if(curr.name == 'pranjal'){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(pranjalScore);