const Blogs = require("../models/blogs.models");
const { createBlogDocument } = require("../services/blogs.services");

const getAllBlogs = async (request, response) => {
  try {
    const allBlogs = await Blogs.find({});
    response.status(200).send(allBlogs);
  } catch (error) {
    response.status(500).send();
  }
};

const createNewBlog = async (request, response) => {
  //   console.log(request.body);
  //   response.sendStatus(200);

  // const newBlog = new Blogs(request.body);//moved to service layer

  try {
    const result = await createBlogDocument(request.body);
    response.status(200).json(result);
  } catch (error) {
    response.status(400).json(error.message);
  }
};

const deleteBlogWithId = async (request, response) => {
  const { id } = request.params;
  console.log(id);

  try {
    const result = await Blogs.findByIdAndRemove(id);
    response.send(result);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Couldn't delete blog post. Please try again" });
  }
};

const searchBlogs = async (request, response) => {
  const { title, author } = request.query;

  try {
    const result = await Blogs.find({
      $or: [{ title: title }, { author: { $elemMatch: { email: author } } }],
    });
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json({ message: "Internal server issue" });
  }
};

module.exports = {
  getAllBlogs: getAllBlogs,
  createNewBlog: createNewBlog,
  deleteBlogWithId: deleteBlogWithId,
  searchBlogs: searchBlogs,
};
