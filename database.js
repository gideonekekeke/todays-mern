"use strict";
const mongoose = require("mongoose");
const url = "mongodb://localhost/GrowthCapical";

module.exports = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    })
    .then(() => console.log("Connected to Mongodb......"));
};

// 'mongodb://localhost/upload-files-database'
