// Variable Hoisting
// console.log(a);
// var a = 10; // hoisting doe snot work with 'CONST' & 'LET'-> gives TDZ. 
// console.log(a);

// var a = 10;
// console.log(a);
// console.log(a);

//TDZ = TEMPORARY DEAD ZONE


var greet = function () {
    console.log("Hello") // hoisting does not work with function expression.
}
greet()