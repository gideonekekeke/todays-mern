const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mulitipleFileSchema = new Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    // location: {
    //   type: String,
    //   required: true,
    // },
    // contact: {
    //   type: String,
    //   required: true,
    // },

    files: [Object],
    // cv: [Object],
  },
  { timestamps: true }
);

module.exports = mongoose.model("MultipleFile", mulitipleFileSchema);
