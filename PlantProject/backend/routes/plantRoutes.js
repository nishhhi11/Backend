const express = require("express");
const router = express.Router();

const { getAllPlants, addPlant, updatePlant, deletePlant } = require('../controllers/plantController');

router.get("/plants", getAllPlants);
router.post("/plants", addPlant);
router.put("/plants/:id", updatePlant);
router.delete("/plants/:id", deletePlant);

module.exports = router;