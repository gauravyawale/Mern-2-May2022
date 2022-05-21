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
} = require("../controllers/discussion.controllers.js");

router.get("/all", authenticateDiscussion, getAllDiscussions);

// router.get("/user/:username" , getDiscussionByUsername);
router.get("/id/:id", getDiscussionById);

router.post("/new", validateNewDiscussion, createNewDiscussion);

module.exports = router;
