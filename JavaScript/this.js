//"this" KEYWORD -> is a referance POINTER.

//console.log(this);
// function show(){
//     console.log(this);   
// }
// show();

//OBJECT -> NON PRIMITIVE DATA TYPE
const user = {
    name: PVii,
    age: 19,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const myGreet = user.greet;
myGreet();