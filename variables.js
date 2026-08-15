//variables - used to store data (var let const)
//var - functional scope , can be redeclared and reassigned 
//let - block scope , can be reassigned but cannot be redeclred - block means curly braces {}
//const - block scope, cannot be reassigned or redeclared


var name = "nishi"; //statements ";" is imp 
var name = "nish"; //redeclared
name = "nishi"; //reassigned

console.log(name);

let age = 19;
//let age = 18; //cannot be redeclared
age = 20; //can be reassigned 

console.log(age);
