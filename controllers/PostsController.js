const express = require("express");

const Posts = require("../models/Posts");
const router = express.Router();

// Posts.find()
// .populate("company_name")
//   .then(p => console.log(p))
//   .catch(error => console.log(error))

// index home page show posts
router.get("/", async (req, res) => {
  try {
    const getAllPosts = await Posts.find();
    if (getAllPosts === null) {
      res.send({ status: "fail", data: "Posts not found" });
    } else {
      res.send({ status: "ok", data: getAllPosts });
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
    res.send({ status: "created successfully", data: createPost });
  } catch (error) {
    res.send({ status: "failed", data: "Failed to create", error: error });
  }
});

// filter posts
router.get("/filter/:style/:username", async (req, res) => {
  const { style, username } = req.params;
  console.log(style, username);
  const filteredData = [];
  const allData = [];
  try {
    const filterPost = await Posts.find();
    console.log(filterPost);
    const queryPosts = Object.keys(filterPost);

    filteredData = filterPost.map((object) => object.data);
    console.log(filtered);
  } catch (error) {
    // for (let i = 0; i < queryPosts.length; i++) {

    // }}

    // console.log("post", post)
    // if (post.username.toLowerCase() === username.toLowerCase()) {
    //   queriedPosts.append()
    // console.log(queriedPosts)

    // res.send({status: "filtered successfully", data: filterPost});
    res.send({
      status: "failed filter",
      data: "Failed to filter",
      error: error,
    });
  }
});

// update
router.put("/:id", (req, res) => {
  const { id } = req.params;
});

// delete

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  try {
    const deletePost = await Posts.findByIdAndRemove(id);
    res.send({ status: "success", data: deletePost });
  } catch (error) {
    res.send({ status: "failed to delete", data: "failed to delete" });
  }
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
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Posts.findById(id);
    if (post === null) {
      res.send({ status: "fail", data: "Post Not Found" });
    } else {
      res.send({ status: "success", data: post });
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
