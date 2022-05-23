const userModel = require("../models/user.models");

const create = async (body) => {
  const result = await userModel.create(body);
  return result;
};

const findAll = async() => {
  const result = await userModel.find({});
  return result;
};

const findByEmail = async (email) => {
  const result = await userModel.findOne({ email });
  return result;
};

const findByuserName = async(userName) => {
  const result = await userModel.findOne({ userName });
  return result;
};

module.exports = {
  create,
  findAll,
  findByEmail,
  findByuserName,
};
