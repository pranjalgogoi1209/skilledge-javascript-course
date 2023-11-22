// TRUTHY & FALSY VALUE
let userName = ""; //falsy
let a = null; //falsy
let name = "pranjal"; //truthy
let num = 0; //falsy
let num2 = -100; //truthy
let isTruthy = false; //falsy
let isKrishna = true; //truthy
let isAge; //undefined : falsy
let party = NaN; //falsy

if (party) {
  console.log("truthy value----");
} else {
  console.log("falsy value----");
}

if (userName) {
  console.log("if block will run");
} else if (a) {
  console.log("else if block will run");
} else if (name) {
  console.log("My name is " + name);
}

// LOGICAL OPERATORS
// AND OPERATOR => && : Both should be true
if (true && true) {
  console.log("Eg1 is Working----");
}
if (true && false) {
  console.log("Eg2 is Working----");
}
if (true && false && true && true && true && false) {
  console.log("Eg3 is Working----");
}

// OR OPERATOR => || : One should be true
if (true || true) {
  console.log("Eg4 is Working----");
}
if (false || true) {
  console.log("Eg5 is Working----");
}
if (false || false) {
  console.log("Eg6 is Working----");
}
if (false || false || true || false || true) {
  console.log("Eg7 is Working----");
}

// NOT OPERATOR => ! : It will reverse falsy to truthy , and truthy to falsy.
if (!true) {
  console.log("Eg8 is Working----");
}
if (!false) {
  console.log("Eg9 is Working----");
}
if (!(true !== true)) {
  console.log("Eg10 is Working----");
}

// OPERATOR PRECENDENCE :
if ((!true && false) || true) {
  console.log("Eg11 is Working----");
}

// QUESTION USING AND OPERATOR
/* If password's length >= 6 and password has no space then print valid password
Else print Invalid password */

let password = "pranjal gogoi";
if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Valid Password");
} else {
  console.log("Invalid Password");
}
/* let pass = 'prajalgogoi';

if(pass.length<6 || pass.indexOf(' ')!==-1){
    console.log('Password is Incorrct');
}else{
    console.log('password is Correct');
} */

// QUESTION USING OR OPERATOR
/* People should be either less than 6 years or they should be older than or equal to 65
Then print You get it for free
Else print That will be 100 rupees please */

let age = 74;
if (age < 6 || age >= 65) {
  console.log("You get it for free");
} else {
  console.log("That will be 100 rupees please");
}

// TERNARY OPERATOR
// eg:1
let fruit = "orange";
fruit === "orange"
  ? console.log("Fruit is orange")
  : console.log("Fruit is not orange");

// eg:2
let myAge = 16;
let output =
  myAge > 10 ? "My age is greater than 10" : "My age is less than 10";
console.log(output);

// eg:3
let nm = "krishna";
let id = 1;
nm === "krishna" ? (id = 2) : (id = 3);
console.log(id);

// NESTED TERNARY OPERATOR
myAge > 12
  ? myAge < 20
    ? console.log("My age is greater than 12 but I am a teenager")
    : console.log("I am an adult")
  : console.log("My age is less than 12");

// QUESTION USING TERNARY OPERATOR
/* let status="offline";
let color;
if(status==="offline"){
    color="red";
}
else{
    color="green";
}
console.log(color); 

Convert above code into ternary operator*/

let status = "online";
let color = status === "offline" ? "red" : "green";
console.log(color);
