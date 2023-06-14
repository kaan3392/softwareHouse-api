const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/connectDB");
const router = require("./routers/car");
const customErrorHandler = require("./middlewares/customErrorHandler");
const cors = require("cors");



const app = express();

app.use(cors());


dotenv.config({
  path: "./config/env/config.env",
});

//MongoDB connection

connectDatabase();

//Express Body Middleware

app.use(express.json());

const PORT = process.env.PORT || 5000;

//Routers middlewares

app.use("/api", router);

//Error handlers

app.use(customErrorHandler);

// Server Connection

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
