const userRouter = require("./routes/user.routes");

require("dotenv").config();



const express = require("express");

const mongoose = require("mongoose");

const app = express();

const port = 8082;

mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => {
    console.log("Connected to mongo db database");
    app.listen(port, () => {
      console.log(`Server Listening at PORT ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

app.use("/user", userRouter);
