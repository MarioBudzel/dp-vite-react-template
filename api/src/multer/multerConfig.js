const multer = require("multer");
const path = require("path");
const fs = require("fs");
const checkFileType = require("./checkFileType");

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = "./uploads/userData/";
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const fileNameOrigin = path.parse(file.originalname).name; // Extract file name without extension

    cb(
      null,
      fileNameOrigin + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 10 }, // 10MB limit
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

module.exports = upload;
