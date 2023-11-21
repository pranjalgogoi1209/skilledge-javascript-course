// ASYNCHRONOUS : PROMISE HANDLING
// Promises are small arrangement of callback
console.log('...'.repeat(3),'ASYNCHRONOUS : PROMISE HANDLING','...'.repeat(3));

// promise creation
/* let promise = new Promise((resolve, reject) => {
    resolve('Resolved');
    // reject('Rejected');
});
console.log(promise); */

// promise handling
// promise.then(data => console.log(data), err => console.log(err));


// XML HTTP REQUEST : ASYNCHRONOUS
console.log('...'.repeat(3),'XML HTTP REQUEST','...'.repeat(3));

console.log('START');

/* function getTodos(cb){
    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState);
        if(request.readyState === 4 && request.status === 200){
            // convert json to javascritp
            let data = JSON.parse(request.responseText);
            cb(data, undefined);
        } else if(request.readyState === 4){
            cb(undefined ,'Could not fetch data : error');
        }
    });

    // default nature of any http request is asynchronous, that means these codes are running somewhere else and to get those data we need to use call back function

    request.open('GET','https://jsonplaceholder.typicode.com/todos');
    request.send();
}

getTodos((data, err) => {
    console.log(data, err);
}); */

// CALLBACK HELL

/* function getTodos(resource, cb){
    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            let data = JSON.parse(request.responseText);
            cb(data, undefined);
        } else if(request.readyState === 4){
            cb(undefined ,'Could not fetch data : error');
        }
    });

    request.open('GET',resource);
    request.send();
}

getTodos("https://jsonplaceholder.typicode.com/todos/1", (data, err) => {
    console.log(data, err);
    getTodos('https://jsonplaceholder.typicode.com/todos/2', (data, err) => {
        console.log(data, err);
        getTodos('https://jsonplaceholder.typicode.com/todos/3', (data, err) => {
            console.log(data, err);
    });
    });
}); */

// SOLUTION OF CALLBACK HELL USING PROMISE

/* function getTodos(resource){
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
    
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState === 4){
                reject('Could not fetch data');
            }
        });
    
        request.open('GET', resource);
        request.send();
    });
}

// promise chaining is using for solving callback hell problem

getTodos('https://jsonplaceholder.typicode.com/todos/1').then((data) => {
    console.log(data);
    return getTodos('https://jsonplaceholder.typicode.com/todos/2');
})
.then((data) => {
    console.log(data);
    return getTodos('https://jsonplaceholder.typicode.com/todos/3');
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});
// catch method for error. We should use it in the end of the all promises

console.log('END'); */


// FETCH METHOD
/* fetch('https://jsonplaceholder.typicode.com/todos').then((resp) => {
    console.log(resp);
    return resp.json() //It returns a promise
})
.then((data) => {
    console.log(data);
})
.catch((rej) => {
    console.log(rej);
}); */

// Make it simple
fetch('https://jsonplaceholder.typicode.com/todos').then(resp => resp.json())
.then(data => console.log(data))
.catch(rej => console.log(rej));

