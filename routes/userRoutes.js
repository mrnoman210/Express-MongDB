const {
  signup,
  getUserDetails,
  getUserById,
  deleteUserById,
} = require("../controllers/userController");
const cors = require("cors");
const express = require("express");
const router = express.Router();
router.route("/user").post(signup).get(getUserDetails);
router.route("/user/:id", cors()).get(getUserById);
router.route("/delete/:id", cors()).delete(deleteUserById);

module.exports = router;
