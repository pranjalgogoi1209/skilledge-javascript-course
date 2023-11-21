// # NORMAL FUNCTION
console.log('----'.repeat(3), 'NORMAL FUNCTION', '----'.repeat(3));

/* function nepal(){
    console.log('KRISHNA');
    console.log('CHOTA DON');
    console.log('DUSRA KRISHNA');
    console.log('DEV KRISHNA');
    console.log('DAJU');
}
function assam(){
    console.log('PRANJAL');
    console.log('MINTU');
    console.log('BASET');
    console.log('HELLER');
    console.log('PARAMANANDA');
}

let a = 8;
let b = 6;

if(a<b){
    nepal();
}else{
    assam();
} */

function funcName() {
    console.log('Pranjal');
    console.log('Goutam');
    console.log('Krishna');
}

funcName();
funcName();
funcName();


// # FUNCTION WITH ARGUMENT
console.log('----'.repeat(3), 'FUNCTION WITH ARGUMENT', '----'.repeat(3));

// function defination = parameter
// function calling = argument
function func(parameter){   // function defining with parameter
    console.log('Hello', parameter);
}
// func(argument);
let argument = 'IT IS ARGUMENT';    
func(argument); // function calling with argument
func('Pranjal');
func('Goutam');
func(100);
func(true);


// # FUNCTION WITH MULTIPLE ARGUMENTS 
console.log('----'.repeat(3), 'FUNCTION WITH MULTIPLE ARGUMENTS', '----'.repeat(3));

function funcMultiArg(a, b, c, d){
    console.log('Sum is : ', a + b + c + d);
}
funcMultiArg(34, 56, 23, 78);


// # FUNCTION WITH RETURN KEYWORD
console.log('----'.repeat(3), 'FUNCTION WITH RETURN KEYWORD', '----'.repeat(3));

function sum(e, f, g, h) {
    let result = e + f + g + h;
    console.log(result);
    return result;
}

let answer = sum(44, 76, 23, 78);
console.log(`The returned sum is ${answer}`);
console.log(`The returned sum is ${sum(44, 76, 23, 78)}`);

/* 
221
The returned sum is 221
221
The returned sum is 221
*/


// # PROBLEM 1 :
/* 
    Define a function called square
    parameter : number
    Return the square of the number
 */
console.log('----'.repeat(3), 'PROBLEM 1', '----'.repeat(3));

function square(number){
    // let sq = number*number;
    // let sq = number**2;
    // let sq = Math.pow(number, 2);
    return Math.pow(number, 2);
}

console.log('Square is :', square(34));


// # PROBLEM 2
/* 
    Function name --> isPurple
    parameter --> color
    return true if the color is purple
    return false if the color is not purple
 */
console.log('----'.repeat(3), 'PROBLEM 2', '----'.repeat(3));

/* function isPurple(color){
    if(color === 'purple'){
        return true;
    }else{
        return false;
    }
}

console.log(isPurple('red')); */

// let's simplify it

/* function isPurple(color){
    if(color === 'purple'){
        return true;
    }
    return false;
}

console.log(isPurple('red')); */

// let's more simplify it

function isPurple(color){
    return color === 'purple';
}

console.log(isPurple('purple'));


// # PROBLEM 3
// Define a function to check an element 'purple' is contains in a color array or not
console.log('----'.repeat(3), 'PROBLEM 3', '----'.repeat(3));

/* let colors = ['red', 'blue', 'orange', 'yellow', 'purple'];

function containsPurple(){
    for(let i of colors){
        if(i === 'purple'){
            return 'purple is contains in colors';
        }
    }
    return 'purple is not contains in colors';
}
console.log(containsPurple()); */

// let's simplify it

/* let colors = ['red', 'blue', 'orange', 'yellow', 'purple'];

function containsPurple(){
    if(colors.indexOf('purple') === -1){
        return 'purple is not contains in colors';
    }else{
        return 'purple is contains in colors';
    }
}

console.log(containsPurple()); */

// let's simplify it

/* let colors = ['red', 'blue', 'orange', 'yellow', 'purple'];

function containsPurple(){
    if(colors.indexOf('purple') === -1){
        return 'purple is not contains in colors';
    }
    return 'purple is contains in colors';
}

console.log(containsPurple()); */

// let's simplify it

/* let colors = ['red', 'blue', 'orange', 'yellow', 'purple'];

function containsPurple(){
    if(colors.indexOf('purple') === -1){
        return 'purple is not contains in colors';
    }
    return 'purple is contains in colors';
}

console.log(containsPurple()); */

// Anything is possible

/* let colors = ['red', 'blue', 'orange', 'yellow', 'purple'];

function containsPurple(){
    return colors.indexOf('purple') === -1;
}
if(containsPurple()){
    console.log('purple is not contains in colors');
}else{
    console.log('purple is contains in colors');
}
 */

// More simplify it

/* function containsPurple(array){
    if(array.indexOf('purple')!==-1){
        return true;
    }
    return false;
} */

// let's simplify it

/* function containsPurple(array){
    return array.indexOf('purple')!==-1;
} */

// let's simplify it with a method called .includes();

let colors = ['red', 'blue', 'orange', 'yellow', 'purple'];
function containsPurple(){
    return colors.includes('purple');
}
console.log(containsPurple());


// # PROBLEM 4
/* Write a isValidPassword function : --

It accepts 2 parameters: password and username
Password must:
- be at least 8 characters
- cannot contain spaces
- cannot contain the username
If all requirements are met, return true.
Otherwise: false

Examples
isValidPassword('89Fjj1nms', 'dogLuvr');  //true
isValidPassword('dogLuvr123!', 'dogLuvr') //false
isValidPassword('hello1', 'dogLuvr') //false */
console.log('----'.repeat(3), 'PROBLEM 4', '----'.repeat(3));

/* function isValidPassword(password, username){
    if(password.length>=8 && password.indexOf(' ')===-1 && password.indexOf(username)===-1){
        return true;
    }
    return false
}
let checkPassword=isValidPassword('frontend master', 'pranjalgogoi');
console.log(checkPassword); */

// let's simplify it

let username = 'pranjal';
let password = 'gogoi1234??';

function isValidPassword(password, username){
    return(password.length >= 8 && password.indexOf(' ') === -1 && password.indexOf(username) === -1);
}

console.log(isValidPassword(password, username));


// # ASSIGNMENT
/* 
Write a function to find the average value in an array of numbers

array[0, 50] // 25
array[75, 76, 80, 95, 100] // 85.2

Function name -> average
Parameter -> array
*/
console.log('----'.repeat(3), 'ASSIGNMENT', '----'.repeat(3));

let numbers = [75, 76, 80, 95, 100];
let sum2 = null;
function average(array){
    for(let i of array){
        sum2 += i;
        // sum2 = sum2 + i;
    }    
    let avg = sum2 / array.length;
    return avg;
}
console.log(average(numbers));


// # test
console.log('----'.repeat(3), 'test', '----'.repeat(3));

let name = 'Pranjal';

function one(){
    function two(){
        name = 'Krishna';
        return name;
    }
    return two();
}

console.log(one());