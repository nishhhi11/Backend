const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Kamm successfully complete ho gaya");
    } else {
        reject("Kamm complete nahi ho paya");
    }
});

myPromise
    .then()
    .catch()
    .finally()
