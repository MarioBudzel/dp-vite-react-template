const User = require("../models/user");

const jwt = require("jsonwebtoken");
const { validationResult, body } = require("express-validator");
const { throwError } = require("../universal");

exports.SignIn = [
  body("email")
    .not()
    .isEmpty()
    .isEmail()
    .withMessage("Please enter your email"),
  body("password").not().isEmpty().withMessage("Please enter your password"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw throwError("Invalid credentials", 400, errors);
    }
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(400).send("Invalid credentials");
    }
    if (!user.checkPassword(password)) {
      res.status(400).send("Invalid credentials");
    }
    const token = jwt.sign(
      {
        user_id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.TOKEN_KEY
    );
    res.status(200).send({ token });
  },
];
