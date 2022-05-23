const mongoose = require("mongoose");

const validator = require("validator");

//creating a schema using mongoose which will take care of the required structure and validations

const authorSchema = new mongoose.Schema(
  {
    fullName: { type: String, maxlength: 25 },
    twitterHandle: { type: String },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      validate: (value) => validator.isEmail(value),
    },
    image: {
      type: String,
      validate: (value) =>
        validator.isURL(value, {
          require_protocol: true,
        }),
    },
  },
  { _id: false }
);

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    author: [authorSchema],
    content: { type: String, default: "" },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = blogModel;
