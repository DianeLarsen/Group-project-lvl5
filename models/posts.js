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
  img: {
    type: String,
  },
  name: {
    type: String,
  },
  timestamp: {
    type: Number,
  },
  edited: {
    type: Boolean,
  }
});

module.exports = mongoose.model("Posts", postsSchema);
