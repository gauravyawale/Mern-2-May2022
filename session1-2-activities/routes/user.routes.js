const router = require("express").Router();

const {
  getUsers,
  getUserWithId,
  getUserWithGenderAge,
} = require("../controllers/users.controllers");

router.get("/", getUsers);

router.get("/search", getUserWithGenderAge);

router.get("/:uuid", getUserWithId);

module.exports = router;
