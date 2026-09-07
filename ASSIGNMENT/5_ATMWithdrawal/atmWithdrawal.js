// Function to simulate ATM withdrawal
function atmWithdrawal(balance, withdrawAmount) {

    /*
    Keep processing the withdrawal
    until the balance is insufficient.
    */

    while (true) {
        if (withdrawAmount > balance) {
            console.log("Insufficient balance");
            break;
        }

        balance = balance - withdrawAmount;
        console.log("Withdrawal successful");
        console.log("Remaining Balance: " + balance);

        withdrawAmount = 200;

        if (withdrawAmount > balance) {
            console.log("Insufficient balance");
            break;
        }
    }
}

atmWithdrawal(1000, 300);