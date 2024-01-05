// ARROW FUNCTION
console.log('...'.repeat(3),'ARROW FUNCTION','...'.repeat(3));

let arr = [5,78,43,23,54];
arr.forEach((i,j)=>{
    console.log(i,j);
});

let func = i => i**2;
let res = func(6);
console.log(res);

// FORM-SUBMIT
console.log('...'.repeat(3),'FORM-SUBMIT','...'.repeat(3));

let signupForm = document.querySelector('.signup-form');
let userName = document.querySelector('#username');

/* signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let body = document.querySelector('body');
    body.innerHTML=`<h1 style='color:red;'>Congratulations....! You have successfully signup your account. Your USERNAME is : ${signupForm.username.value} and Your PASSWORD is : ${signupForm.password.value}</h1>`;
}); */

// INPUT EVENT
console.log('...'.repeat(3),'INPUT EVENT','...'.repeat(3));

/* userName.addEventListener('input',()=>{
    console.log(userName.value);
}); */

// KEYPRESS EVENT
console.log('...'.repeat(3),'KEYPRESS EVENT','...'.repeat(3));

/* userName.addEventListener('keypress',()=>{
    console.log(userName.value);
}); */

// KEYUP EVENT
console.log('...'.repeat(3),'KEYUP EVENT','...'.repeat(3));

/* userName.addEventListener('keyup',()=>{
    console.log(userName.value);
}); */

// KEYDOWN EVENT
console.log('...'.repeat(3),'KEYDOWN EVENT','...'.repeat(3));

/* userName.addEventListener('keydown',()=>{
    console.log(userName.value);
}); */

// FOCUS EVENT
console.log('...'.repeat(3),'FOCUS EVENT','...'.repeat(3));

userName.addEventListener('focus',()=>{
    console.log('Event, triggered');
});

// PREVENT DEFAULT
