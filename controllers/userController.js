const userModels = require("../models/userModels");

// exports.getAllUsers = async (req, res) => {
//   try {
//     const user = await find();
//     res.send(user);
//   } catch (error) {
//     console.log(error);
//   }

// };
exports.getUserDetails = async (req, res) => {
  try {
    const user = await userModels.insertOne(req.body);
    res.send({ user });
  } catch (error) {
    console.log(error);
  }
};
