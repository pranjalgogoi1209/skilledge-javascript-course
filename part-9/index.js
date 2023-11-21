// PASS BY VALUE
console.log("...".repeat(3), "PASS BY VALUE", "...".repeat(3));

let myName = "pranjal";
let yourName = myName;
let hisName = "pranjal";

console.log(myName);
console.log(yourName);

console.log(myName === yourName);
console.log(myName === hisName);

yourName = "Krishna";
console.log(yourName); //Krishna
console.log(myName); //Pranjal

// PASS BY REFERENCE/ADDRESS : SHALLOW COPY
console.log(
  "...".repeat(3),
  "PASS BY REFERENCE/ADDRESS : SHALLOW COPY",
  "...".repeat(3)
);

const num1 = [1, 2, 3, 4];
const num2 = num1; //Shallow copy of num1, num1 pass the address to num2.
const num3 = [1, 2, 3, 4];

console.log(num1); //[1, 2, 3, 4]
console.log(num2); //[1, 2, 3, 4]

console.log(num1 === num2); //true : comparing address
console.log(num1 === num3); //false : comparing address

num2[0] = 100;
console.log(num1); //[100, 2, 3, 4]

// variable stores the address of an array.

// NESTED ARRAY
console.log("...".repeat(3), "NESTED ARRAY", "...".repeat(3));

const color = [
  ["red", "crimson"],
  ["orange", "dark orange"],
  ["yellow", "golden rod"],
  ["green", "olive"],
  ["blue", "navy blue"],
  ["purple", "orchid"],
];

console.log(color[3]);
console.log(color[3][1]);

// TIC TAC TOE GAME'S DATA STRUCTURE USING NESTED ARRAY
console.log(
  "...".repeat(3),
  "TIC TAC TOE GAME'S DATA STRUCTURE USING NESTED ARRAY",
  "...".repeat(3)
);

const board = [
  ["X", null, "0"],
  ["0", "X", null],
  [null, "0", "X"],
];

console.log(board);

// OBJECT
console.log("...".repeat(3), "OBJECT", "...".repeat(3));

const fitBitData = {
  userName: "pranjalgogoi",
  stepsCount: 2000,
  calsBurnt: 200,
  tags: ["#fit", "#healthy", "#nutrition"], //we can write keys as string.
  isActive: true,
};

console.log(fitBitData);

// common way to access values of object
console.log(fitBitData.userName);
console.log(fitBitData.stepsCount);
console.log(fitBitData.tags[2]);

// uncommon way to access values of object
console.log(fitBitData["userName"]);
console.log(fitBitData["userName"][0]);
console.log(fitBitData["stepsCount"]);
console.log(fitBitData["tags"]);

const name = "userName";
console.log(fitBitData[name]); //fitBitData['userName'];
