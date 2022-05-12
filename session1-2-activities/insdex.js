// Activity: Let’s create some /user routes
const express = require("express");

const {
  getUsers,
  getUserWithId,
  getUserWithGenderAge,
} = require("./controllers/users.controllers");

const app = express();

const port = 8082;

app.get("/users/search", getUserWithGenderAge);

app.get("/users/:uuid", getUserWithId);

app.get("/users", getUsers);

app.listen(port, () => {
  console.log(`Listening to the port ${port}..`);
});
