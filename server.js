// const app = require("./app");
const connectDB = require("./config/database");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", require("./routes/userRoutes"));
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is working on http://localhost:${PORT}`);
});
