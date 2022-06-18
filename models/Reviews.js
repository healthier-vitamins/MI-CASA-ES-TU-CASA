const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    comment: String,
    username: String,
    postId: String, 
});

module.exports = mongoose.model("Review", reviewSchema);