// INJECTING CUSTOM CREATED HTML ELEMENT NODE INTO DOM

let main = document.querySelector("main");
let h2 = document.createElement("h2");
console.dir(h2);
h2.innerText = "I am innerText of custom h2 element";
main.appendChild(h2);

// CREATE TEXT NODE

// let h3 = document.createElement('h3');
// let h3Text = document.createTextNode('I am h3 text node');
// h3.appendChild(h3Text);
// let div = document.querySelector('div');
// div.appendChild(h3);

// // # REMOVE AN ELEMENT
// console.log('....'.repeat(3),'REMOVE AN ELEMENT','....'.repeat(3));

// let a = document.querySelector('a');
// a.remove();

// // # CHECK CLASS LIST OF ANY ELEMENT
// console.log('....'.repeat(3),'CHECK CLASS LIST OF ANY ELEMENT','....'.repeat(3));

// let span = document.querySelector('span');
// console.log(span);
// console.log(span.classList);
// // using setAttribute will remove the current classes
// span.setAttribute('class','new-class');

// // # ADD NEW CLASS IN AN ELEMENT WITHOUT OVERWRITING THE PREVIOUS CLASS
// console.log('....'.repeat(3),'ADD NEW CLASS IN AN ELEMENT','....'.repeat(3));

// span.classList.add('four');
// span.classList.add('five');
// console.log(span.classList);

// // # REMOVE A CLASS FROM AN ELEMENT
// console.log('....'.repeat(3),'REMOVE A CLASS FROM AN ELEMENT','....'.repeat(3));

// span.classList.remove('four');
// console.log(span.classList);

// // # FOR LOOP IN THE ARRAY OF ELEMENTS & TEXT CONTENT METHOD
// console.log('....'.repeat(1),'FOR LOOP IN THE ARRAY OF ELEMENTS & TEXT CONTENT METHOD','....'.repeat(1));

// let pera = document.querySelectorAll('.s-p');
// for(let i=0; i<pera.length; i++){
//     if(pera[i].textContent.includes('success')){
//         pera[i].classList.add('success');
//     }else{
//         pera[i].classList.add('fail');
//     }
// }
