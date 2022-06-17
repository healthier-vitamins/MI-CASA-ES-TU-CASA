const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  style: String,
  description: String,
  img: [String], 
  cost: Number,
  username: String,
  commentcount: Number,
  likecount: Number,
});

module.exports = mongoose.model("Post", postSchema);