const {
  getAllUsers,
  getUserDetails,
} = require("../controllers/userController");
const express = require("express");
const router = express.Router();
const app = require("../app");
// router.route("/user").get();

// router.post("/user").get(getAllUsers);
router.route("/login").post(getUserDetails);
module.exports = router;
