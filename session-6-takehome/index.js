const mongoose = require("mongoose");

const discussionRoutes = require("./routes/discussion.routes")

require("dotenv").config();

const express = require("express");

const app = express();

const port = 8082;


mongoose.connect("mongodb://127.0.0.1:27017").then(() => {
    console.log("Connected to the mongodb..");

    app.listen(port, () => {
        console.log(`Server Listening at PORT ${port}`)
    })
})
app.use(express.json());
app.use("/discussion", discussionRoutes);