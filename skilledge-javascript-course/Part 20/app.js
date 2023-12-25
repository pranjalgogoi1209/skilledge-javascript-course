// ## DOM TRAVERSAL
// # CHILDREM PROPERTY
console.log("....".repeat(3), "CHILDREM PROPERTY", "....".repeat(3));

let article = document.querySelector("article");
console.log(article.children);

// # STRING CONSTRUCTOR
console.log("....".repeat(3), "STRING CONSTRUCTOR", "....".repeat(3));

let str = String(12345);
console.log(str);
console.log(typeof str);

// # ARRAY CONSTRUCTOR : It helps to convert html collection to array, for the use of forEach
console.log("....".repeat(3), "ARRAY CONSTRUCTOR", "....".repeat(3));

// converting htmlCollection to Array
let arr = Array.from(article.children);
arr.forEach(function (i) {
  console.log(i);
});

// # PARENT ELEMENT PROPERTY
console.log("....".repeat(3), "PARENT ELEMENT PROPERTY", "....".repeat(3));

let li = document.querySelector("li");
console.log(li.parentElement);
console.log(li.parentElement.parentElement);

// # FIRST ELEMENT CHILD PROPERTY
console.log("....".repeat(3), "FIRST ELEMENT CHILD PROPERTY", "....".repeat(3));

let ul = document.querySelector("ul");
console.log(ul.firstElementChild);

// # LAST ELEMENT CHILD PROPERTY
console.log("....".repeat(3), "LAST ELEMENT CHILD PROPERTY", "....".repeat(3));

console.log(ul.lastElementChild);

// # NEXT ELEMENT SIBLING PROPERTY
console.log("....".repeat(3), "NEXT ELEMENT SIBLING", "....".repeat(3));

console.log(li.nextElementSibling);

// # PREVIOUS ELEMENT SIBLING PROPERTY
console.log(
  "....".repeat(3),
  "PREVIOUS ELEMENT SIBLING PROPERTY",
  "....".repeat(3)
);

console.log(li.nextElementSibling.previousElementSibling);
console.log(li.previousElementSibling);

// ## ADD EVENT LISTNER METHOD
// # CLICK
console.log(
  "....".repeat(3),
  "ADD EVENT LISTNER METHOD : CLICK",
  "....".repeat(3)
);

let btn = document.querySelector("button");
let count = 0;
btn.addEventListener("click", function () {
  count += 1;
  const output = document.querySelector(".output");
  if (count === 1) {
    console.log("clicked");
    output.firstElementChild.innerText =
      "Congratulationson completing 7 days hard miracle morning challenge";
  } else if (count === 2) {
    console.log("clicked");
    output.style.backgroundColor = "green";
  } else {
    console.log("clicked");
    alert("You have clicked more than two times");
    let body = document.querySelector("body");
    body.innerHTML =
      "<h1>Congratulations on completing 7 days hard miracle morning challenge</h1>";
  }
});

// # FOREACH METHOD
console.log("....".repeat(3), "FOREACH METHOD", "....".repeat(3));

let num = [1, 2, 3, 4, 5];

// forEach array method takes 3 parameters
// first one => element
// second one => index number
// third one => array
// we have to iterate every element with forEach, Can't use break, continue

num.forEach(function (ele, ind, arr) {
  console.log(ele, ind, arr);
});

for (let i of num) {
  if (num.indexOf(i) === 2) {
    continue;
  }
  console.log(i, num.indexOf(i), num);
}

// # TO DO LIST
console.log("....".repeat(3), "TO DO LIST", "....".repeat(3));

let section = document.querySelector("section");
let li2 = section.children[1].children;
let li2Arr = Array.from(li2);
console.log(li2Arr);

li2Arr.forEach(function (i) {
  i.addEventListener("click", function (e) {
    console.log(e.target);
    // e.target.style.textDecoration = 'line-through';
    e.target.classList.add("line");
    // i.classList.add('line');
  });
});
