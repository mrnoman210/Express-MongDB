const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String, required: true, min: 8, max: 16 },
  gender: { type: String },
});

const userModel = new mongoose.model("users", userSchema);

module.exports = userModel;
