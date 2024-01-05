// ADVANCE TO-DO LIST
let liList = document.querySelectorAll("li");
// we will get a nodelist
const ul = document.querySelector("ul");
const btn = ul.nextElementSibling;
const input = document.querySelector("input");

const completed = () => {
  liList.forEach(li => {
    li.querySelector("button").addEventListener("click", e => {
      li.classList.toggle("completed");
      e.stopPropagation();
    });
  });
};

const removeItem = () => {
  liList.forEach(li => {
    li.addEventListener("click", () => {
      li.remove();
    });
  });
};

btn.addEventListener("click", () => {
  const newLi = document.createElement("li");
  const text = document.createTextNode(input.value);
  const newBtn = document.createElement("button");

  newBtn.innerText = "DONE";
  newBtn.style.backgroundColor = "yellow";

  newLi.appendChild(text);
  newLi.appendChild(newBtn);
  ul.prepend(newLi);
  liList = document.querySelectorAll("li");
  removeItem();
  completed();
  input.value = "";
});

// EVENT BUBBLING & STOP PROPAGATION
console.log("***EVENT BUBBLING***");
const ol = document.querySelector("ol");

// body
ol.parentElement.addEventListener("click", e => {
  ol.parentElement.style.backgroundColor = "pink";
  console.log("hit body");
});

// ol
ol.addEventListener("click", e => {
  ol.style.backgroundColor = "orange";
  console.log("hit ol");
});

// li
const arr = Array.from(ol.children);
arr.forEach(li => {
  li.addEventListener("click", e => {
    e.stopPropagation();
    li.style.backgroundColor = "yellow";
    console.log("hit li");
  });
});

const newUl = document.querySelector("#newUl");

// pranjal's technique
/* const newUlArr = Array.from(newUl.children);
newUlArr.forEach(li => {
  li.addEventListener("click", e => {
    li.remove();
  });
}); */

// sir's technique
newUl.addEventListener("click", e => {
  if (e.target.nodeName === "LI") {
    e.target.remove();
  }
});

// STOP PROPAGATION
console.log("***STOP PROPAGATION***");

// bakwas code
/* let li = document.querySelectorAll("li");

ul.addEventListener("click", function (e) {
  e.target.style.textDecoration = "line-through";
});

li.forEach(function (i) {
  i.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}); */

// PREVENT DEFAULT
console.log("***PREVENT DEFAULT***");

/* const formBtn = document.querySelector("#btn");
formBtn.addEventListener("click", e => {
  console.log("form submitted");
  e.preventDefault();
  console.log(formBtn.parentElement.name.value);
  console.log(formBtn.parentElement.age.value);
}); */

const form = document.querySelector("form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = form.name.value;
  const age = e.target.age.value;
  console.log("form submitted");
  form.nextElementSibling.innerText = `Name: ${name}, Age: ${age}`;
});
