const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const File = require("../src/models/file");
const Folder = require("../src/models/folder");
const Users = require("../src/models/user");
const folder = require("../src/models/folder");

const ObjectId = require("mongoose").Types.ObjectId;

const transformMongoExport = (data) => {
  return data.map((item) => ({
    ...item,
    _id: item._id?.$oid ? new ObjectId(item._id.$oid) : item._id,
    createdAt: item.createdAt?.$date
      ? new Date(item.createdAt.$date)
      : item.createdAt,
    updatedAt: item.updatedAt?.$date
      ? new Date(item.updatedAt.$date)
      : item.updatedAt,
  }));
};

const deleteAllNewFiles = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error reading the directory!");
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file!");
        }
      });
    });
  });
};

const restoreAndSeedDatabase = async () => {
  try {
    const newFilesFolderPath = path.join(process.cwd(), "uploads/userData");

    console.log("Removing all newly uploaded files...");

    deleteAllNewFiles(newFilesFolderPath);

    console.log("Removed all new files...");
    console.log("Starting database restoration...");

    await File.deleteMany({});
    await Folder.deleteMany({});
    await Users.deleteMany({});

    console.log("All collections cleared!");

    const filesPath = path.join(__dirname, "data/files.json");
    const foldersPath = path.join(__dirname, "data/folders.json");
    const usersPath = path.join(__dirname, "data/users.json");

    const usersData = JSON.parse(fs.readFileSync(usersPath));
    const foldersData = JSON.parse(fs.readFileSync(foldersPath));
    const filesData = JSON.parse(fs.readFileSync(filesPath));

    const transformedUsersData = transformMongoExport(usersData);
    const transformedFoldersData = transformMongoExport(foldersData);
    const transformedFilesData = transformMongoExport(filesData);

    await Users.insertMany(transformedUsersData);
    await Folder.insertMany(transformedFoldersData);
    await File.insertMany(transformedFilesData);

    console.log("Database successfully restored and seeded!");
  } catch (err) {
    console.error("Error restoring the database", err);
  }
};

module.exports = restoreAndSeedDatabase;
