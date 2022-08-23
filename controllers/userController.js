const userModel = require("../models/userModels");

exports.getAllUsers = async (req, res) => {
  try {
    const user = await find();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};
exports.getUserDetails = async (req, res) => {
  try {
    const user = await userModel.insertOne(req.body);
    res.status(200).json({ data: user, msg: "Success" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
