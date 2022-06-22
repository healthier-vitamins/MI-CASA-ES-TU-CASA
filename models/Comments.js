const mongoose = require("mongoose");
const {Schema} = mongoose;
//{type: Schema.Types.ObjectId, ref: "Posts"}
const commentSchema = Schema({
    comment: {type: String, required: true},
    author: String,
    postId: String,
});

const Comments = mongoose.model("Comments", commentSchema)
module.exports = Comments
