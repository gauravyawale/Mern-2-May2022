const Blogs = require("../models/blogs.models");

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

  const { title, author, content, publishedAt } = request.body;

  const newBlog = new Blogs({
    title: title,
    author: author,
    content: content,
    publishedAt: publishedAt,
  });

  try {
    const result = await newBlog.save();
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
module.exports = {
  getAllBlogs: getAllBlogs,
  createNewBlog: createNewBlog,
  deleteBlogWithId: deleteBlogWithId,
};
