// Function to find the first even number
function findFirstEven(arr) {
    let i = 0;

    /*
    Check each element using do-while.
    Continue when the number is odd.
    */

    do {
        if (arr[i] % 2 !== 0) {
            i++;
            continue;
        }

        return arr[i];

    } while (i < arr.length);

    return undefined;
}

let numbers = [7, 9, 13, 18, 21, 24];

console.log("First Even Number: " + findFirstEven(numbers));