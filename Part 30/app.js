// ## LOCAL STORAGE

// # SET ITEM
console.log('......SET ITEM......');

// key and value must be in string type
localStorage.setItem('NAME','PRANJAL');
localStorage.setItem('AGE','24');


// # CLEAR
console.log('......CLEAR......');

// it delete whole keys and values from the storage
// localStorage.clear();


// # GET ITEM
console.log('......GET ITEM......');

// get value with the help of key
const item = localStorage.getItem('NAME');
console.log(item);


// # REMOVE ITEM
console.log('......REMOVE ITEM......');

// remove an item with the help of key
localStorage.removeItem('AGE');


// # UPDATE AN ITEM
console.log('......UPDATE AN ITEM......');

// update an item with the help of re assigning that key
localStorage.setItem('NAME', 'KRISHNA');


// # ARRAY OF OBJECT AS A VALUE IN LOCAL STORAGE
console.log('......ARRAY OF OBJECT AS A VALUE IN LOCAL STORAGE......');

// convert the array into string, bcz setItem only takes string as an arugument
// we are converting the object to JSON string
let todos = [
    {'text' : 'playing cricket', 'player' : 'rahul'},
    {'text' : 'playing pubg', 'player' : 'pranjal'},
    {'text' : 'playing chess', 'player' : 'krishna'}
];
todos = JSON.stringify(todos);
localStorage.setItem('todos', todos);

// Note : Whenever we get different data like JSON from local storage  we have to change that data to javascript version


// OOPS IN JAVASCRIPT
console.log('......OOPS IN JAVASCRIPT......');

class User {
    constructor(name, email){
        // console.log(name, email);

        //class properties
        this.name = name;
        this.email = email;
        this.score = 0;
        // this is the object
    }

    // class methods
    login(){
        console.log(`${this.name} is logged In`);
    }
    
    logout(){
        console.log(`${this.name} is logged Out`);
    }
    // prototype is a place where methods are stored, You can check it by console log the object

    increaseScore(){
        this.score += 1;
        console.log(`${this.name} has score of ${this.score}`);
        return this;
    }
}

const user1 = new User('PRANJAL', 'gogoipranjal2019@gmail.com');
const user2 = new User('KRISHNA', 'krishna@gmail.com');
const user3 = new User('RAHUL', 'rahul@gmail.com');
// new create a blank object based on the class

console.log(user1.name);
console.log(user1);
user1.login();

console.log(user2);
user2.logout();

user1.increaseScore();
console.log(user1.increaseScore());

user1.increaseScore().login();

// method chaining
user1.increaseScore().increaseScore().increaseScore();


// ADMIN OBJECT
console.log('...'.repeat(3), 'ADMIN OBJECT', '...'.repeat(3));

// extends User means bring the whole code inside User class to Admin class
// Admin is a child class and User is parent class
// It's called prototypical inheritance

class Admin extends User{
    deleteUser(user){
        console.log(`delete ${user}`);
    }
}

const admin = new Admin('ADMIN PRANJAL', 24);

admin.login();
// admin.deleteUser('RAHUL');
/* admin.deleteUser(user2);
console.log(users);
console.log(admin); */

// 4 pillers of Oops are, inheritance, Abstraction, polymorphism, encapsulation
// Javascript is not Object oriented language, it's object based language
// We will use oops concept on a lighter note

