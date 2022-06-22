const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = Schema({
  title: { type: String, required: true, unique: true },
  img: [{ type: String, required: true }],
  short_description: { type: String, required: true, maxLength: 120 },
  description: { type: String, required: true, maxLength: 500 },
  style: { type: String, required: true },
  style_lower: {type: String, required: true },
  cost: { type: Number, required: true },
  company_name: { type: String},
  company_name_lower: {type: String },
  username: { type: String},
  username_lower: {type: String}
});

const Posts = mongoose.model("Posts", postSchema);
module.exports = Posts;
