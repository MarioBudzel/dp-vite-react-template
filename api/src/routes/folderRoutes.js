const express = require("express");
const { create, getAll } = require("../controllers/folderController");

const router = express.Router();

router.get("/all", getAll);
router.post("/create", create);

module.exports = router;
