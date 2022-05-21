const discussionModel = require("../models/discussion.models");

class DiscussionServices {
  createNew = async (body) => {
    const newDiscussion = new discussionModel(body);
    const savedDiscussion = await newDiscussion.save();
    return savedDiscussion;
  };

  findAll = async () => {
    const receivedDiscussion = await discussionModel.find();
    return receivedDiscussion;
  };

  findDiscussionById = async (id) => {
    const discussionById = await discussionModel.findById(id);
    return discussionById;
  }
}

module.exports = DiscussionServices;
