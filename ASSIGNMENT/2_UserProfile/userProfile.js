// Primitive data types
let userName = "Nishi";
let userAge = 19;
let isPremiumUser = true;
let userBio = null;
let userId = Symbol("userId");

// Non-primitive data types
let userAddress = {
    city: "Mumbai",
    country: "India"
};

let favoriteItems = ["Laptop", "Phone", "Headphones"];

// Function to return a personalized greeting
function getUserGreeting() {
    return "Hello " + userName + "!";
}

// Display user information
console.log("User Name: " + userName);
console.log("City: " + userAddress.city);
console.log("Third Favorite Item: " + favoriteItems[2]);
console.log(getUserGreeting());