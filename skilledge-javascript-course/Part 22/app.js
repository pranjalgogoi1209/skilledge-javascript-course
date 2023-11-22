/* // DOUBLE CLICK EVENT
console.log('***'.repeat(3),'DOUBLE CLICK EVENT','***'.repeat(3));

let ul = document.querySelector('ul');
ul.addEventListener('dblclick', function(e){
    e.target.remove()
});

// LOAD EVENT
console.log('***'.repeat(3),'LOAD EVENT','***'.repeat(3));

window.addEventListener('load', function(){
    newLi = document.createElement('li');
    newLiText = document.createTextNode('New Li, created on loading the page');
    newLi.appendChild(newLiText);
    ul.appendChild(newLi);
});

// COPY EVENT
console.log('***'.repeat(3),'COPY EVENT','***'.repeat(3));

let pOne = document.querySelector('.p-one');
pOne.addEventListener('copy', function(e){
    alert('Content is protected');
});

// MOUSE MOVE EVENT
console.log('***'.repeat(3),'COPY EVENT','***'.repeat(3));

let pTwo = document.querySelector('.p-two');
pTwo.addEventListener('mousemove', function(e){
    console.log(e.offsetX, e.offsetY);
    pTwo.style.backgroundColor = `rgb(0,${e.offsetX},${e.offsetY})`;
});

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
let btn = document.querySelector('button');
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
});
