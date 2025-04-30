const express = require("express");
const {
  current,
  me,
  create,
  updateProfilePicture,
  edit,
  list,
  remove,
  getOneById,
} = require("../controllers/userController");
const validate = require("../middleware/validation");
const CreateSchema = require("../validation/user");
const router = express.Router();

router.get("/current", current);
router.get("/me", me);
router.get("/list", list);

router.post("/create", validate(CreateSchema), create);
router.post("/updateProfilePicture", updateProfilePicture);
router.post("/edit", edit);
router.post("/remove", remove);
router.post("/getOneById", getOneById);

module.exports = router;
