// ASYNC AND AWAIT
// To make any function asynchronous, we use async keyword
// We use await inside asynchronous function to handle promise
console.log('...'.repeat(3), 'ASYNC AND AWAIT', '...'.repeat(3));

/* let getTodos = async () => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(respond => respond.json())
    .then(data => console.log(data))
    .catch(rej => console.log(rej));
}

getTodos(); */

// handling promise with the help of await

/* let getTodos = async () => {
    let respond = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await respond.json();
    console.log(data);
}
getTodos(); */

// If we call a async function we get a promise

/* let getTodos = async () => {
    let respond = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await respond.json();
    return data;
}
getTodos().then(result => console.log(result))
.catch(rej => console.log(rej)); */

// THROW NEW ERROR

let getTodos = async () => {
    let respond = await fetch('https://jsonplaceholder.typicod.com/todos');
    if(respond.status !== 200){
        throw new Error('Can not fetch the data at get todos');
    }
    let data = await respond.json();
    return data;
}
getTodos().then(data => console.log(data))
.catch(err => console.log(err.message));


