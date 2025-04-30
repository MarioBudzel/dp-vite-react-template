const mongoose = require("mongoose");

const FilesSchema = new mongoose.Schema(
  {
    filePath: { type: String, required: true },
    fileSize: { type: Number, required: true },
    fileName: { type: String, required: true },
    mimeType: { type: String, required: true },
    folderId: { type: String, required: false },
    owner: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", FilesSchema);
