const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    comment: String,
    user: String,
    postid: String, 
});

module.exports = mongoose.model("Review", reviewSchema);