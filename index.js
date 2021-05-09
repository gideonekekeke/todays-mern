"use strict";
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileRoutes = require("./routes/file-upload-routes");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://shotkode:shotkode@cluster0.2kfdg.mongodb.net/shotkodeDB?retryWrites=true&w=majority";

const port = process.env.PORT || 4000;
// const port = 58990;

mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("successfully connected");
  });

const app = express();
app.use(cors());

// require('./database')();

app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", fileRoutes.routes);

app.listen(port, () => console.log(`server is listening on url ${port}`));
