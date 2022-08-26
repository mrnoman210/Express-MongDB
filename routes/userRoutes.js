const { signup } = require("../controllers/userController");
const express = require("express");
const router = express.Router();
// router.route("/user").get();
// router.post("/user").get(getAllUsers);
router.route("/").post(signup);
module.exports = router;
