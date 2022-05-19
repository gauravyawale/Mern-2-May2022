const router = require("express").Router();

const {
  userAuthorization,
  userValidation,
} = require("../middlewares/user.validators");

const {
  createNewUser,
  getAllUser,
  getUserName,
} = require("../controllers/user.controllers");

router.post("/register", userAuthorization, userValidation, createNewUser);

router.get("/all", userAuthorization, getAllUser);

router.get("/:username", userAuthorization, getUserName);

module.exports = router;
