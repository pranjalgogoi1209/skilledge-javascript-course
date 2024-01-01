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

// // EVENT BUBBLING
// console.log('...'.repeat(3),'EVENT BUBBLING', '...'.repeat(3));

// /* ul.addEventListener('click', function(e){
//     if(e.target.nodeName==='LI'){
//         e.target.remove();
//     }
// }); */

// // STOP PROPAGATION
// console.log('...'.repeat(3),'STOP PROPAGATION', '...'.repeat(3));

// let li = document.querySelectorAll('li');

// ul.addEventListener('click', function(e){
//     e.target.style.textDecoration = 'line-through';
// });
// li.forEach(function(i){
//     i.addEventListener('click', function(e){
//         e.stopPropagation();
//     });
// });
