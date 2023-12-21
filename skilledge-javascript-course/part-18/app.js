// ## SELECTORS
// # GET ELEMENT BY ID
console.log("***  GET ELEMENT BY ID ***");
var h1 = document.getElementById("h1_id");
console.log(h1);

// # GET ELEMENTS BY CLASSNAME
console.log("*** GET ELEMENTS BY CLASSNAME ***");
var p = document.getElementsByClassName("new_class"); //html collection
console.log(p);

console.log(p[0]);
console.log(p[1]);

for (let i of p) {
  console.log(i);
}

// # GET ELEMENTS BY TAGNAME
console.log("*** GET ELEMENTS BY TAGNAME ***");
var li = document.getElementsByTagName("li");
console.log(li);
for (let i of li) {
  console.log(i);
}

// # QUERY SELECTOR
console.log("*** QUERY SELECTOR ***");
var qry1 = document.querySelector("#h1_id");
var qry2 = document.querySelector(".new_class");
var qry3 = document.querySelector("li");
console.log(qry1);
console.log(qry2);
console.log(qry3);

// # QUERY SELECTOR ALL
console.log("*** QUERY SELECTOR ALL ***");
// nodelist
var qryAll1 = document.querySelectorAll("#h1_id");
var qryAll2 = document.querySelectorAll(".new_class");
var qryAll3 = document.querySelectorAll("li");
console.log(qryAll1);
console.log(qryAll2);
console.log(qryAll3);
console.log(qryAll3[3]);
/* for (let q of qryAll3) {
  console.log(q);
} */
qryAll3.forEach(item => {
  console.log(item, "inside forEach");
});

// CONVERT NODELIST TO ARRAY
console.log("***CONVERT NODELIST TO ARRAY***");
const newArray = Array.from(qryAll3);
console.log(newArray);
// or
const newArray2 = [...qryAll3];
console.log(newArray2);

// // ## TRAVERSING THE DOM
// // # CHILDREN
console.log("***CHILDREN***");
let ul = document.querySelector("ul");
console.log(ul.children);

// # FIRST ELEMENT CHILD
console.log("***FIRST ELEMENT CHILD***");
const navbar = document.querySelector("nav");
console.log(navbar.firstElementChild);
console.log(navbar.firstElementChild.innerHTML);
navbar.firstElementChild.innerHTML = "REPLACED BY FLIPKART";
console.log(navbar.firstElementChild.innerHTML);

// # LAST ELEMENT CHILD
console.log("***LAST ELEMENT CHILD***");
console.log(navbar.lastElementChild.innerHTML);
navbar.lastElementChild.innerHTML = "REPLACED BY ABOUT US";
console.log(navbar.lastElementChild.innerHTML);

// # PARENT ELEMENT
console.log("***PARENT ELEMENT***");
const h1Id = document.querySelector("#h1_id");
console.log(h1Id.parentElement);
console.log(h1Id.parentElement.lastElementChild);

// # PREVIOUS ELEMENT SIBLING
console.log("***PREVIOUS ELEMENT SIBLING***");

const main1 = document.querySelector("main");
console.log(main1.previousElementSibling);
console.log(
  main1.previousElementSibling.lastElementChild.parentElement.firstElementChild
);

// # NEXT ELEMENT SIBLING
console.log("***NEXT ELEMENT SIBLING***");
console.log(main1.nextElementSibling);
console.log(
  main1.nextElementSibling.previousElementSibling.previousElementSibling
    .nextElementSibling.firstElementChild
);

// # ANOTHER WAY OF ACCESSING DOM ELEMENT
console.log("*** ANOTHER WAY OF ACCESSING DOM ELEMENT ***");
console.log(main1.querySelector("ul"));
console.log(
  navbar.firstElementChild.parentElement.nextElementSibling.querySelector("p")
    .nextElementSibling
);

// # CHECK ATTRIBUTES OF ANY ELEMENT
console.log("CHECK ATTRIBUTES OF ANY ELEMENT");
console.log(main1.lastElementChild.attributes);

// # SET ATTRIBUTES IN ANY ELEMENT
console.log("SET ATTRIBUTES IN ANY ELEMENT");
// inline css
main1.querySelector(".new_class").setAttribute("style", "color:red");

// REAL WORLD EXAMPLE
const div = document.querySelector(".test");
const handleClick = () => {
  div.querySelector("h1").setAttribute("style", "color: red");
};

main1.querySelector(".new_class").style.fontStyle = "italic"; // inline css

main1.querySelector(".new_class").style.border = "2px solid purple"; // inline css

// main1.querySelector('.new_class').style.background-color='skyblue';  // It will not work

main1.querySelector(".new_class").style.backgroundColor = "skyblue"; // inline css

// // internal css & external css : It overwrite the previous class

main1.querySelector(".new_class").setAttribute("class", "test1");
main1.querySelector(".test1").setAttribute("class", "test2");
main1.querySelector(".new_class").setAttribute("class", "test1");

// # GET ATTRIBUTE : access the value of that attribute
console.log("***GET ATTRIBUTE***");

const img = document.querySelector("img");
console.log(img.getAttribute("height"));
console.log(img.getAttribute("src"));
console.log(img.getAttribute("alt"));

// # CREATE ELEMENT
console.log("***CREATE ELEMENT***");

let h2 = document.createElement("h2");
h2.innerText = "Contact Us |";
console.log(h2);
navbar.querySelector("div").appendChild(h2);

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
