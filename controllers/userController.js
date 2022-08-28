const User = require("../models/userModels");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
exports.signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json({ msg: "Success" });
    // res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};
exports.getUserDetails = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({ data: user, msg: "Success" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
exports.getUserById = async (req, res) => {
  try {
    const user = await User.find({ _id: req.params.id });
    console.log(req.params.id);
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.deleteOne({ _id: req.params.id });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
