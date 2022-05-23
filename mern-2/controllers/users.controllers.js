const users = require("../database/users.json");

const {
  getQueryErrors,
  userAuthorization,
} = require("../validators/users.validators");

const getUsers = (request, response) => {
  // if (!userAuthorization(request, response)) {
  //   return response.status(403).json({ message: "Unauthorized" });
  // }
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

  // if (!requestQuery.gender && !requestQuery.age) {
  //   response.status(422).json({
  //     message: "Missing Search Parameters, search using age and/or gender",
  //   });
  //   return;
  // }
  // if (requestQuery.gender) {
  //   if (!["male", "female"].includes(requestQuery.gender.toLowerCase())) {
  //     response.status(422).json({
  //       message: "Gender to search can either be 'male' or 'female",
  //     });
  //     return;
  //   }
  // }

  // if (requestQuery.age) {
  //   if (isNaN(Number(requestQuery.age))) {
  //     response.status(422).json({
  //       message: "Age parameter should be a number",
  //     });
  //     return;
  //   }
  //   if (Number(requestQuery.age) < 0 || Number(requestQuery.age) > 100) {
  //     response.status(422).json({
  //       message: "Age out of bounds. It should be a number between 0 and 100",
  //     });
  //     return;
  //   }
  // }

  //instead of writing this above code we can do this same validation using joi library

  const age = requestQuery.age;
  const gender = requestQuery.gender;

  // const error = getQueryErrors({ age, gender });

  // if (error) {
  //   response.status(422).json({
  //     message: error.message,
  //   });
  //   return;
  // }

  const requestedUserData = users.data.filter((user) => {
    if (requestQuery.gender && requestQuery.age) {
      return (
        user.gender === requestQuery.gender &&
        Number(user.dob.age) === Number(requestQuery.age)
      );
    } else {
      return (
        user.gender === requestQuery.gender ||
        Number(user.dob.age) === Number(requestQuery.age)
      );
    }
  });

  if (requestedUserData.length) {
    response.status(200).json(requestedUserData);
  } else {
    response.status(404).json({ message: "No data found" });
  }
};

module.exports = {
  getUsers: getUsers,
  getUserWithId: getUserWithId,
  getUserWithGenderAge: getUserWithGenderAge,
};
