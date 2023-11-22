// FIND METHOD
console.log('...'.repeat(3), 'FIND METHOD', '...'.repeat(3));

let scores = [23, 4, 0, 45, 78, 99];

// Find return single satisfied element, return true / false like filter, but filter return full array 

let firstFindScore = scores.find((s) => {
    return s>50;
});
console.log(firstFindScore);

// SORT METHOD
// comparator function : It supports to sort an array in accending or decending order : Bubble sort

console.log('...'.repeat(3), 'SORT METHOD', '...'.repeat(3));

// Sort method sort the existing array

// array of strings
let names = ['rahul', 'krishna', 'pranjal', 'kaustav', 'ishan'];
names.sort();
console.log(names);

// array of numbers : Use comparator function
let numbers = [23, 7, 44, 10, 9, 34, 99, 12];
numbers.sort((a,b) => a - b);
// numbers.reverse();
console.log(numbers);

// array of objects : Use comparator function

let game = [
    {name : 'pranjal', score : 12},
    {name : 'gautam', score : 25},
    {name : 'deepankar', score : 25},
    {name : 'krishna', score : 8},
    {name : 'rahul', score : 98},
    {name : 'avi', score : 2},
    {name : 'ishan', score : 45},
];

// increasing order by score
/* game.sort((a, b) => {
    if(a.score < b.score){
        return -1; // a will come before b
    }else if(a.score > b.score){
        return +1; // a will come after b
    }else{
        return 0;
    }
}); */

// decreasing order by name
/* game.sort((a, b) => {
    if(a.name < b.name){
        return 1;
    } else if(a.name > b.name){
        return -1;
    } else{
        return 0;
    }
}); */

// increasing order by score
/* game.sort((a, b) => {
    return a.score - b.score;
}); */

// decreasing order by score
game.sort((a, b) => {
    return b.score - a.score;
});

console.log(game);

// ARRAY METHOD CHAINING
console.log('...'.repeat(3), 'ARRAY METHOD CHAINING', '...'.repeat(3));

let shop = [
    {category : 'fmcg', qty : 5},
    {category : 'water', qty : 30},
    {category : 'gas', qty : 9},
    {category : 'wood', qty : 12},
    {category : 'food', qty : 41}
];

/* let filteredShop = shop.filter(i => i.qty > 10);
console.log(filteredShop);

let mappedQty = filteredShop.map(i => `${i.category} has ${i.qty} quantity`);
console.log(mappedQty); */

//array method chaining
let filteredMappedShop = shop.filter(i => i.qty > 10).map(i => `${i.category} has ${i.qty} quantity`);
console.log(filteredMappedShop);

// PUSH METHOD : ADD ANYTHING IN THE LAST OF THE ARRAY
console.log('...'.repeat(3), 'PUSH METHOD', '...'.repeat(3));

let arr = [12, 20, 31, 4, 76, 43, 65, 3];
arr.push(1000);
console.log(arr);

// POP METHOD : REMOVE THE LAST ELEMENT FROM THE ARRAY
console.log('...'.repeat(3), 'POP METHOD', '...'.repeat(3));

let arr2 = [23, 45, 12, 67, 78, 23, 87];
arr2.pop();
console.log(arr2);

// UNSHIFT : ADD ANYTHING IN THE FIRST OF THE ARRAY
console.log('...'.repeat(3), 'UNSHIFT', '...'.repeat(3));

let arr3 = [12, 23, 34, 45, 56, 57, 67];
arr3.unshift(10000);
console.log(arr3);

// SHIFT : REMOVE THE FIRST ELEMENT FROM THE ARRAY
console.log('...'.repeat(3), 'SHIFT', '...'.repeat(3));

let arr4 = [11, 23, 34, 45, 56, 57, 67];
arr4.shift()
console.log(arr4);

// SLICE 
console.log('...'.repeat(3), 'SLICE', '...'.repeat(3));

let arr5 = [23, 45, 56, 67, 78];
let newArr5 = arr5.slice(1,4);
console.log(newArr5);
