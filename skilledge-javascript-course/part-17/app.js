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

// first div in html file
const div = document.getElementById("div-id");
console.log(div);
console.log(div.innerHTML);
div.innerHTML = "<h2>I replaced everything inside div</h2>";
console.log(div.innerHTML);

// second div in html file
const div2 = document.getElementById("div2-id");
console.log(div2.innerHTML);

const span = document.getElementById("span-id");
setTimeout(() => {
  span.innerHTML = "Pranjal";
}, 3000);
console.log(span);
