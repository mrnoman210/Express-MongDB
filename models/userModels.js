const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    password: { type: String, min: 8, max: 16, required: true, unique: true },
    email: { type: String, unique: true, required: true },
  },
  { timestamps: true }
);

const User = new mongoose.model("checkExpress", userSchema);

module.exports = User;
