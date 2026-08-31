// console.log("step1");
// console.log("step2");

// setTimeout(() => {
//     console.log("Executing step3 after 3 seconds");
// }, 3000);

// console.log("step3");
// console.log("step4");

//printing numbers in order with delay using aysnc

// console.log(1);

// setTimeout(() => {
//     console.log(2);
// }, 3000);

// setTimeout(() => {
//     console.log(3);
// }, 6000);

setTimeout(() => {
    console.log("1");

    setTimeout(() => {
        console.log("2");

        setTimeout(() => {
            console.log("3");
        }, 3000);

    }, 3000);

}, 0);

console.log("4");
