const express = require("express");
const {
  addCar,
  getAllCars,
  getCar,
  updateCar,
  deleteCar,
} = require("../controllers/car");
const router = express.Router();

router.post("/", addCar);
router.get("/", getAllCars);
router.get("/:id", getCar);
router.put("/:id/update", updateCar);
router.delete("/:id/delete", deleteCar);


module.exports = router;