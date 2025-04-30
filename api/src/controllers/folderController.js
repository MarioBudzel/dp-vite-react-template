const Folder = require("../models/folder");
const File = require("../models/file");
const { StatusCodes } = require("http-status-codes");

exports.create = async (req, res) => {
  const { body } = req;
  const { user } = req;

  try {
    const newFolder = new Folder({ ...body, owner: user.user_id });
    const createdFolder = await newFolder.save();

    return res.status(200).send({ folderId: createdFolder._id });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid data", details: error });
  }
};

exports.getAll = async (req, res) => {
  const { user } = req;
  try {
    const folders = await Folder.find({});
    const files = await File.find({ owner: user.user_id });

    const ownedFolders = folders.filter(
      (folder) => folder.owner === user.user_id
    );

    const fileInfoFolders = ownedFolders.map((folder) => {
      const filesUnderFolder = files.filter(
        (file) => file.folderId === folder._id.toString()
      );

      const filesCount = filesUnderFolder.length;

      const filesSizes = filesUnderFolder.reduce(
        (sizes, file) => {
          sizes["kb"] += file.fileSize / 1024;
          sizes["MB"] += file.fileSize / (1024 * 1024);
          sizes["GB"] += file.fileSize / (1024 * 1024 * 1024);

          return sizes;
        },
        {
          kb: 0,
          MB: 0,
          GB: 0,
        }
      );

      const totalSize =
        filesSizes.GB >= 1
          ? `${filesSizes.GB.toFixed(2)} GB`
          : filesSizes.MB >= 1
          ? `${filesSizes.MB.toFixed(2)} MB`
          : `${filesSizes.kb.toFixed(2)} KB`;

      return {
        _id: folder._id,
        color: folder.color,
        title: folder.title,
        createdAt: folder.createdAt,
        type: "folder",
        filesCount,
        totalSize,
      };
    });

    return res.status(200).send({ folders: fileInfoFolders });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid data", details: error });
  }
};
