const { Schema } = require("mongoose");
const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGODBURL;

const connectDB = () => {
  mongoose.connect(url);
};
module.exports = connectDB;
