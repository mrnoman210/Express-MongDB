const { Schema } = require("mongoose");
const mongoose = require("mongoose");
require("dotenv").config();
const url =
  process.env.MONGODBURL ||
  "mongodb+srv://admin23:admin23@cluster0.obkqkro.mongodb.net/?retryWrites=true&w=majority";

const connectDB = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("connnect to database");
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = connectDB;
