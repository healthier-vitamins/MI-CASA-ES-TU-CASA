const express = require("express");
const router = express.Router();
const Comments = require("../models/Comments");

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

// show comments
// router.get("/", async(req, res) => {
//   try {
//     const filteredComments = await Comments.findById()
//     res.send("comments will be here");
//   } catch (error) {
//     res.send(error)
//   }
// });

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
