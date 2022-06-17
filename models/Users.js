const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname:{ type: String, required: true },
  email: { type: String, required: true },
  profileimg: String,
  sociallink: String,
  postcount: Number, //can remove if unnecessary
  likecount: Number, //can remove if unnecessary
});

module.exports = mongoose.model("User", userSchema);