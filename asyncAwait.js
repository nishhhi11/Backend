function getBookingStatus() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Booking confirmed");
            resolve();
        }, 2000);
    })
}

async function showStatus() {
    console.log("checking booking status...");
    const result = await getBookingStatus(); 
    console.log(result);
}

showStatus();
console.log("this runs immediately");
