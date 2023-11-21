// ASYNCHRONOUS JAVASCRIPT : Non blocking in single thread

// WINDOW OBJECT : It's super object or main object of javascript, It's called Browser object model (BOM)

// DOCUMENT OBJECT : It's come inside window object

// ASYNCHRONOUS : SET TIME OUT
console.log('...'.repeat(3), 'ASYNCHRONOUS : SET TIME OUT', '...'.repeat(3));

let func = () => 'It is a function';
console.log('START');

/* setTimeout(() => {
    console.log('It is setTimeout function');
}, 3000); */

console.log(func());
console.log('END');

// ASYNCHRONOUS : SET TIME OUT : PROBLEM
console.log('...'.repeat(3), 'ASYNCHRONOUS : SET TIME OUT : PROBLEM', '...'.repeat(3));

let func2 = () => 'It is a function';
console.log('START');

let returnedValue = setTimeout(() => 'It is setTimeout function and it is returning', 3000);
console.log(returnedValue);
// Problem is setTimeout() function is not returning anything

console.log(func2());
console.log('END');

// ASYNCHRONOUS : SET TIME OUT : SOLUTION
console.log('...'.repeat(3), 'ASYNCHRONOUS : SET TIME OUT : SOLUTION', '...'.repeat(3));

/* console.log('START');

let sol = (cb) => {
    setTimeout(() => {
        let str = 'It is setTimeout function and it is returning';
        cb(str);
    }, 3000);
}

sol(r => {
    console.log(r);
});

console.log('END'); */

// NETFLIX
console.log('...'.repeat(3), 'NETFLIX', '...'.repeat(3));

console.log('START');

function signUp(cb) {
    setTimeout(() => {
        cb({email : 'gogoipranjal2019@gmail.com', userDetails : {userName : 'PRANJAL GOGOI', Age : 24}});
    }, 3000);
}

function videos(cb) {
    setTimeout(() => {
        let films = ['JAWAN', 'PATHAN', 'PARASITE'];
        cb(films);
    }, 2000);
}

function videoDetails(film, cb) {
    setTimeout(() => {
        let filmDetails = {title : film, director : 'ATLEE', producer : 'GAURI KHAN'};
        cb(filmDetails);
    }, 1000);
}


signUp((signIn) => {
    console.log(`${signIn.userDetails.userName}, You are Signed In`);
    
    videos((films) => {
        console.log(films);
        
        videoDetails(films[0], (filmDetails) => {
            console.log(`Title : ${filmDetails.title}, Directed by ${filmDetails.director}, Produced by ${filmDetails.producer}`);
        });
    });
});
// It makes callback hell , that's why we need promises

console.log('END');


// PROMISE CREATION
console.log('...'.repeat(3), 'PROMISE CREATION', '...'.repeat(3));

// pending state
/* let promise = new Promise(() => {

}); */

let promise = new Promise((resolve, reject) => {
    let obj = {email : 'gogoipranjal2019@gmail.com', userDetails : {userName : 'PRANJAL GOGOI', Age : 24}}
    resolve(obj);
    
    // reject('Pranjal Gogoi promise rejection error');
});
// we can call only one callback function
console.log(promise);
