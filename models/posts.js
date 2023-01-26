const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postsSchema = new Schema({
  lot: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
//   img: {
//     data: Buffer,
//     contentType: String,
//   },
  name: {
    type: String,
  },
  timestamp: {
    type: Number,
  },
});

module.exports = mongoose.model("Posts", postsSchema);
