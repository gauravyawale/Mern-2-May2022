const {
  create,
  findAll,
  findByEmail,
  findByuserName,
} = require("../services/user.services");

const createNewUser = async (request, response) => {
  const { userName, email } = request.body;

  try {
    const userByEmail = await findByEmail(email);
    const userByUsername = await findByuserName(userName);
    if (userByEmail === null && userByUsername === null) {
      const result = await create(request.body);
      response.status(200).json(result);
    } else {
      response
        .status(409)
        .json({
          message: "Failed to create new user",
          reason: "Already Exists in DB",
        });
    }
  } catch (error) {
    response.status(500).json({ message: "Failing to return user from db" });
  }
};

const getAllUser = async (request, response) => {
  try {
    const result = await findAll();
    if (result === null) {
      response.status(404).json({ message: "No Users found" });
      return;
    }
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json({ message: "Failing to return user from db" });
  }
};

const getUserName = async (request, response) => {
  const { username } = request.params;

  try {
    const result = await findByuserName(username);
    if (result === null) {
      response.status(404).json({ message: "No Users found!", username });
      return;
    }
    response.status(200).json(result);
  } catch (error) {
    response.status(500).json({ message: "Failing to return user from db" });
  }
};

module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
  getUserName: getUserName,
};
