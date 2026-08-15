//scope - global , functional , block
//global - can be accessed anywhere in the program
//functional - can be accessed inside the function 
//block - can be accessed inside the block

var a = 10;
let b = 20;
const c = 30;

if (true) {
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(a);
console.log(b);
console.log(c);