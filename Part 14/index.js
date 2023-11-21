// RETURN FUNCTION IN A FUNCTION
console.log('----'.repeat(3), 'RETURN FUNCTION IN A FUNCTION', '----'.repeat(3));

/* function outer1(){
    function inner(){
        console.log('I am inner, going to return');
    }
    return inner;
}
let finalResult=outer1();
finalResult();
outer1()(); */

// another way is

/* function outer2(){
    return function inner(){
        console.log('I am inner, going to return');
    }
}
let final2Result=outer2();
final2Result();
outer2()(); */

// another way is return annonymus function

function outer3(){
    return function(){
        console.log('I am inner, going to return');
    }
}
let final3Result=outer3();
final3Result();
outer3()();

// EXAMPLE 1 OF RETURN ANNONYMUS FUNCTION
console.log('----'.repeat(2), 'EXAMPLE 1 OF RETURN ANNONYMUS FUNCTION', '----'.repeat(2));

function add(num){
    return function(x){
        return `Sum is ${num * x}`;
    }
}
let sum=add(5);
console.log(sum(5));
console.log(add(5)(5));

// SET TIME OUT METHOD : CALLBACK FUNCTION
console.log('----'.repeat(2), 'SET TIME OUT METHOD : CALLBACK FUNCTION', '----'.repeat(2));

setTimeout(function(){
    console.log('Use this function in setTimeout method');
},3000);
// check bottom of the console

// ARRAY CALLBACK METHODS
// FOR EACH METHOD IN ARRAY
console.log('----'.repeat(3), 'FOR EACH METHOD IN ARRAY', '----'.repeat(3));
let names = ['Pranjal','Goutam','Krishna','Rijwan'];
names.forEach(function(item, index){
    console.log(`${index} - ${item}`)
});

// FOR EACH METHOD IN ARRAY OF OBJECTS
console.log('----'.repeat(3), 'FOR EACH METHOD IN ARRAY OF OBJECTS', '----'.repeat(3));

let books = [
    {
        bookName : 'Geeta',
        description : 'Geeta is gyan',
        actor : ['krishna', 'arjuna', 'dhritarastra', 'sanjay'],
    },
    {
        bookName : 'Ramayana',
        description : 'Jai shree Ram',
        actor : ['Ram', 'Lakshman', 'Sita'],
    }
];
books.forEach(function(item,index){
    console.log(index, item.description);
});

// MAP METHOD
let array = [10,20,30];
let newArray = array.map(function(number){
    return number**2;
});
console.log(newArray);

// MAP METHOD IN ARRAY OF OBJECTS
console.log('----'.repeat(3), 'MAP METHOD IN ARRAY OF OBJECTS', '----'.repeat(3));

let kitabe = [
    {
        bookName : 'Geeta',
        description : 'Geeta is gyan',
        actor : ['krishna', 'arjuna', 'dhritarastra', 'sanjay'],
    },
    {
        bookName : 'Ramayana',
        description : 'Jai shree Ram',
        actor : ['Ram', 'Lakshman', 'Sita'],
    }
];
let newKitabe = kitabe.map(function(i){
    return i.bookName;
});
console.log(newKitabe);

// NON ARROW FUNCTION
console.log('----'.repeat(3), 'NON ARROW FUNCTION', '----'.repeat(3));

let marvelNormal=function(){
    console.log('Multiverse in normal fuction');
}
marvelNormal();

// ARROW FUNCTION
console.log('----'.repeat(3), 'ARROW FUNCTION', '----'.repeat(3));

let marvelArrow=()=>{
    console.log('Multiverse in arrow function');
}
marvelArrow();
// MAP METHOD WITH ARROW FUNCTION
console.log('----'.repeat(3), 'MAP METHOD WITH ARROW FUNCTION', '----'.repeat(3));

let newKitabeArrow=kitabe.map((item)=>{return item.actor[1]});
console.log(newKitabeArrow);

// PROBLEM 1
// print true for even number, false for odd number
console.log('----'.repeat(3), 'PROBLEM 1', '----'.repeat(3));

let numbers = [10,11,12,13];
let isEven = numbers.map((number)=>{
    return number%2==0;
});
console.log(isEven);

// RETURNING ONE STATEMENT USING ARROW FUNCTION
console.log('----'.repeat(1), 'RETURNING ONE STATEMENT USING ARROW FUNCTION', '----'.repeat(1));

let arrowfunc=(x,y)=>x+y;
console.log(arrowfunc(12,12));

// RETURNING AN OBJECT IN ONE STATEMENT USING ARROW FUNCTION
console.log('----'.repeat(1), 'RETURNING AN OBJECT IN ONE STATEMENT USING ARROW FUNCTION', '----'.repeat(1));

let obj=()=>({name: 'Pranjal'});
console.log(obj());

// RETURNING IN ONE STATEMENT USING MAP METHOD WITH ARROW FUNCTION 
console.log('----'.repeat(1), 'RETURNING IN ONE STATEMENT USING MAP METHOD WITH ARROW FUNCTION ', '----'.repeat(1));

let arr = [10,20,30,40,50];
let newArr = arr.map((num)=>num*10);
console.log(newArr);

// FIND METHOD
console.log('----'.repeat(3), 'FIND METHOD', '----'.repeat(3));

let movies = ['Mr. Pranjal', 'The Avengers', 'Mr. and Mrs. Gogoi', 'The Hero', 'Mrs. Bheede'];
let result = movies.find((name)=>name.includes('Mr.'));
console.log(result);

// PROBLEM 2
console.log('----'.repeat(3), 'PROBLEM 2', '----'.repeat(3));

let kitabeOfGyan = [
    {
        bookName : 'Geeta',
        description : 'Geeta is gyan',
        actor : ['krishna', 'arjuna', 'dhritarastra', 'sanjay'],
    },
    {
        bookName : 'Ramayana',
        description : 'Jai shree Ram',
        actor : ['Ram', 'Lakshman', 'Sita'],
    },
];
// find the object whoose book's name is Ramayana
let theBook=kitabeOfGyan.find((i)=>i.bookName==='Ramayana');
console.log(theBook);

// find the object whoose description's name is starts with J
let des=kitabeOfGyan.find((i)=>i.description.startsWith('J'));
console.log(des);

// FILTER METHOD
console.log('----'.repeat(3), 'FILTER METHOD', '----'.repeat(3));
let moviesFilter = ['Mr. Pranjal', 'The Avengers', 'Mr. and Mrs. Gogoi', 'The Hero', 'Mrs. Bheede'];
let newMoviesFilter = moviesFilter.filter((movie) => movie.includes('Mrs.'));
console.log(newMoviesFilter);

// PROBLEM 3
// Print all odd numbers using filter method
console.log('----'.repeat(3), 'PROBLEM 3', '----'.repeat(3));

let nums = [1,2,3,4,5,6,7,8,9,10];
let oddNums = nums.filter((num) => num%2!==0);
console.log(oddNums);

// SOME METHOD
console.log('----'.repeat(3), 'SOME METHOD', '----'.repeat(3));

let heroes = ['Thor', 'Hulk', 'CaptainAmerica', 'IronMan']
let resultHeroes = heroes.some((hero) => hero==='Thor');
console.log(resultHeroes); 

// EVERY METHOD
console.log('----'.repeat(3), 'EVERY METHOD', '----'.repeat(3));

let superHeroes = ['Thor', 'IronMan', 'Thor', 'Thor']
let resultSuperHeroes = superHeroes.every((hero) => hero==='Thor');
console.log(resultSuperHeroes);