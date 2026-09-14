var totalCartValue = 0;

const taxRate = 0.10;

function addToCart(itemPrice, discount) {

    let discountedPrice = itemPrice - discount;
    let taxAmt = discountedPrice * taxRate;
    let finalPrice = discountedPrice + taxAmt;

    totalCartValue = totalCartValue + finalPrice;

    console.log("Final Price of Item: Rs " + finalPrice.toFixed(2));
}

addToCart(1000, 100);
addToCart(2000, 200);

console.log("Total Cart Value: Rs " + totalCartValue.toFixed(2));