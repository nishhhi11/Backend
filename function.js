function nameofFunction(/*parameters*/) {
    //function body
}

function welcome(name) {
    console.log("welome" +" " + name);
}

welcome("john");
welcome("doe");


//types of function : normal - we use func keyword and arrow /fat arrow - shorterversion 

//this keyword is used to refer to the current object in which the function is being executed. In normal functions, this refers to the object that called the function, while in arrow functions, this refers to the enclosing lexical context.

//hoisting - function declarations are hoisted to the top of their scope, meaning they can be called before they are defined in the code. Function expressions, on the other hand, are not hoisted and can only be called after they are defined.

//Syntax
// function nameoffunction(parameters){
//     function body;
// }

// console.log("Welcome PVii");
// console.log("Welcome AVii");
// console.log("Welcome APii");
// console.log("Welcome SNii");
// console.log("Welcome OGii");

//CASE OF :  FUNCTION HOISTING
// Welcome ("PVii");
// Welcome ("APii");

// function Welcome (name) {
//     console.log("Welcome" + name);
// }


//ARROW FUNCTION
//  const add = (a,b) => { //function expression
//     return a+b;
//  }
//  console.log(add(3,9));
