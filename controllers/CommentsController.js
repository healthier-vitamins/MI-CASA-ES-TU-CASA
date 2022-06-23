const express = require("express");
const router = express.Router();
const Comments = require("../models/Comments");

// show all comments (probably not needed, will remove later)
// router.get("/", async(req, res) => {
//   try {
//     const allComments = await Comments.find()
//     res.send(allComments);
//   } catch (error) {
//     res.send(error)
//   }
// });

// show comments for the post
router.get("/:id", async(req, res) => {
  const postid = req.params.id;
  try {
    const filteredComments = await Comments.find({ postId: postid })
    res.send({ status: "found" , data: filteredComments});
  } catch (error) {
    res.send(error)
  }
});

//create comment
router.post("/create", async (req, res) => {
  try {
    const createComment = await Comments.create(req.body);
    // res.send(createComment)
    res.send({ status: "comment success", data: createComment });
  } catch (error) {
    res.send({ status: "comment failed", error: error})
  }
});

// delete comment
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteComment = await Comments.findByIdAndRemove(id);
    res.send({ status: "comment deleted", data: deleteComment });
  } catch (error) {
    res.send({ status: "delete failed", error: error})
  }
});

// edit comment
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const editComment = await Comments.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.send({ status: "success:", data: editComment });
  } catch (error) {
    res.send({ status: "edit failed", error: error});
  }
});


// router.get("/seed", async (req, res) => {
//   try {
//     await Comments.deleteMany({});
//     const newReviews = await Comments.create([
//       {
//         comment: "this is sooooooooooooooooooooooooo great",
//         username: "joemama",
//         postId: "62b297b58f02eb2763431ca6",
//       },
//       {
//         comment: "this is BAAAADADADADADADADADADADADADADADAD",
//         username: "mikeox",
//         postId: "62b297b58f02eb2763431ca6",
//       },
//       {
//         comment: "this is OK???????? not too great",
//         username: "whatsupdog",
//         postId: "62b297dd8f02eb2763431ca8",
//       },
//       {
//         comment: "FINE LA HORR",
//         username: "whatsamatterbaby",
//         postId: "62b297dd8f02eb2763431ca8",
//       },
//     ]);
//     res.send(newReviews);
//   } catch (error) {
//     res.send(error);
//   }
// });

module.exports = router;
