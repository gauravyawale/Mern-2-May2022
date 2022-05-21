const DiscussionServices = require("../services/discussion.services");

const DiscussionServicesInstance = new DiscussionServices();

const getAllDiscussions = async (request, response) => {
  try {
    const getdiscussions = await DiscussionServicesInstance.findAll();
    if (getAllDiscussions.length === 0) {
      response.status(404).json({ message: "No Discussions found"});
      return;
    }
    response.status(200).json(getdiscussions);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Failing to return the discussions from the DB", error });
  }
};

// const getDiscussionByUsername = (request, response) => {};

const getDiscussionById = async (request, response) => {
  const {id} = request.params;
  try{
    const findDiscussion = await DiscussionServicesInstance.findDiscussionById(id);
    if (findDiscussion.length === 0) {
      response.status(404).json({ message: "No Discussions found for the given ID", discussionId:id});
      return;
    }
    response.status(200).json(findDiscussion);
  }catch(error){
    response
      .status(500)
      .json({ message: "Failing to return the discussions from the DB", error });
  }
};

const createNewDiscussion = async (request, response) => {
  console.log(request.body);
  try {
    const newDiscussion = await DiscussionServicesInstance.createNew(
      request.body
    );
    response.status(201).json(newDiscussion);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Failing to save the discussion to the DB", error });
  }
};

module.exports = {
  getAllDiscussions,
  // getDiscussionByUsername,
  getDiscussionById,
  createNewDiscussion,
};
