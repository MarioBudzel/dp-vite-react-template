const express = require("express");
const {
  addFiles,
  getRecentFiles,
  getAllFiles,
  downloadSingle,
  downloadAllByFolder,
} = require("../controllers/fileController");

const router = express.Router();

router.post("/add", addFiles);

router.get("/getRecent", getRecentFiles);
router.get("/getAll", getAllFiles);
router.get("/downloadSingle/:fileId", downloadSingle);
router.get("/downloadFolder/:folderId", downloadAllByFolder);

module.exports = router;
