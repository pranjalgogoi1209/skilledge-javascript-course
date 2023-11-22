// # UPDATING PROPERTIES IN AN OBJECT
console.log(
  "...".repeat(3),
  "UPDATING PROPERTIES IN AN OBJECT",
  "...".repeat(3)
);

let obj = {
  name: "PRANJAL GOGOI",
  id: 14046,
  salary: 50000,
  currentProjects: ["amazon", "google"],
};
console.log(obj.id);

obj.id = 5678;
console.log(obj.id);

// # ADDING PROPERTIES IN AN OBJECT
console.log("...".repeat(3), "ADDING PROPERTIES IN AN OBJECT", "...".repeat(3));

obj.position = "FULL-STACK DEVELOPMENT";
obj.location = "INDIA";
obj.isMarried = false;
console.log(obj);

// # ARRAY AND OBJECT INSIDE AN OBJECT
console.log(
  "...".repeat(3),
  "ARRAY AND OBJECT INSIDE AN OBJECT",
  "...".repeat(3)
);

let student = {
  userName: "pranjalgogoi",
  rollNo: 1,
  hobbies: ["dance", "gaming"],
  examScore: {
    halfYearly: 98,
    final: 93,
  },
};
console.log(student.hobbies[1]); //'gaming'
console.log(student.examScore.final); //93
console.log(student.examScore["final"]); //93

// # ARRAY OF OBJECTS
console.log("...".repeat(3), "ARRAY OF OBJECTS", "...".repeat(3));

// one way
const student1 = {
  name: "PRANJAL GOGOI",
  id: 14046,
};
const student2 = {
  name: "GOUTAM MEDHI",
  id: 16098,
};
const student3 = {
  name: "KRISHNA YADAV",
  id: 12078,
};
const array1 = [student1, student2, student3];
console.log(array1);

// another way

/* const array = [
    {
        name : 'PRANJAL GOGOI',
        id : 14046
    },
    {
        name : 'GOUTAM MEDHI',
        id : 16098
    },
    {
        name : 'KRISHNA YADAV',
        id : 12078
    }
] */

const array = [
  { name: "PRANJAL GOGOI", id: 14046 },
  { name: "GOUTAM MEDHI", id: 16098 },
  { name: "KRISHNA YADAV", id: 12078 },
];

/* const user = {name : 'PRANJAL GOGOI', id : 14046};
console.log(user.id);   //14046
console.log({name : 'PRANJAL GOGOI', id : 14046}.id);   //14046 */

console.log(array);
console.log(array[0]); //{name: 'PRANJAL GOGOI', id: 14046}
console.log(array[0].id); //14046
console.log({ name: "PRANJAL GOGOI", id: 14046 }.id); //14046

// # REFERENCE TYPE ASSIGNMENT
console.log("...".repeat(3), "REFERENCE TYPE ASSIGNMENT", "...".repeat(3));

let obj1 = {
  name: "PRANJAL GOGOI",
  id: 12345,
};
let obj2 = {
  name: "PRANJAL GOGOI",
  id: 12345,
};
let obj3 = obj1;

console.log(obj1 == obj2); //false : comparing different addresses of different objects
console.log(obj1 === obj2); //false : comparing different addresses of different objects

console.log(obj1 == obj3); // true : comparing same address of same object
console.log(obj1 === obj3); // true : comparing same address of same object

// # FOR LOOP
console.log("...".repeat(3), "FOR LOOP", "...".repeat(3));

// initialization; condition; increament/decreament
for (let i = 1; i <= 5; i++) {
  console.log(i, "KRISHNA");
}

// console.log(i);

// # QUESTION 1 : print 50, 40, 30, 20, 10, 0
console.log("...".repeat(3), "QUESTION 1", "...".repeat(3));

for (let i = 50; i >= 0; i -= 10) {
  console.log(i);
}

// # FOR LOOP IN AN ARRAY
console.log("...".repeat(3), "FOR LOOP IN AN ARRAY", "...".repeat(3));

let animal = ["lion", "tiger", "bear"];
for (let i = 0; i <= animal.length - 1; i++) {
  console.log(animal[i]);
}

// # REVERSE ORDER
console.log("...".repeat(3), "REVERSE ORDER", "...".repeat(3));

let animal2 = ["lion", "tiger", "bear", "dear", "donky", "dog", "cat"];
for (let i = animal2.length - 1; i >= 0; i--) {
  console.log(animal2[i]);
}

// # REVERSE THE ARRAY WITHOUT USING REVERSE METHOD AND RETURN AN ARRAY
console.log(
  "...".repeat(3),
  "REVERSE THE ARRAY WITHOUT USING REVERSE METHOD AND RETURN AN ARRAY",
  "...".repeat(3)
);

let num = [1, 2, "three", 4, "five", 6, 7, "eight", 9, 10];
// num.reverse();
numReverse = [];
for (let i = num.length - 1; i >= 0; i--) {
  numReverse.push(num[i]);
}
console.log(numReverse);
console.log(numReverse[0]);

// # NESTED FOR LOOP
console.log("...".repeat(3), "NESTED FOR LOOP", "...".repeat(3));

/* for(let i = 1; i <= 2; i++){
    for(let j = 1; j<=2; j++){
        console.log('*');
    }
} */

/* 
    i = 1 
        j = 1   *
        j = 2   *
    i = 2
        j = 1   *
        j = 2   *

*/

/* let color = ['red', 'yellow'];
let fruit = ['mango', 'apple'];

for(let i = 0; i <= color.length - 1; i++){
    for(let j = 0; j<=fruit.length - 1; j++){
        console.log(i);
    }
} */

/* 
    i = 0 
        j = 0 : 0
        j = 1 : 0
    i = 1
        j = 0 : 1
        j = 1 : 1
*/

let color = ["red", "yellow"];
let fruit = ["mango", "apple"];

for (let i = 0; i <= color.length - 1; i++) {
  for (let j = 0; j <= fruit.length - 1; j++) {
    console.log(color[i], fruit[j]);
  }
}
/* 
    i = 0 : red
        j = 0 : mango => red, mango
        j = 1 : apple => red, apple
    i = 1 : yellow
        j = 0 : mango => yellow, mango
        j = 1 : apple => yellow, apple

*/

/* let color = ['red', 'yellow'];
let fruit = ['mango', 'apple'];
let mobile = ['samsung', 'nokia'];

for(let i = 0; i <= color.length - 1; i++){
    for(let j = 0; j <= fruit.length - 1; j++){
        for(let k = 0; k <= mobile.length - 1; k++){
            console.log(color[i], fruit[j], mobile[k]);
        }
    }
} */
