// DOUBLE CLICK EVENT
let ul = document.querySelector("ul");
ul.addEventListener("dblclick", function (e) {
  if (e.target.nodeName === "LI") {
    e.target.remove();
  }
});

// LOAD EVENT

window.addEventListener("load", function () {
  newLi = document.createElement("li");
  newLiText = document.createTextNode(
    "New Li, created on loading the page at the time of load event : again"
  );
  newLi.appendChild(newLiText);
  ul.appendChild(newLi);
});

// COPY EVENT
let pOne = document.querySelector(".p-one");
pOne.addEventListener("copy", function (e) {
  e.preventDefault(); // preventing default behavior of pOne's copy event
  alert("This content is protected");
});

// MOUSE MOVE EVENT
let pTwo = document.querySelector(".p-two");
pTwo.addEventListener("mousemove", e => {
  pTwo.style.backgroundColor = `rgb(${e.clientX}, ${e.clientX}, ${e.clientY})`;
});

// CLICK EVENT => ADD CIRCLE
pTwo.addEventListener("click", e => {
  const div = document.createElement("div");
  div.setAttribute(
    "style",
    `width: 20px; height: 20px; border: 1px solid black; border-radius: 50%; position: absolute; top:${e.clientY}px; left:${e.clientX}px `
  );
  pTwo.appendChild(div);
  console.log(e.clientX, e.clientY);
});

/*
// CLICK EVENT
console.log('***'.repeat(3),'CLICK EVENT','***'.repeat(3));

let btn = document.querySelector('button');
let pThree = document.querySelector('.p-three');

btn.addEventListener('click', function(e){
    let r = Math.floor(Math.random()*1000);
    let g = Math.floor(Math.random()*1000);
    let b = Math.floor(Math.random()*1000);
    console.log(r,g,b);
    pThree.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}); */

// POPUP
/* let btn = document.querySelector('button');
let popupClose = document.querySelector('.popup-close');
let popupWrapper = document.querySelector('.popup-wrapper');
let popup = document.querySelector('.popup');

btn.addEventListener('click', function(){
    popupWrapper.style.display = 'flex';
    console.log('clicked');
});
popupClose.addEventListener('click', function(){
    popupWrapper.style.display = 'none';
});
popupWrapper.addEventListener('click', function(){
    popupWrapper.style.display = 'none';
});
popup.addEventListener('click', function(e){
    e.stopPropagation();
}); */
