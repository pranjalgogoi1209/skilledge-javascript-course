// APPEND CHILD => It always expect a node
let main = document.querySelector("main");
let h2 = document.createElement("h2");
h2.innerText = "I am innerText of custom h2 element |";
main.appendChild(h2);

// TEXT NODE
let h3 = document.createElement("h3");
let h3Text = document.createTextNode("I am h3 text node");
// h3.innerText = h3Text; // not possible bcz h3Text is a node
h3.appendChild(h3Text);
main.appendChild(h3);
console.log(h3);

// REMOVE AN ELEMENT
let a = document.querySelector("a");
setTimeout(() => {
  a.remove();
}, 2000);

// CLASSLIST
let span = document.querySelector("span");
// setAttribute will replace old classes
// span.setAttribute("class", "new-class");

// CLASSLIST.ADD() => it will not replace old classes
span.classList.add("four");
span.classList.add("five");

// # REMOVE A CLASS FROM AN ELEMENT
span.classList.remove("three");
console.log(span.classList);

// // # FOR LOOP IN THE ARRAY OF ELEMENTS & TEXT CONTENT METHOD

const section = document.querySelector("section");
const allPara = Array.from(section.children); // converting htmlCollection to Array
console.log(allPara);

for (let p of allPara) {
  p.style.color = "white";
  if (p.innerText.includes("success")) {
    p.style.backgroundColor = "green";
  } else if (p.innerText.includes("fail")) {
    p.style.backgroundColor = "red";
  }
}
