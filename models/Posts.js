const mongoose = require("mongoose");
const {Schema} = mongoose;

const postSchema = Schema({
  img: [{type: String, required: true }],
  shortDescription: {type: String, required: true, maxLength: 120},
  description: {type: String, required: true, maxLength: 250 },
  style: {type: String, required: true },
  cost: {type: Number}, 
  interior_designer: {type: String},
  username: {type: Schema.Types.ObjectId, ref: "Users"},
  commentCount: [{type: Schema.Types.ObjectId, ref: "Reviews"}],
  likeCount: [{type: Schema.Types.ObjectId, ref: "Users"}],
});

const Posts = mongoose.model("Posts", postSchema)
module.exports = Posts