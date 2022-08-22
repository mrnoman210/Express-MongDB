const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  First_Name: { type: String, required: [true, "Please enter your name"] },
  Last_Name: { type: String, required: [true, "Please enter your name"] },
  password: { type: String, required: true, min: 8, max: 16 },
  Confirm_password: { type: String, required: true, min: 8, max: 16 },
  Date: { type: Date },
  Gender: { type: String },
});

const Tank = mongoose.model("Tank", userSchema);
Tank.insertMany([{ size: "small" }], function (error) {
  if (error) {
    console.log(error);
  }
});
module.exports = mongoose.model("Tank", userSchema);
