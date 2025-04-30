const mongoose = require("mongoose");
const crypto = require("crypto");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    fullName: { type: String },
    name: { type: String },
    surName: { type: String },
    salt: { type: String },
    password: { type: String },
    activationHash: { type: String },
    profilePicturePath: { type: String },
    permission: { type: String, enum: ["RW", "RO"], required: true },
    isAdmin: { type: Boolean, default: false },
    city: { type: String, required: false },
    houseNumber: { type: String, required: false },
    streetName: { type: String, required: false },
    postalCode: { type: String, required: false },
    state: { type: String, required: false },
  },
  { timestamps: true }
);

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.password = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
};

UserSchema.methods.checkPassword = function (password) {
  const hash_pwd = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
  return this.password === hash_pwd;
};

module.exports = mongoose.model("User", UserSchema);
