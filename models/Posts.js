const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  img: [{type: String, required: true }],
  description: {type: String, required: true },
  style: {type: String, required: true },
  cost: {type: Number}, 
  username: {type: String},
  commentCount: [{type: String}],
  likeCount: [{type: String}],
});

module.exports = mongoose.model("Post", postSchema);