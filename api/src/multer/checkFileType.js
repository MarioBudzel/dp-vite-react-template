const path = require("path");

function checkFileType(file, cb) {
  const filetypes = /pdf/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  return cb(null, true);
  /* if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: PDF files only!");
  } */
}

module.exports = checkFileType;
