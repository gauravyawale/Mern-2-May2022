const userModel = require("../models/user.models");

const createNewUser = async (request, response) => {
  const { userName, email } = request.body;

  try {
    const findByUsernameOrEmail = await userModel.find({
      $or: [{ userName: userName }, { email: email }],
    });
    if (findByUsernameOrEmail.length === 0) {
      const newUser = new userModel(request.body);
      const result = await newUser.save();
      response.status(200).json(result);
    }else{
      response.status(409).json({ message: "Failed to create new user", reason: "Already Exists in DB" });
    }
  } catch (error) {
    response.status(500).json({ message: "Failing to return user from db" });
  }
};

const getAllUser = async (request, response) => {
  try {
    const allUser = await userModel.find({});
    if (allUser.length === 0) {
      response.status(404).json({ message: "No Users found" });
      return;
    }
    response.status(200).json(allUser);
  } catch (error) {
    response.status(500).json({ message: "Failing to return user from db" });
  }
};

const getUserName = async (request, response) => {
  const { username } = request.params;

  try {
    const userByUsername = await userModel.find({ username: username });
    if (userByUsername.length === 0) {
      response.status(404).json({ message: "No Users found!", username });
      return;
    }
    response.status(200).json(userByUsername);
  } catch (error) {
    response.status(500).json({ message: "Failing to return user from db" });
  }
};

module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
  getUserName: getUserName,
};
