const express = require("express");
const router = express.Router();

// Controllers
const { login, register, forgotpassword, resetpassword } = require("../controllers/authControllers");

router.post("/login", login);

router.post("/register", register);

router.post("/forgotpassword", forgotpassword);

router.put("/resetpassword/:resetToken", resetpassword);

module.exports = router;