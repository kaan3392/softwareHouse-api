const asyncErrorWrapper = require("express-async-handler");
const Car = require("../models/Car");

const addCar = asyncErrorWrapper(async (req, res, next) => {
  const information = req.body;
  const car = await Car.create(information);
  res.status(200).json({
    success: true,
    data: car,
  });
});


const getAllCars = asyncErrorWrapper(async (req, res, next) => {
  const cars = await Car.find();
  res.status(200).json({
    success: true,
    data: cars,
  });
});

const getCar = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const car = await Car.findById(id);
  res.status(200).json({
    success: true,
    data: car,
  });
});

const updateCar = asyncErrorWrapper(async (req, res, next) => {
  const updatedCar = await Car.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: updatedCar,
  });
});

const deleteCar = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  await Car.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    data: { message: "Car deleted successfully" },
  });
});

module.exports = {
  addCar,
  getAllCars,
  getCar,
  updateCar,
  deleteCar,
};
