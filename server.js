const app = require("./app");
const connectDB = require("./config/database");
require("dotenv").config();
app.use("/", require(app));
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
connectDB();
