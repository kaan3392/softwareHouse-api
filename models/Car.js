const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CarSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a content"],
    minlength: [3, "Please provide at least 3 characters"],
    trim: true,
  },
  brand: {
    type: String,
    required: [true, "Please provide a brand"],
    minlength: [3, "Please provide at least 3 characters"],
    trim: true,
  },
  imageUrl: {
    type: String,
    
  },
  productionYears: {
    type: String,
    trim:true,
    required: [true, "Please provide a production year"],

  },
  cylinderVolume: {
    type: String,
    trim:true,
    required: [true, "Please provide a cylinder volume"],
  },
  maximumHorsepower: {
    type: String,
    trim:true,
    required: [true, "Please provide a maximum horsepower"],
  },
  weight: {
    type: String,
    trim:true,
    required: [true, "Please provide a weight"],
  },
  fuelConsumptionAverage: {
    type: String,
    trim:true,
    required: [true, "Please provide a fuel consumption average"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Car", CarSchema);
