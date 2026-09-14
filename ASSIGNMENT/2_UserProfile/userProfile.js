let userName = "Nishi";
let userAge = 19;
let isPremiumUser = true;
let userBio = null;
let userId = Symbol("userId");

let userAddress = {
    city: "Mumbai",
    country: "India"
};

let favoriteItems = ["Laptop", "Phone", "Headphones"];

function getUserGreeting() {
    return "Hello " + userName + "!";
}

console.log("User Name: " + userName);
console.log("City: " + userAddress.city);
console.log("Third Favorite Item: " + favoriteItems[2]);
console.log(getUserGreeting());