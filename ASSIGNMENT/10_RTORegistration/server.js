const fs = require("fs");

const vehicle = {
    studentName: "Ram",
    collegeId: "C109",
    vehicleNumber: "MH14XY5689",
    vehicleType: "Bike",
    registrationDate: "2026-09-17"
};

const fileName = __dirname + "/rto_data.json";

fs.readFile(fileName, (err, data) => {

    let vehicles = [];

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
            }
            else {
                console.log("Vehicle data saved successfully");
            }
        }
    );
});