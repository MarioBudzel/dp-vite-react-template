const express = require("express");
const { SignIn } = require("../controllers/publicController");
const router = express.Router();

router.post("/sign-in", SignIn);

module.exports = router;
