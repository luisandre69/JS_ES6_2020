// var

console.log("var")
for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

//var i does still run outside the for loop

// let

console.log("let")
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

// returns a error as let its only accesible on let

// const 

console.log("const")
for (const i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

// will return error as const cant be changed

//redeclare

/*
var can be redeclared/reused
let and const cant
*/

//redefined

/*
var can let be redefined. changed to a new value
const cant
*/