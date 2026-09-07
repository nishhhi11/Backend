// Global variable to store the total cart value
var totalCartValue = 0;

const taxRate = 0.10;

function addToCart(itemPrice, discount) {

    /*
    Calculate the discounted price
    and add 10% tax to it.
    */

    let discountedPrice = itemPrice - discount;
    let taxAmount = discountedPrice * taxRate;
    let finalPrice = discountedPrice + taxAmount;

    totalCartValue = totalCartValue + finalPrice;

    console.log("Final Price of Item: ₹" + finalPrice.toFixed(2));
}

addToCart(1000, 100);
addToCart(2000, 200);

console.log("Total Cart Value: ₹" + totalCartValue.toFixed(2));