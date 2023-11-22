// PART 8 : Fri,15 Sep,2023

// NUMBER ARRAY
let arr = [12, 13, 14, 35, 23];
console.log(arr);

// INDEX NUMBER 
console.log(arr[3]);
console.log(arr[10]);

// ARRAY LENGTH
let len = arr.length
console.log(len);

// INDEX : STRING INSIDE ARRAY
let arr2 = ['KRISHNA', 23, 'PRANJAL', 34];
console.log(arr2[0][2]);

// INDEXOF
console.log(arr2.indexOf('PRANJAL'));

// UPDATE AN ARRAY
let arr3 = ['banana', 'kiwi', 'mango'];

arr3[arr3.indexOf('kiwi')] = 'apple';
arr3[3] = 'graps';
console.log(arr3);
// ['banana', 'apple', 'mango', 'graps']

// PUSH : ADD ELEMENT IN ARRAY FROM THE END
arr3.push('coconut');
console.log(arr3);
// ['banana', 'apple', 'mango', 'graps', 'coconut']

// UNSHIFT : ADD ELEMENT IN ARRAY FROM THE BEGINNING
arr3.unshift('orange');
console.log(arr3);
// ['orange', 'banana', 'apple', 'mango', 'graps', 'coconut']

// POP : DELETE ELEMENT FROM THE END OF THE ARRAY
arr3.pop();
console.log(arr3);
// ['orange', 'banana', 'apple', 'mango', 'graps']

// SHIFT : DELETE ELEMENT FROM THE START OF THE ARRAY
arr3.shift();
console.log(arr3);
// ['banana', 'apple', 'mango', 'graps']

// CONCAT : JOIN TWO ARRAY
let arr4 = [1, 2, 3, 4, 5];
let arr5 = [6, 7, 8, 9, 10];
let newArr = arr4.concat(arr5);
// let newArr = arr4.concat(arr4);
console.log(arr4);
console.log(arr5);
console.log(newArr);

// INCLUDES METHOD : return boolean
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let bool = num.includes(100);
// console.log(bool);
console.log(num.includes(100));

// JOIN METHOD : JOIN THE ELEMENTS OF THE ARRAY AND SEPARATED BY ANY CHARACTER
let userNames = ['pranjal', 'krishna', 'rahul', 'ishan'];
// It use comma by default for separation
// let joinedUserNames = userNames.join();
let joinedUserNames = userNames.join('*');
console.log(joinedUserNames);

// REVERSE METHOD
let score = [1, 2, 3, 4, 5, 6, 7];
console.log(score);
score.reverse();
console.log(score);

// SLICE METHOD
let gods=['ram', 'krishna', 'hanuman', 'bholenath', 'saraswati mata'];
let slicedGods = gods.slice(1,3); //2nd argument is excluding
console.log(slicedGods);

// SPLICE METHOD : REMOVE, ADD
let gods2=['ram', 'krishna', 'hanuman', 'bholenath', 'saraswati mata'];

// array.splice(index, no. of element to delete, adding elements at the same index)

// gods2.splice(2, 1, 'Jai Hanuman', 'Jai Shri Ram');
// gods2.splice(1, 0, 'lakshman');
gods2.splice(3, 1);
console.log(gods2);

