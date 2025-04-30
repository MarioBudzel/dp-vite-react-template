const File = require("../models/file");
const Folder = require("../models/folder");

const upload = require("../multer/multerConfig");

const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const { StatusCodes } = require("http-status-codes");

exports.addFiles = [
  upload.any(),
  async (req, res) => {
    const { files } = req;
    const { body } = req;
    const { folderId } = body;
    const { user } = req;

    console.log(files);
    try {
      const savedFiles = await Promise.all(
        files.map(async (file) => {
          const newFile = new File({
            filePath: file.path,
            fileName: file.originalname,
            fileSize: file.size,
            mimeType: file.mimetype,
            folderId,
            owner: user.user_id,
          });

          return await newFile.save();
        })
      );

      res.status(200).send({ message: "Success", files: savedFiles });
    } catch (error) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ error: "Invalid data", details: error });
    }
  },
];

exports.getRecentFiles = async (req, res) => {
  const { user } = req;

  try {
    const files = await File.find({ owner: user.user_id })
      .sort({ createdAt: -1 })
      .limit(5)
      .select(["fileName", "folderId", "createdAt", "fileSize"]);

    const updatedInfoFiles = await Promise.all(
      files.map(async (file) => {
        const folder = await Folder.findById(file.folderId);
        const folderName = folder?.title ?? "-1";

        const fileSizeKb = file.fileSize / 1024;
        const fileSizeMB = file.fileSize / (1024 * 1024);
        const fileSizeGB = file.fileSize / (1024 * 1024 * 1024);

        const displaySize =
          fileSizeGB >= 1
            ? `${fileSizeGB.toFixed(2)} GB`
            : fileSizeMB >= 1
            ? `${fileSizeMB.toFixed(2)} MB`
            : `${fileSizeKb.toFixed(2)} kb`;

        return {
          fileName: file.fileName,
          createdAt: file.createdAt,
          fileSize: displaySize,
          folderName,
        };
      })
    );

    res.status(200).send({ files: updatedInfoFiles });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid data", details: error });
  }
};

exports.getAllFiles = async (req, res) => {
  const { user } = req;
  try {
    const files = await File.find({ owner: user.user_id }).sort({
      createdAt: -1,
    });

    const updatedInfoFiles = await Promise.all(
      files.map(async (file) => {
        const folder = await Folder.findById(file.folderId);
        const folderName = folder?.title ?? "-1";

        const fileSizeKb = file.fileSize / 1024;
        const fileSizeMB = file.fileSize / (1024 * 1024);
        const fileSizeGB = file.fileSize / (1024 * 1024 * 1024);

        const displaySize =
          fileSizeGB >= 1
            ? `${fileSizeGB.toFixed(2)} GB`
            : fileSizeMB >= 1
            ? `${fileSizeMB.toFixed(2)} MB`
            : `${fileSizeKb.toFixed(2)} kb`;

        return {
          _id: file._id,
          fileName: file.fileName,
          createdAt: file.createdAt,
          fileSize: displaySize,
          type: "file",
          mimetype: file.mimeType,
          path: file.filePath,
          folderName,
        };
      })
    );

    res.status(200).send({ files: updatedInfoFiles });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid data", details: error });
  }
};

exports.downloadSingle = async (req, res) => {
  const { fileId } = req.params;
  const { user } = req;

  try {
    const file = await File.findOne({ owner: user.user_id, _id: fileId });

    if (!file)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "File not found" });

    const filePath = path.join(process.cwd(), file.filePath);

    if (!fs.existsSync(filePath)) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "File does not exist" });
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${file.fileName}`
    );
    res.setHeader("Content-Type", "application/octet-stream");

    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid data", details: error });
  }
};

exports.downloadAllByFolder = async (req, res) => {
  const { folderId } = req.params;
  const { user_id } = req.user;

  try {
    const folder = await Folder.findOne({ owner: user_id, _id: folderId });

    if (!folder)
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ error: "Folder not found" });

    const files = await File.find({ folderId: folderId });

    const zip = archiver("zip", { zlib: { level: 9 } });

    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${folder.title}.zip`
    );

    zip.pipe(res);

    files.forEach((file) => {
      const filePath = path.join(process.cwd(), file.filePath);
      if (fs.existsSync(filePath)) {
        zip.file(filePath, { name: file.fileName });
      }
    });

    zip.finalize();
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid data", details: error });
  }
};
