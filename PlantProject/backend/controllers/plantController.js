const { getPlants, savePlants } = require("../services/plantServices");

function getAllPlants(req, res) {
    res.json(getPlants());
}

function addPlant(req, res) {
    const plants = getPlants();

    const newPlants = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price,
    };

    plants.push(newPlants);
    savePlants(plants);
    res.status(201).json(newPlants);
}

function updatePlant(req, res) {
    const id = Number(req.params.id);
    const plants = getPlants();
    const plant = plants.find((p) => p.id === id);

    if (!plants) {
        return res.status(404).json({
            message: "Plant Not Found",
        });
    }

    plant.name = req.body.name;
    plant.price = req.body.price
    savePlants(plants);
    res.json(plant);
}

function deletePlant(req, res) {
    const id = Number(req.params.id);
    const plants = getPlants();
    const updatedPlants = plants.filter((p) => p.id !== id);
    savePlants(updatedPlants);

    res.json({
        message: "Plant Deleted",
    })
}


module.exports = { getAllPlants, addPlant, updatePlant, deletePlant };