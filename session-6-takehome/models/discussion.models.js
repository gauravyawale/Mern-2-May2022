const mongoose = require("mongoose");

const discussionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true,immutable: true },
    content: { type: String, default: "" },
  },
  { timestamps: true }
);

const discussionModel = mongoose.model("Discussion", discussionSchema);
module.exports = discussionModel;
