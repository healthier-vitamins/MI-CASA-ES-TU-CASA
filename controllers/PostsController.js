const express = require("express");
const { StatusCodes } = require("http-status-codes");
const Posts = require("../models/Posts");
const router = express.Router();

// index home page show posts
router.get("/", async (req, res) => {
  try {
    const getAllPosts = await Posts.find();
    if (getAllPosts === null) {
      res
        .status(StatusCodes.NOT_FOUND)
        .send({ status: "fail", data: "Posts not found" });
    } else {
      res.status(StatusCodes.OK).send({ status: "ok", data: getAllPosts});
    }
  } catch (error) {
    res.send(error);
  }
});

// create post
//! in progress
router.post("/create", async (req, res) => {
  try {
    const createPost = await Posts.create(req.body);
    res.status(StatusCodes.CREATED).send({status: "success", data: createPost})
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).send({status: "fail", data: "Failed to create"})
  }
 });

// update
router.put("/:id", (req, res) => {
  res.send("update");
});

// delete
router.delete("/:id", (req, res) => {
  res.send("delete");
});

// router.get("/seed", async (req, res) => {

//   try {
//     await Posts.deleteMany({});
//     const newPosts = await Posts.create([
//       {
//         img: "00img link or import from image download.",
//         description: "00description",
//         style: "00scandinavian/modern/minimalist/industrial",
//         cost: 000000,
//         userId: "00userId",
//         commentCount: "00array of userIds. array.length to get count",
//         likeCount: "00array of userIds. array.length to get count as well.",
//       },
//       {
//         img: "11img link or import from image download.",
//         description: "11description",
//         style: "11scandinavian/modern/minimalist/industrial",
//         cost: 111111,
//         userId: "11userId",
//         commentCount: "11array of userIds. array.length to get count",
//         likeCount: "11array of userIds. array.length to get count as well.",
//       },
//       {
//         img: "22img link or import from image download.",
//         description: "22description",
//         style: "22scandinavian/modern/minimalist/industrial",
//         cost: 22222,
//         userId: "22userId",
//         commentCount: "22array of userIds. array.length to get count",
//         likeCount: "22array of userIds. array.length to get count as well.",
//       },
//       {
//         img: "22img link or import from image download.",
//         description: "22description",
//         style: "22scandinavian/modern/minimalist/industrial",
//         cost: 22222,
//         userId: "22userId",
//         commentCount: "22array of userIds. array.length to get count",
//         likeCount: "22array of userIds. array.length to get count as well.",
//       },
//     ]);
//     res.send(newPosts);
//   } catch (error) {
//     res.send(error);
//   }
// });

//show post
router.get("/:id", (req, res) => {
  res.send("post will be here");
});

module.exports = router;
