const mongoose = require("mongoose");
const {Schema} = mongoose;

const postSchema = Schema({
  img: [{type: String, required: true }],
  short_description: {type: String, required: true, maxLength: 120},
  description: {type: String, required: true, maxLength: 250 },
  style: {type: String, required: true },
  cost: {type: Number}, 
  company_name: {type: Schema.Types.ObjectId, ref: "Users"},
  username: {type: Schema.Types.ObjectId, ref: "Users"},
  comment_count: [{type: Schema.Types.ObjectId, ref: "Reviews"}],
  like_count: [{type: Schema.Types.ObjectId, ref: "Users"}],
});

const Posts = mongoose.model("Posts", postSchema)
module.exports = Posts