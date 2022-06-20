const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName:{ type: String, required: true },
  email: { type: String, required: true },
  interior_designer: { type: String },
  profileImg: String,
  socialLink: String,
  postCount: [{ type: Schema.Types.ObjectId, ref: "Posts" }], 
  likeCount: [{ type: Schema.Types.ObjectId, ref: "Posts"}],
});

const Users = mongoose.model("Users", userSchema)
module.exports = Users