const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  img: [{type: String, required: true }],
  description: {type: String, required: true },
  style: {type: String, required: true },
  cost: Number, 
  username: String,
  commentcount: Number,
  likecount: Number,
});

module.exports = mongoose.model("Post", postSchema);