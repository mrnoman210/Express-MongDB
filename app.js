const express = require("express");
const { getAllUsers } = require("./controllers/userController");

const app = express();
// const user = require("./routes/userRoutes");
app.use("/user", getAllUsers);
module.exports = app;
