function findFirstEven(arr) {
    let i = 0;

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