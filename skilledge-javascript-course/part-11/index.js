// # WHILE LOOP
console.log("...".repeat(3), "WHILE LOOP", "...".repeat(3));

let i = 0;
while (i < 10) {
  // i++;
  console.log(i);
  i++;
}

// # DICE GAME USING WHILE LOOP
console.log("***".repeat(3), "DICE GAME", "***".repeat(3));

let dice1 = ~~(Math.random() * 6) + 1;
let dice2 = ~~(Math.random() * 6) + 1;
let count = 0;
while (dice1 != dice2) {
  count++;
  console.log("try", count, "=>", "You lost", dice1, dice2);
  dice1 = ~~(Math.random() * 6) + 1;
  dice2 = ~~(Math.random() * 6) + 1;
}
console.log("You won", dice1, dice2);

// # GUESSING GAME USING WHILE LOOP
console.log("...".repeat(3), "GUESSING GAME USING WHILE LOOP", "...".repeat(3));

let target = Math.floor(Math.random() * 10);
const guess = 7;

while (target !== guess) {
  console.log("target :", target, "guess :", guess);
  console.log("Sorry, Better luck for next time");
  target = Math.floor(Math.random() * 10);
}
console.log("target :", target, "guess :", guess);
console.log("Congratulation, You won");

// # DO WHILE
console.log("...".repeat(3), "DO WHILE", "...".repeat(3));

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// # FOR OF LOOP IN ARRAY
console.log("...".repeat(3), "FOR OF LOOP IN ARRAY", "...".repeat(3));

let superHeroes = ["Spiderman", "Ironman", "Thor"];

/* for(let i = 0; i <= superHeroes.length - 1; i++){
    console.log(superHeroes[i]);
} */

for (let hero of superHeroes) {
  console.log(hero);
}

// log Ironman and Thor only
for (let hero of superHeroes) {
  if (hero === "Spiderman") {
    continue;
  }
  console.log(hero);
}

// # FOR OF LOOP OVER OBJECT : USE FOR OF LOOP IN ARRAY ONLY
console.log("...".repeat(3), "FOR OF LOOP OVER OBJECT", "...".repeat(3));

let user = {
  a: 1,
  b: 2,
  c: 3,
};

// array of keys
console.log(Object.keys(user)); // [ 'a', 'b', 'c' ]
// array of values
console.log(Object.values(user)); // [ 1, 2, 3 ]
// array of array
console.log(Object.entries(user)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

console.log(user);

// for of loop over an array of all the keys of user object
// ['a', 'b', 'c']
for (let key of Object.keys(user)) {
  console.log(key, user[key]);
}

// FOR IN LOOP OVER OBJECT : USE FOR IN LOOP IN OBJECT ONLY
console.log("...".repeat(3), "FOR IN LOOP OVER OBJECT", "...".repeat(3));

let obj = {
  d: 11,
  e: 22,
  f: 33,
};

for (let key in obj) {
  console.log(key, obj[key]);
}
