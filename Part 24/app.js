// FUNCTION SCOPE : VAR
console.log('...'.repeat(3),'FUNCTION SCOPE : VAR', '...'.repeat(3));

if(true){
    var roll1 = 5;
}
let func = () => {
    var age1 = 23;
}

console.log(roll1);
//VAR IS FUNCTION SCOPE
// console.log(age1); 


// BLOCK SCOPE : LET & CONST
console.log('...'.repeat(3),'BLOCK SCOPE : LET & CONST', '...'.repeat(3));

if(true){
    let roll2 = 5;
    const num = 6;
}
let func2 = () => {
    let age2 = 23;
}

// LET & CONST IS BLOCK SCOPE
// console.log(roll2);
// console.log(num);
// console.log(age2);
