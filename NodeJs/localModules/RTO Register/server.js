const fs = require("fs");

const vehicle = {
    studentName: "Nishi",
    collegeId: "C104",
    vehicleNumber: "MH14XY5679",
    vehicleType: "Scooty",
    registrationDate: "2026-08-30"
};

const fileName = "rto_data.JSON";

fs.readFile(fileName, "utf8", (err, data) => {

    let vehicles = [];

    if (!err) {
        vehicles = JSON.parse(data);
    }

    vehicles.push(vehicle);

    fs.writeFile(
        fileName,
        JSON.stringify(vehicles),
        (err) => {
            if (err) {
                console.log("Error saving data");
            } else {
                console.log("Vehicle data saved successfully");
            }
        }
    );
});