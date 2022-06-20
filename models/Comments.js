const mongoose = require("mongoose");
const {Schema} = mongoose;

const commentSchema = Schema({
    comment: {type: String, required: true},
    author: {type: Schema.Types.ObjectId, ref: "Users"},
    postId: {type: Schema.Types.ObjectId, ref: "Posts"},
});

const Comments = mongoose.model("Comments", commentSchema)
module.exports = Comments
