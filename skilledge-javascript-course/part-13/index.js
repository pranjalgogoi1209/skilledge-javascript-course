// # PROBLEM 1
// Write a function to check whether a sentance is PANGRAM or not ?

console.log("----".repeat(3), "PROBLEM 1", "----".repeat(3));

// NOT RECOMMENDED
/* let sent = 'The Quick Brown Fox Jumps Over The Lazy dog';
sent = sent.toLowerCase();
let alpha = 'abcdefghijklmnopqrstuvwxyz';
let count = null;
function isPangram(){
    for(let a of alpha){
        if(sent.indexOf(a)===-1){
            return 'Not Pangram';
        }
        count += 1;
        if(count === 26){
            return 'Pangram';
        }
    }
}
console.log(isPangram()); */

// RECOMMENDED
let sent = "The Quick Brown Fox Jumps Over The Lazy doG";
const func = () => {
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  sent = sent.toLowerCase();
  for (let i of alpha) {
    if (!sent.includes(i)) {
      return "Not a PANGRAM";
    }
  }
  return "PANGRAM";
};
console.log(func());

// # SCOPE
// # FUNCTION SCOPE : var
console.log("----".repeat(3), "FUNCTION SCOPE", "----".repeat(3));

function funcScope() {
  var name = "Pranjal";
  console.log("Inside function scope:--", name);
}
funcScope();
// console.log("Outside function scope:--", name); //we can't call name variable outside the function scope

// # BLOCK SCOPE : let & const
console.log("----".repeat(3), "BLOCK SCOPE", "----".repeat(3));

function blockScope() {
  if (true) {
    var id = 345; //fuction scope
    let name = "Block level scope"; //block scope
    const age = 22; //block scope
    console.log("Inside block scope:--", id, name, age);
  }
  console.log("Inside function scope but Outside block scope", id);
  // console.log(name,);   //we can't call name, because it is a block scope
  // console.log(age);   //we can't call age, because it is a block scope
}
blockScope();
// console.log("Inside function scope but Outside block scope",id);

// # LEXICAL SCOPE
console.log("----".repeat(3), "LEXICAL SCOPE", "----".repeat(3));

let user = "Pranjal";
function superHero() {
  let hero = "Captain America";
  function civilian() {
    console.log(`${hero}, Please save ${user}`);
    let a = 2;
    if (true) {
      console.log(a, hero, user);
    }
  }
  civilian();
}
superHero();

// # ANNONYMUS FUNCTION EXPRESSION
console.log("----".repeat(3), "ANNONYMUS FUCTION EXPRESSION", "----".repeat(3));

const myfunc = function () {
  console.log("This is my func - function expression");
};
myfunc();

// METHOD
const obj = {
  name: "krishna",
  age: 27,
  myfunc: function (pera) {
    console.log(pera);
  },
};

obj.myfunc("hi i am object function");

// # FUNCTION AS VALUES
console.log("----".repeat(3), "FUCTION AS VALUES", "----".repeat(3));

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

function multi(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
};

const log = function (string) {
  console.log(`Hi, I am ${string}`);
};

// array
const operations = [add, sub, multi, divide]; // function as values
for (let opera of operations) {
  console.log(opera(2, 3));
}

// object
let obj2 = {
  addSomething: log,
};
// console.log(obj2.addSomething(5, 10));
obj2.addSomething("pranjal");

// # FUNCTION AS ARGUMENTS : call back function
console.log("----".repeat(3), "FUCTION AS ARGUMENTS", "----".repeat(3));

const func2 = function (name) {
  return `Name: ${name}`;
};

const func1 = function (func2) {
  return `FUNCTION 1 KE ANDAR => ${func2("KRISHNA")}`;
};

console.log(func1(func2));

// ANOTHER EG:
function greetAgain(func, obj) {
  console.log(`Congratulations, ${func()}`);
  console.log(`Congratulations, ${obj.name}`);
}

let person = function () {
  return "Pranjal Gogoi";
};

let userObject = {
  name: "Goutam Medhi",
};

greetAgain(person, userObject);
