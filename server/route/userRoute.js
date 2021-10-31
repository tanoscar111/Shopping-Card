const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  logout,
  fotgotPassword,
  resetPassword,
} = require("../controllers/userController");
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/password/forgot").post(fotgotPassword);

router.route("/password/reset/:token").put(resetPassword);
module.exports = router;
