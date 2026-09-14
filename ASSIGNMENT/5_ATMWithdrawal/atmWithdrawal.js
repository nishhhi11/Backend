// function atmWithdrawal(balance, withdrawAmount) {

//     while (true) {
//         if (withdrawAmount > balance) {
//             console.log("Insufficient balance");
//             break;
//         }

//         balance = balance - withdrawAmount;
//         console.log("Withdrawal successful");
//         console.log("Remaining Balance: " + balance);

//         withdrawAmount = 200;

//         if (withdrawAmount > balance) {
//             console.log("Insufficient balance");
//             break;
//         }
//     }
// }

// atmWithdrawal(1000, 300);

// function atmWithdrawal(balance) {

//     while (true) {

//         let withdrawAmount = Number(prompt("Enter withdrawal amount: "));

//         if (withdrawAmount > balance) {
//             console.log("Insufficient balance");
//             break;
//         }

//         balance = balance - withdrawAmount;

//         console.log("Withdrawal successful");
//         console.log("Remaining Balance: " + balance);
//     }
// }

// atmWithdrawal(1000);