const User = require("../models/user");
const { throwError } = require("../universal");
const { StatusCodes } = require("http-status-codes");

const upload = require("../multer/multerConfig");

exports.current = async (req, res) => {
  if (!req.user.user_id) throw throwError("No user logged in", 400);

  const user = await User.findOne(
    { _id: req.user.user_id },
    {
      email: 1,
      name: 1,
      surName: 1,
      isAdmin: 1,
    }
  );

  const sendUser = {
    email: user?.email,
    name: user?.name,
    surname: user?.surname,
  };
  return res
    .status(200)
    .send({ user: sendUser, isAdmin: user.isAdmin ?? false });
};

exports.me = async (req, res) => {
  if (!req.user.user_id) throw throwError("No user logged in", 400);
  const user = await User.findOne(
    { _id: req.user.user_id },
    {
      password: 0,
      __v: 0,
      salt: 0,
    }
  );
  return res.status(200).send({ user });
};

exports.create = async (req, res) => {
  const user = req.body;
  const { password } = user;

  try {
    const newUser = new User({ ...user });
    const createdUser = await newUser.save();
    createdUser.setPassword(password);
    await createdUser.save();
    const { _id } = createdUser;
    return res.status(200).send({ userId: _id });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid data", details: error });
  }
};

exports.edit = async (req, res) => {
  const { body } = req;
  const { password, _id: userId, ...rest } = body;

  try {
    const createdUser = await User.findByIdAndUpdate(userId, rest);
    if (password) {
      createdUser.setPassword(password);
      createdUser.save();
    }
    const { _id } = createdUser;
    return res.status(200).send({ userId: _id });
  } catch (error) {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ error: "Invalid data", details: error });
  }
};

exports.updateProfilePicture = [
  upload.any(),
  async (req, res) => {
    const { files } = req;
    const { body } = req;
    const { userId } = body;

    const filePath = files?.[0]?.path;

    await User.findByIdAndUpdate(userId, { profilePicturePath: filePath });
    return res.status(200).send({ message: "Image uploaded!" });
  },
];

exports.list = async (_, res) => {
  const users = await User.find({}, { password: 0 });

  return res.status(200).send({ users });
};

exports.getOneById = async (req, res) => {
  const {
    body: { userId },
  } = req;

  try {
    const user = await User.findById(userId, { password: 0 });
    return res.status(200).send({ user });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

exports.remove = async (req, res) => {
  const {
    body: { userId },
  } = req;

  try {
    await User.findByIdAndDelete(userId);
    return res.status(200).send({ message: "success" });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};
