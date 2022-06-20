const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName:{ type: String, required: true },
  email: { type: String, required: true },
  profileImg: String,
  socialLink: String,
  postCount: [{ type: String }], 
  likeCount: [{ type: String}],
});

module.exports = mongoose.model("User", userSchema);