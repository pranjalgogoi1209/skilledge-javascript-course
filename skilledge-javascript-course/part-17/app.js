// # USE PROPERTY OF AN OBJECT INSIDE OBJECT
console.log(
  "....".repeat(2),
  "USE PROPERTY OF AN OBJECT INSIDE OBJECT",
  "....".repeat(2)
);

let obj = {
  firstName: "pranjal",
  lastName: "gogoi",
  //   fullName: firstName + lastName,
  //   fullName: obj.firstName + obj.lastName,
  //   fullName: this.firstName + this.lastName,
  fullName: function () {
    console.log(this.firstName + this.lastName);
    console.log(obj.firstName + obj.lastName);
  },
};
obj.fullName();

// # THIS KEYWORD : It doesn't work with arrow function
console.log("....".repeat(2), "THIS KEYWORD", "....".repeat(2));

// global object
console.log(this);

let user = {
  firstName: "pranjal",
  lastName: "gogoi",
  // during construction of user object, we can't access user object, so js takes window object in this keyword.
  windowObject: this,

  fullName: function () {
    return this.firstName + " " + this.lastName;
  },

  object: function () {
    return this;
  },
};
console.log(user.fullName());
console.log(user.object().object().object().fullName());
console.log(user.windowObject); // it returns Window object

// # INNER HTML
console.log("....".repeat(2), "INNER HTML", "....".repeat(2));
const divId = document.getElementById("div-id");
console.log(divId);
