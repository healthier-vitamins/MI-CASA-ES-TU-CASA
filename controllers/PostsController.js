const { application } = require("express");
const express = require("express");
const Posts = require("../models/Posts");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("probably don't need this route");
});

// create post

//res.status(StatusCodes.CREATED).
router.post("/create", async (req, res) => {
  try {
    const post = await Posts.create(req.body);
    res.send(post);
  } catch (error) {
    res.send(error);
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
        //         img: " .",
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
                