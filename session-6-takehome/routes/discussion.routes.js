const router = require("express").Router();
const {
  authenticateDiscussion,
  validateNewDiscussion,
} = require("../middlewares/discussion.validators");

const {
  getAllDiscussions,
  getDiscussionByUsername,
  getDiscussionById,
  createNewDiscussion,
  deleteById
} = require("../controllers/discussion.controllers.js");
const { route } = require("./user.routes");

router.get("/all", authenticateDiscussion, getAllDiscussions);

router.get("/user/:userName" , getDiscussionByUsername);

router.get("/id/:id", getDiscussionById);

router.post("/new", validateNewDiscussion, createNewDiscussion);

router.delete("/id/:id", deleteById);

module.exports = router;
