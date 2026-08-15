// let i = 1;
// while (i<=5){
//     console.log(i++);
//     console.log(++i);
// }

// let pin;
// let attempt = 0;
// do{
//     pin = "1234";
//     attempt++;
//     console.log(`Attempt ${attempt}: PIN checking`);
// }while (pin!="1234 && attempt<3");

//FOR .. IN LOOP
// const person = {
//     name: "PVii",
//     age: 19,
//     city: "Mumbai"
// }
// //console.log(person)//returns object only
// for(let key in person){
//     console.log(`${key}: ${person[key]}`);
// }

//FOR .. OF LOOP
// const person = {
//     name: "PVii",
//     age: 19,
//     city: "Mumbai"
// }
// //console.log(person)//returns object only
// for(let key of person){
//     console.log(`${key}: ${person[key]}`);
// }

//FOR..EACH LOOP (!!IMPORTANT!!)
// const nums = [10,20,30,40];
// nums.forEach((num)=>{
//     console.log(num);
// })

//TASK: writing 2 table using for & while loop.
let i = 1;
while (i <= 10) {
    let n = i++;
    console.log("2 x " + i, " = " + (2 * n));
}