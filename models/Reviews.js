const mongoose = require("mongoose");
const {Schema} = mongoose;

const reviewSchema = Schema({
    comment: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: "Users"},
    postId: {type: Schema.Types.ObjectId, ref: "Posts"},
});

const Reviews = mongoose.model("Reviews", reviewSchema)
module.exports = Reviews
