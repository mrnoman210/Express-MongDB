const User = require("../models/userModels");

exports.signup = async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.email,
      username: req.body.username,
    });
    res.status(200).json({ data: user, msg: "Success" });
    // res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};
// exports.getUserDetails = async (req, res) => {
//   try {
//     const user = await userModel.insertOne(req.body);
//     res.status(200).json({ data: user, msg: "Success" });
//   } catch (error) {
//     res.status(404).json({ error: error.message });
//   }
// };
