const users = require("../Database/users.json");

const getUsers = (request, response) => {
  response.status(200).json(users);
};

const getUserWithId = (request, response) => {
  const requestId = request.params.uuid;
  const userIdData = users.data.find((user) => user.login.uuid === requestId);
  if (userIdData) {
    response.status(200).json(userIdData);
  } else {
    response.status(404).json({ message: "No data found" });
  }
};

const getUserWithGenderAge = (request, response) => {
  const requestQuery = request.query;
  console.log(requestQuery);
  if (requestQuery) {
    const requestedUserData = users.data.filter((user) => {
      if (requestQuery.gender && requestQuery.age) {
        user.gender === requestQuery.gender &&
          Number(user.dob.age) === Number(requestQuery.age);
      }else{
        user.gender === requestQuery.gender ||
          Number(user.dob.age) === Number(requestQuery.age);
      }
    });
    if (requestedUserData.length) {
      response.status(200).json(requestedUserData);
    } else {
      response.status(404).json({ message: "No data found" });
    }
  } else {
    response.status(404).json({ message: "No queries are received" });
  }
};

module.exports = {
  getUsers: getUsers,
  getUserWithId: getUserWithId,
  getUserWithGenderAge: getUserWithGenderAge,
};
