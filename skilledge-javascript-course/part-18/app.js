// ## SELECTORS
// # document.getElementById();

var h1 = document.getElementById("h1_id");
console.log(h1);

// # document.getElementsByClassName();
var p = document.getElementsByClassName("new_class"); //html collection
console.log(p);

console.log(p[0]);
console.log(p[1]);

for (let i of p) {
  console.log(i);
}

// # document.getElementsByTagName();
var li = document.getElementsByTagName("li");
console.log(li);
for (let i of li) {
  console.log(i);
}

// # document.querySelector();
var qry1 = document.querySelector("#h1_id");
// var qry2 = document.querySelector(".new_class");
// var qry3 = document.querySelector("li");
console.log(qry1);
// console.log(qry2);
// console.log(qry3);

// // # document.querySelectorAll();
// console.log("....".repeat(3), "document.querySelectorAll();", "....".repeat(3));

// // nodelist
// var qryAll1 = document.querySelectorAll("#h1_id");
// var qryAll2 = document.querySelectorAll(".new_class");
// var qryAll3 = document.querySelectorAll("li");
// console.log(qryAll1);
// console.log(qryAll2);
// console.log(qryAll3);
// console.log(qryAll3[3]);
// for (let q of qryAll3) {
//   console.log(q);
// }
// console.log(qryAll3);

// // ## TRAVERSING THE DOM
// // # .children
// console.log("....".repeat(3), ".children", "....".repeat(3));

// let ul = document.querySelector("ul");
// console.log(ul.children);

// // # .firstElementChild
// console.log("....".repeat(3), ".firstElementChild", "....".repeat(3));

// const navbar = document.querySelector("nav");
// console.log(navbar.firstElementChild);
// navbar.firstElementChild.innerHTML = "NEW AMAZON";

// // # .lastElementChild
// console.log("....".repeat(3), ".lastElementChild", "....".repeat(3));

// console.log(navbar.lastElementChild);
// navbar.lastElementChild.innerHTML = "About Us";

// // # .parentElement
// console.log("....".repeat(3), ".parentElement", "....".repeat(3));

// const h1 = document.querySelector("#h1_id");
// console.log(h1.parentElement);
// console.log(h1.parentElement.lastChild);

// // # .previousElementSibling
// console.log("....".repeat(3), ".previousElementSibling", "....".repeat(3));

// const main1 = document.querySelector("main");
// console.log(main1.previousElementSibling);
// console.log(
//   main1.previousElementSibling.lastElementChild.parentElement.firstElementChild
// );

// // # .nextElementSibling
// console.log("....".repeat(3), ".nextElementSibling", "....".repeat(3));

// console.log(main1.nextElementSibling);
// console.log(
//   main1.nextElementSibling.previousElementSibling.previousElementSibling
//     .nextElementSibling.firstElementChild
// );

// // # another way of grabing element from dom
// console.log(
//   "....".repeat(3),
//   "another way of grabing element from dom",
//   "....".repeat(3)
// );

// console.log(main1.querySelector("ul"));
// console.log(
//   navbar.firstElementChild.parentElement.nextElementSibling.querySelector("p")
//     .nextElementSibling
// );

// // # CHECK ATTRIBUTES OF ANY ELEMENT
// console.log(
//   "....".repeat(3),
//   "CHECK ATTRIBUTES OF ANY ELEMENT",
//   "....".repeat(3)
// );

// console.log(main1.lastElementChild.attributes);

// // # SET ATTRIBUTES IN ANY ELEMENT
// console.log(
//   "....".repeat(3),
//   "SET ATTRIBUTES IN ANY ELEMENT",
//   "....".repeat(3)
// );

// // inline css

// main1.querySelector(".new_class").setAttribute("style", "color:red"); // inline css

// main1.querySelector(".new_class").style.fontStyle = "italic"; // inline css

// main1.querySelector(".new_class").style.border = "2px solid purple"; // inline css

// // main1.querySelector('.new_class').style.background-color='skyblue';  // It will not work

// main1.querySelector(".new_class").style.backgroundColor = "skyblue"; // inline css

// // internal css & external css : It overwrite the previous class

// main1.querySelector(".new_class").setAttribute("class", "test1");
// main1.querySelector(".test1").setAttribute("class", "test2");
// main1.querySelector(".new_class").setAttribute("class", "test1");

// // # .getAttribute() : CHECK VALUE OF ANY ATTRIBUTE OF AN ELEMENT
// console.log(
//   "....".repeat(3),
//   ".getAttribute() : CHECK VALUE OF ANY ATTRIBUTE OF AN ELEMENT",
//   "....".repeat(3)
// );

// const img = document.querySelector("img");
// console.log(img.getAttribute("height"));
// console.log(img.getAttribute("src"));
// console.log(img.getAttribute("alt"));

// // # CREATE ELEMENT
// console.log("....".repeat(3), "CREATE ELEMENT", "....".repeat(3));

// let h2 = document.createElement("h2");
// console.log(h2);
// h2.innerText = "Contact Us";
// navbar.querySelector("div").appendChild(h2);

// // # CREATE TEXT INSIDE AN ELEMENT
// console.log(
//   "....".repeat(3),
//   "CREATE TEXT INSIDE AN ELEMENT",
//   "....".repeat(3)
// );

// const h3 = document.querySelector("article").querySelector("h3");
// h3.innerText = "I am created using .innerText";
// console.log(h3);

// // # INJECTING CUSTOM CREATED HTML ELEMENT NODE INTO DOM
// console.log(
//   "....".repeat(3),
//   "INJECTING CUSTOM CREATED HTML ELEMENT NODE INTO DOM",
//   "....".repeat(3)
// );

// const section = document.querySelector("section");
// // section.innerHTML = h2; //It will not work, bcz h2 is an element node

// // // It will work, bcz .innerText is in one line with document.createElement();
// var h4 = (document.createElement("h4").innerText =
//   "I am creater .innerText - One line inside section");
// var h5 = (document.createElement("h5").innerText =
//   "I am creater .innerText - Two line inside section");
// section.innerHTML = h4; // It will replace the all html elements inside section tag
// section.innerHTML = h5;
// // section.innerHTML = "I am creater .innerText - One line inside section";
