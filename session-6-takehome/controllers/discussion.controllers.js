const DiscussionServices = require("../services/discussion.services");
const { findByuserName } = require("../services/user.services.js");

const DiscussionServicesInstance = new DiscussionServices();

const getAllDiscussions = async (request, response) => {
  try {
    const getdiscussions = await DiscussionServicesInstance.findAll();
    if (getAllDiscussions.length === 0) {
      response.status(404).json({ message: "No Discussions found" });
      return;
    }
    response.status(200).json(getdiscussions);
  } catch (error) {
    response.status(500).json({
      message: "Failing to return the discussions from the DB",
      error,
    });
  }
};

const getDiscussionByUsername = async (request, response) => {
  const { userName } = request.params;
  try {
    const result = await findByuserName(userName);
    if (result === null) {
      response
        .status(404)
        .json({ message: "No discussions found for this user", userName });
      return;
    }
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json({
      message: "Failing to return the discussions from the DB",
      error,
    });
  }
};

const getDiscussionById = async (request, response) => {
  const { id } = request.params;
  try {
    const findDiscussion = await DiscussionServicesInstance.findDiscussionById(
      id
    );
    if (findDiscussion === null) {
      response.status(404).json({
        message: "No Discussions found for the given ID",
        discussionId: id,
      });
      return;
    }
    response.status(200).json(findDiscussion);
  } catch (error) {
    response.status(500).json({
      message: "Failing to return the discussions from the DB",
      error,
    });
  }
};

const createNewDiscussion = async (request, response) => {
  // console.log(request.body);
  const { author } = request.body;
  try {
    const authorByUserName = await findByuserName(author);
    if (authorByUserName === null) {
      response.status(404).json({ message: "user not found", author });
      return;
    }
    const newDiscussion = await DiscussionServicesInstance.create(request.body);
    response.status(201).json(newDiscussion);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Failing to save the discussion to the DB", error });
  }
};

const deleteById = async (request, response) => {
  const {id} = request.params;
  try {
    const result = await DiscussionServicesInstance.deleteById(id);
    response.status(204).send();
  } catch (error) {
    response
      .status(500)
      .json({ message: "Failing to delete the discussion in the DB", error });
  }
};

module.exports = {
  getAllDiscussions,
  getDiscussionByUsername,
  getDiscussionById,
  createNewDiscussion,
  deleteById,
};
