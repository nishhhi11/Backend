function trackOrder() {
    return new Promise((resolve, reject) => {
        console.log("Order placed, preparing food...");

        setTimeout(() => { }, 3000);

    });
    }

trackOrder(true).then.catch.finally