const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = Schema({
  title: { type: String, required: true },
  img: [{ type: String, required: true }],
  short_description: { type: String, required: true, maxLength: 120 },
  description: { type: String, required: true, maxLength: 500 },
  style: { type: String, required: true },
  cost: { type: Number },
  company_name: { type: String},
  username: { type: String},
});

const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;
