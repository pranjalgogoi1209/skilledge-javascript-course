// REDUCE METHOD
console.log('----'.repeat(3), 'REDUCE METHOD', '----'.repeat(3));

let numbers = [6, 23, 7, 45, 12];
let sum = numbers.reduce(function (accumulator, currentvalue){
    return accumulator + currentvalue;
});
console.log('sum is : ',sum);

// PROBLEM 1
// find maximum value in the array
console.log('----'.repeat(3), 'PROBLEM 1', '----'.repeat(3));

let nums = [6, 23, 7, 45, 12];
// console.log(Math.max(6, 23, 7, 45, 12));
let maxValue=nums.reduce((max,val)=>{
    if(max>val) return max;
    return val;
});
console.log(maxValue);
/* 
max = 6, val = 23, return = 23 ;
max = 23, val = 7, return = 23 ;
max = 23, val = 45, return = 45 ;
max = 45, val = 12, return = 45 ;
output = 45
*/

// DEFAULT PERAMETER
console.log('----'.repeat(3), 'DEFAULT PARAMETER', '----'.repeat(3));

let addition = (x, y=1) => {
    // y = y!==undefined ? y : 1;   //old way of default parameter
    return x+y;
};
console.log('Not using default parameter :',addition(10,10));
console.log('Using default parameter :',addition(10));

// SPREAD OPERATOR
console.log('----'.repeat(3), 'SPREAD OPERATOR', '----'.repeat(3));

let a1 = [1, 2, 3, 4];
let a2 = [0, ...a1, 5, 6, 7];
console.log(a1);
console.log(a2);

// Math.max() METHOD USING SPREAD OPERATOR
console.log('----'.repeat(1), 'Math.max() METHOD USING SPREAD OPERATOR', '----'.repeat(1));

let a3 = [1, 2, 3, 4];
maxOfa1 = Math.max(...a3);
console.log(maxOfa1);

// SPREAD OPERATOR IN FUNCTION
console.log('----'.repeat(1), 'SPREAD OPERATOR IN FUNCTION', '----'.repeat(1));

let a4 = [1, 2, 3, 4];
let sumOfTotal = (a, b, c ,d) => {
    console.log(a+b+c+d);
}
sumOfTotal(a4[0], a4[1], a4[2], a4[3]); //old way
sumOfTotal(...a1); //new way, using spread operator

// SPREAD OPERATOR IN OBJECT
console.log('----'.repeat(1), 'SPREAD OPERATOR IN OBJECT', '----'.repeat(1));

let parent = {
    name : 'Bakul Gogoi',
    age : 45
};
let child = {
    ...parent,
    nameOfChild : 'Pranjal Gogoi'
};
console.log(parent);
console.log(child);

// REST OPERATOR 
console.log('----'.repeat(3), 'REST OPERATOR', '----'.repeat(3));

let restOperator = (a, b, ...rest) => {
    console.log(a, b);
    console.log(a, b, ...rest);
}
restOperator(1,2,3,4,5,6,7,8,9);

// DESTRUCTURING
console.log('----'.repeat(3), 'DESTRUCTURING', '----'.repeat(3));

let obj = {
    name : 'Pranjal Gogoi',
    age : 23,
    skills : ['Html', 'Css', 'Javascript', 'Python'],
};
// let name = obj.name;
// let age = obj.age;
// let skills = obj.skills;

/* let {name, age, skills} = obj;
console.log(name, age, skills); */

// DEFAULT VALUE IN DESTRUCTURING : if key:value not present in the object
console.log('----'.repeat(3), 'DEFAULT VALUE IN DESTRUCTURING', '----'.repeat(3));
let {name, age, skills, rating=5} = obj;
console.log(name, age, rating);

// RENAME THE OBJECT KEYS IN DESTRUCTURING
console.log('----'.repeat(3), 'RENAME THE OBJECT KEYS', '----'.repeat(3));
let {name : userName, age : newAge, skills : newSkills} = obj;
console.log(userName, newAge, newSkills);

// DEFAULT VALUE AND RENAME OBJECT KEYS IN DESTRUCTURING
let {nickName : userNickName = 'Krishna Yadav'} = obj;
console.log(userNickName);