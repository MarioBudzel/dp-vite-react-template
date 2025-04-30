const mongoose = require("mongoose");

const FolderSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    color: { type: String, required: true },
    owner: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Folder", FolderSchema);
