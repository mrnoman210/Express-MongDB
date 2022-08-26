// const app = require("./app");
const connectDB = require("./config/database");
const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use("/user", require("./routes/userRoutes"));
connectDB();
const PORT = process.env || 5000;
app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
