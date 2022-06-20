const express = require("express");
const router = express.Router();
const Users = require("../models/Users");

router.get("/", (req, res) => {
    res.send("probably don't need this route")
})


// router.get("/seed", async (req, res) => {
//   try {
//     await Reviews.deleteMany({});
//     const newReviews = await Reviews.create([
//       {
//         comment: "this is sooooooooooooooooooooooooo great",
//         username: "00userId.username",
//         postId: "00postId._id-helps to link to post",
//       },
//       {
//         comment: "this is BAAAADADADADADADADADADADADADADADAD",
//         username: "11userId.username",
//         postId: "11postId._id-helps to link to post",
//       },
//       {
//         comment: "this is OK???????? not too great",
//         username: "22userId.username",
//         postId: "22postId._id-helps to link to post",
//       },
//       {
//         comment: "FINE LA HORR",
//         username: "33userId.username",
//         postId: "33postId._id-helps to link to post",
//       },
//     ]);
//     res.send(newReviews);
//   } catch (error) {
//     res.send(error);
//   }
// });

// signup
router.post("/signup", (req, res) => {
    res.send("you'll signuphere")
  })

// login
router.post("/login", (req, res) => {
    res.send("you'll log in here")
  })

//show user page
router.get("/username", (req, res) => {
    res.send("user page will be here")
  })

  module.exports = router;