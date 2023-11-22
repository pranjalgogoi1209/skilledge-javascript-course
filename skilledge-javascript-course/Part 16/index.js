// SHORTHAND PROPERTY
console.log('----'.repeat(3), 'SHORTHAND PROPERTY', '----'.repeat(3));

let name = 'Pranjal Gogoi';
let age = 22;

let obj = {
    name,
    // name : name,
    age,
    // age : age,
}
console.log(obj);

// SPREAD METHOD
console.log('----'.repeat(3), 'SPREAD METHOD', '----'.repeat(3));

let arr = [10, 2, 9, 4, 55, 66, 23, 34];
let max = Math.max(...arr);
let min = Math.min(...arr);
console.log(max, min);

// REDUCE ARRAY CALLBACK METHOD
console.log('----'.repeat(3), 'REDUCE ARRAY CALLBACK METHOD', '----'.repeat(3));

let sum = arr.reduce((accumulator, currentvalue) => accumulator + currentvalue);
let avg = sum / arr.length;
console.log(avg);

let stats = {
    max,
    min,
    sum,
    avg
};
console.log(stats);

// COMPUTED PROPERTIES
console.log('----'.repeat(3), 'COMPUTED PROPERTY', '----'.repeat(3));

let userKey = 'Pranjal Gogoi';
let user = {
    [userKey] : 'Employee',
    userKey : 'Employee',
};
console.log(user);

// METHODS
console.log('----'.repeat(3), 'MOTHOD', '----'.repeat(3));
let objMethod = {
    sum : (array) => {
        let x = null;
        for (let i of array){
            x+=i;
        }
        return x;
    },
    
    multiply : function(x,y){
        return x*y;
    }
    // or
    /* multiply(x,y){
        return x*y;
    } */
}
let array1 = [1,2,3,4,5];
console.log('sum is :',objMethod.sum(array1));

let array2 = [11, 22, 44, 22, 65, 12, 6];
console.log('sum is :',objMethod.sum(array2));

console.log('multiplication is :', objMethod.multiply(10,5));