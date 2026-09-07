// Function to generate multiplication table
function generateMultiplicationTable(n) {

    /*
    Generate the multiplication table
    from 1 to 10 using a for loop.
    */

    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}

generateMultiplicationTable(7);