// STRING CONSTRUCTOR
console.log("***STRING CONSTRUCTOR***");
let str = String(12345);
console.log(str);
console.log(typeof str);

// # ARRAY CONSTRUCTOR
console.log("***ARRAY CONSTRUCTOR***");
const article = document.querySelector("article");
// converting htmlCollection to Array
let arr = Array.from(article.children);
// It helps to convert html collection to array, for the use of forEach
arr.forEach(function (i) {
  console.log(i);
});

// ON CLICK
const handleClick = () => {
  console.log(Math.random());
};

// ADD EVENT LISTNER
// CLICK
let btn = document.querySelector("button");
const output = document.querySelector(".output");
btn.addEventListener("click", e => {
  output.firstElementChild.innerText = "CLICKED";
  output.firstElementChild.style.backgroundColor = "skyblue";
  console.log(e.target);
});

// TO DO LIST
let ul = document.querySelector("#toDos");
let allLi = Array.from(ul.children);

allLi.forEach(li => {
  li.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
    // e.target.style.textDecoration = "line-through";
  });
});

// toggle
/* let isLine = true;
allLi.forEach(li => {
  li.addEventListener("click", () => {
    if (isLine) {
      li.style.textDecoration = "line-through";
      isLine = false;
    } else {
      li.style.textDecoration = "none";
      isLine = true;
    }
  });
}); */
