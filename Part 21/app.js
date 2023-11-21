// REMOVE METHOD
console.log('...'.repeat(3),'REMOVE METHOD', '...'.repeat(3));

/* let li = document.querySelectorAll('li');
li.forEach(function(i){
    i.addEventListener('click',function(e){
        e.target.remove();
    });
}); */

// CREATE ELEMENT
console.log('...'.repeat(3),'CREATE ELEMENT', '...'.repeat(3));

let ul = document.querySelector('ul');
let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let newLi = document.createElement('li');
    let newLiText = document.createTextNode('New challenge');
    newLi.appendChild(newLiText);
    // ul.prepend(newLi);
    ul.append(newLi);
});

// EVENT BUBBLING
console.log('...'.repeat(3),'EVENT BUBBLING', '...'.repeat(3));

/* ul.addEventListener('click', function(e){
    if(e.target.nodeName==='LI'){
        e.target.remove();
    }
}); */

// STOP PROPAGATION
console.log('...'.repeat(3),'STOP PROPAGATION', '...'.repeat(3));

let li = document.querySelectorAll('li');

ul.addEventListener('click', function(e){
    e.target.style.textDecoration = 'line-through';
});
li.forEach(function(i){
    i.addEventListener('click', function(e){
        e.stopPropagation();
    });
});