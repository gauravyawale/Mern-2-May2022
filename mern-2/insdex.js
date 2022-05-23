//importing all the required dependencies

require("dotenv").config();

const usersRoutes = require("./routes/users.routes");

const currencyRoutes = require("./routes/currencies.routes");

const blogRoutes = require("./routes/blogs.routes");

const {
  userAuthMiddleware,
  userQueryMiddleware,
} = require("./middlewares/users.validators");

const mongoose = require("mongoose");

const express = require("express");

const app = express();

const port = 8082;

//connecting to database and if connected to db then listning at the given port

mongoose
  .connect("mongodb://127.0.0.1:27017/website")
  .then(() => {
    console.log("Connected to the database successfully..");
    app.listen(port, () => {
      console.log(`Server listening to the port ${port}..`);
    });
  })
  .catch((error) => {
    console.log("Error catched!");
  });

//middlewares

app.use(express.json());

app.use(userAuthMiddleware);

//routes

app.use("/users", userQueryMiddleware, usersRoutes);

app.use("/currencies", currencyRoutes);

app.use("/blogs", blogRoutes);
