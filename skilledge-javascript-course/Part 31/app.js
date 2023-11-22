// # SUPER
console.log('...'.repeat(3), 'SUPER', '...'.repeat(3));

// user class
class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    login(){
        console.log(`${this.name} is logged In`);
    }   
    logout(){
        console.log(`${this.name} is logged Out`);
    }
}

const user1 = new User('PRANJAL', 'gogoipranjal2019@gmail.com');
const user2 = new User('KRISHNA', 'krishna@gmail.com');
const user3 = new User('RAHUL', 'rahul@gmail.com');

let users = [user1, user2, user3];

// admin class
class Admin extends User{
    // method overriding : we can't use the parent class's any method without super()
    constructor(name, email, age){
        super(name, email);
        this.age = age;
    }
    deleteUser(user){
        // updating the users array by filtering it
        users = users.filter(u => u.name !== user.name);
    }

    // overriding the parent class's method
    login(){
        console.log(`${this.name} is logged In from child Class`);
    }
}

const admin = new Admin('ADMIN PRANJAL', 'gogoipranjal2022@gmail.com');

console.log(admin.name);    // super
console.log(admin.email);   // super
console.log(admin.age);     // own property
admin.login();
admin.logout();

console.log(users);
admin.deleteUser(user1);
console.log(users);


// ENCAPSULATION : Hiding and bundling Information, but in JS, It's not good, so we use typescript
// INHERITANCE : Reuse the code of parent class in the child class
// POLIMORPHISM : More than 1 form is called polimorphism. Due to overriding we got more than one form of login method, one is from parend child and another one is from child class
// ABSTRACTION : Limit the code of a class



// # CONSTRUCTOR FUNCTION : BEHIND THE REAL SCENE
console.log('...'.repeat(3), 'CONSTRUCTOR FUNCTION : BEHIND THE REAL SCENE', '...'.repeat(3));

function Usr(name, email){
    this.name = name;
    this.email = email;
    this.welcome = () => {
        console.log(`Welcome ${this.name}`);
    }
    // welcome method is not attach in prototype, so everytime we call the object, it will increase space complexity
}

var usr1 = new Usr('PRANJAL', 'gogoipranjal2019@gmail.com');
var usr2 = new Usr('KRISHNA', 'yadav@gmail.com');

console.log(usr1);
usr1.welcome();

console.log(usr2);