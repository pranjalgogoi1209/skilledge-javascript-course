// SWITCH
console.log("***".repeat(5), "SWITCH", "***".repeat(5));

let day = 1;
switch (day) {
  case 1:
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Entered to default block");
}

// ARRAY
console.log("***".repeat(5), "ARRAY", "***".repeat(5));

// empty array
let students = [];

// string array
let colors = ["red", "yellow", "green"];
console.log(colors);

// number array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// mix array
let mix = ["string", 2, 99.99, true, undefined, NaN];
console.log(mix);

// length of an array
console.log(mix.length);
console.log(mix[0]);
console.log(mix[1]);
console.log(mix[2]);
console.log(mix[3]);
console.log(mix[4]);
console.log(mix[5]);
console.log(mix[6]);
// Index no. 6 is not available in the array so it's showing undefined

// Access an alphabet of a string inside an array
console.log(mix[0][3]);

// indexOf
console.log(mix.indexOf(true));
console.log(mix.indexOf("not available"));

// update array elements
let fruits = ["apple", "orange", "banana"];
fruits[0] = "Apel";
fruits[1] = "Komola";
fruits[2] = "Kol";
fruits[3] = "Narikol";
console.log(fruits);

// ARRAY METHODS
console.log("***".repeat(5), "ARRAY METHODS", "***".repeat(5));

// push
let phones = ["samsung", "nokia", "iphone"];
phones.push("redmi");
phones.push("realme");
console.log(phones);

let laptops = [];
laptops.push("mac");
laptops.push("asus");
console.log(laptops);

// pop
let creams = ["dove", "johnsons", "fare&lovely"];
creams.pop();
creams.pop();
console.log(creams);

// shift
let powders = ["dove", "johnsons", "patanjali", "navaratna"];
powders.shift();
powders.shift();
console.log(powders);

// unshift
let bodySpray = ["axe", "monet"];
bodySpray.unshift("closer");
bodySpray.unshift("night");
console.log(bodySpray);

// CONCATE (Concatenation)
let myFamily = ["Pranjal", "Princei", "Rinku", "Bakul"];
let momFamily = [
  "Pankaj",
  "Pampi",
  "Sioxci",
  "Janardan",
  "Jyotshna",
  "Saathvik",
];
// let wholeFamily = myFamily.concat(momFamily);
let wholeFamily = momFamily.concat(myFamily);
console.log(wholeFamily);

// INCLUDES METHOD
let people = ["men", "women", "transgender", "gay"];
console.log(people.includes("men"));
console.log(people.includes("lesbian"));

// JOIN METHOD
joinedPeople = people.join("---");
console.log(joinedPeople);
console.log(typeof joinedPeople);

// REVERSE METHOD
people.reverse();
console.log(people);

// SLICE METHOD
let gods = ["ram", "krishna", "hanuman", "bholenath", "saraswati mata"];
// hinduGods = gods.slice();
// hinduGods = gods.slice(1);
hinduGods = gods.slice(0, 3);
console.log(hinduGods);

// SPLICE METHOD
gods.splice(0, 0, "hanuman");
console.log(gods);
// ['hanuman', 'ram', 'krishna', 'hanuman', 'bholenath', 'saraswati mata']
gods.splice(2, 1, "saraswati mata");
console.log(gods);
// ['hanuman', 'ram', 'saraswati mata', 'hanuman', 'bholenath', 'saraswati mata']
gods.splice(3, 1);
console.log(gods);
// ['hanuman', 'ram', 'saraswati mata', 'bholenath', 'saraswati mata']
gods.splice(gods.length - 1, 1, "bholenath", "ram", "shree krishna");
console.log(gods);
// ['hanuman', 'ram', 'saraswati mata', 'bholenath', 'bholenath', 'ram', 'shree krishna']
gods.splice(4, 2);
console.log(gods);
// ['hanuman', 'ram', 'saraswati mata', 'bholenath', 'shree krishna']
