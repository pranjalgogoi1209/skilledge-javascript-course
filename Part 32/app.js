// PROTOTYPE : It's a central reposetry for all the functions related to class, It has reference of all the methods
// ARRAY PROTOTYPE : Array.prototype will give you all the methods attached with Array class

// PROTOTYPE
console.log('...'.repeat(3), 'PROTOTYPE', '...'.repeat(3));

function User(name, age){
    this.name = name;
    this.age = age;
   /*  this.login = () => {
        console.log(`${this.name} is logged In`);
    } */
    // don't create methods inside class, Create it in class's prototype
}
const user1 = new User('PRANJAL', 24);
const user2 = new User('KRISHNA', 25);

// creating Class's methods in prototype
User.prototype.login = () => console.log(`${this.name} is looged In`);
User.prototype.logout = () => console.log(`${this.name} is logged Out`);

console.log(user1);
console.log(user2);

user1.login();
user1.logout();                                                                                    
user2.login();
user2.logout();                                                                                    