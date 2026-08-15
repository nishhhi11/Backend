//javascript basics 
//data types  
var a = 34; //number
var str = "nishi"; var str = 'nishi'; var str = `nishi`;//string 
var isReady = true || false; //boolean
//urinary operator - incr decr (++)(--)
var value = null;
var b = undefined;

console.log(typeof(a))
console.log(typeof (null))

//user defined data types
var user = {
    name: "nishi",
    age: 19,
    isAdmin: true,
};

console.log(user.name);

const key = "name";
console.log(user[key]);

//type corsion 
console.log(3 + "4")

//normal function 
function myFun() {
    
}
myFun(Callback);

//arrow function 
const myFunc = () => console.log("New Func")
