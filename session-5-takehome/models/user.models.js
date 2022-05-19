const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: String,
  userName: String,
  email: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
