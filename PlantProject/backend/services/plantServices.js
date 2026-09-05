const fs = require('fs');

const FILE = "./plants.json";

function getPlants() {
    return JSON.parse(fs.readFileSync(FILE, "utf8"));
}

function savePlants(plants) {
    fs.writeFileSync(FILE, JSON.stringify(plants, null, 2));
}

module.exports = { getPlants, savePlants };