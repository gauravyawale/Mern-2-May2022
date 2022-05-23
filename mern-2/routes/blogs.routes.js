const router = require("express").Router();

const {
  createNewBlog,
  deleteBlogWithId,
  getAllBlogs,
  searchBlogs,
} = require("../controllers/blogs.controllers");

router.get("/", getAllBlogs);

router.post("/new", createNewBlog);

router.get("/search", searchBlogs);

router.delete("/:id", deleteBlogWithId);

module.exports = router;
