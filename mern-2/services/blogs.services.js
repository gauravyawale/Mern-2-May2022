const Blogs = require("../models/blogs.models");

const createBlogDocument = async (body) => {
  const blogDocument = new Blogs(body);

  const result = await blogDocument.save();

  return result;
};

module.exports = { createBlogDocument: createBlogDocument };

// class Blogservice {
//   create = async (body) => {
//     const newBlog = new Blogs(body);
//     const result = await newBlog.save();
//     return result;
//   };
// }

// module.exports = Blogservice;
