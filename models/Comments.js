const mongoose = require("mongoose");
const {Schema} = mongoose;
//{type: Schema.Types.ObjectId, ref: "Posts"}
const commentSchema = Schema({
    comment: {type: String, required: true},
    author_username: {type: String, required: true},
    author_id: {type: String, required: true},
    postId: {type: String, required: true}
});

const Comments = mongoose.model("Comments", commentSchema)
module.exports = Comments
