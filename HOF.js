//HOF -> HIGHER ORDER FUNCTION.
// function greet(name){
//     return `Hello ${name}`
// }

// function processUser(name, callbackfunction){
//     console.log(callbackfunction(name))
// }

// processUser("PVii", greet);

// function createDiscount(discountPercent){
//     return function(price){
//         return price - (price * discountPercent)/100;
//     };

// }

// const festivalDiscount = createDiscount(20);
// const clearDiscount = createDiscount (50);

// console.log(festivalDiscount(1000));
// console.log(createDiscount(1000));

//setTimeout(), map(), reduce(), 

//example for setTimeout
// console.log("Hello1");
// setTimeout(function(){
//     console.log("Hello2 after 3 seconds");
// },10000)
// console.log("Hello3");

//example of Map() (!!IMPORTANT!!)
// const numbers = [1,2,3,4,5];
// const result = numbers.map((num)=>{
//     return num*2;
// })
// console.log(numbers);
// console.log(result);

// const num = [10,20,30,40]

// num.map(function(element, index, arr){
//     console.log(element);
//     console.log(index);
//     console.log (arr)
// })

//'filter()' -> always works in True or False (!!IMPORTANT!!)
// const val = [10,8,2,4,1,5,7,22];
// const ans = val.filter((num)=> {
//     return num%2==0;  //filter() checks true/false
// });
// console.log(ans);


//to filter and print names with "A" in it.
// const users = ["Paarshvi", "Abhishek", "Nandini"];

// const result = users.filter(
//     name => name.startsWith("A")
// );
// console.log(result);

//'reduce()' (!!IMPORTANT!!)
//SUM OF ARRAY BY REDUCE()

// const numbers = [10,20,30,40,50];
// const result = numbers.reduce((sum,num)=>{
//     return sum+num;
// },0);

// console.log(result);

//USING SYNTAX OF REDUCE TO FIND SUM
// const numbers = [10,20,30,40,50];
// const result = numbers.reduce((acc,value,index,array)=>{
//     console.log("acc:",acc);
//     console.log("value:",value);
//     console.log("index:",index);
//     console.log("array:",array);
//     return acc+value;
// },0);

// console.log(result);

//MAX & MIN OF ARRAY USING REDUCE()
// const numbers = [10,20,300,40,50];
// const max = numbers.reduce((max,num)=>{
//     return num>max ? num:max;
// },0);
// const min = numbers.reduce((min,num)=>{
//     return num<min ? num:min;
// },0);

// console.log(max);
// console.log(min);

//Finding Repetition of numbers using REDUCE()
const numbers = [10, 20, 10, 30, 20, 10, 40];

const result = numbers.reduce((acc, num) => {
    if (acc[num]) {
        acc[num]++;
    } else {
        acc[num] = 1;
    };
    return acc;
}, {});

console.log(result);