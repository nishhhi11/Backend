const fs = require("fs");

const vehicle = {
    studentName: "Nishi",
    collegeId: "C104",
    vehicleNumber: "MH14XY5679",
    vehicleType: "Scooter",
    registrationDate: "2026-09-07"
};

const fileName = "rto_data.json";

fs.readFile(fileName, "utf8", (err, data) => {

    let vehicles = [];

    /*
    If the file exists, read the existing data.
    Otherwise, start with an empty array.
    */

    if (!err) {
        vehicles = JSON.parse(data);
    }

    vehicles.push(vehicle);

    fs.writeFile(
        fileName,
        JSON.stringify(vehicles, null, 2),
        (err) => {
            if (err) {
                console.log("Error saving data");
            } else {
                console.log("Vehicle data saved successfully");
            }
        }
    );
});