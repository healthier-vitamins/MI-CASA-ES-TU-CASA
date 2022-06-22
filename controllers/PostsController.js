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

/// FOR FILTER ///
const filterCost = (post, cost) => {
  if (cost !== 0) {
    // console.log("post's cost:", post.cost);
    if (post.cost <= cost && post.cost > 0) {
      // console.log("return cost", post);
      return true;
    }
  }
};

const filterUsername = (post, usernameLower) => {
  if (usernameLower !== "") {
    // console.log("post's username_lower:", post.username_lower);
    if (post.username_lower === usernameLower) {
      // console.log("return username", post);
      return true;
    }
  }
};

const filterStyle = (post, styleLower) => {
  if (styleLower !== "") {
    if (post.style_lower === styleLower) {
      // console.log("return style", post);
      return true;
    }
  }
};

const filterCompanyName = (post, companyNameLower) => {
  if (companyNameLower !== "") {
    if (post.company_name_lower === companyNameLower) {
      // console.log("return company", post);
      return true;
    }
  }
};

const filterExcess = (
  post,
  index,
  cost,
  usernameLower,
  styleLower,
  companyNameLower
) => {
  if (
    post.cost > cost ||
    post.username_lower !== usernameLower ||
    post.style_lower !== styleLower ||
    post.company_name_lower !== companyNameLower
  ) {
    return index;
  }
};

// const filterAll = (post, cost, usernameLower, styleLower, companyNameLower) => {
//   if (cost !== 0 && (post.cost <= cost && post.cost > 0)) {
//     if (usernameLower !== )
//   }
// }
///

// create post
router.post("/create", async (req, res) => {
  try {
    const createPost = await Posts.create(req.body);
    res.send({ status: "created successfully", data: createPost });
  } catch (error) {
    res.send({ status: "failed", data: "Failed to create", error: error });
  }
});

// filter posts
router.get("/filter/search", async (req, res) => {
  // init all lowercase

  const { style, username, company_name, cost } = req.query;
  const styleLower = style.toLowerCase();
  const usernameLower = username.toLowerCase();
  const companyNameLower = company_name.toLowerCase();
  // console.log("norm params:", cost, style, username, company_name);
  // console.log("lower params:", styleLower, usernameLower, companyNameLower);
  const filteredData = [];
  // const allData = [];
  try {
    const filterPost = await Posts.find();

    // conditional logic to return data
    for (let post of filterPost) {
      if (
        filterCost(post, cost) ||
        filterUsername(post, usernameLower) ||
        filterStyle(post, styleLower) ||
        filterCompanyName(post, companyNameLower)
      ) {
        filteredData.push(post);
      }
    }
    for (let i = 0; i < filteredData.length; i++) {
      let indexed = filterExcess(
        filteredData[i],
        i,
        cost,
        usernameLower,
        styleLower,
        companyNameLower,
        filteredData
      );
      console.log("remove:", filteredData[indexed]);
      filteredData.splice(indexed, 1);
    }

    console.log("filteredData:", filteredData);

    res.send({ status: "filtered successfully", data: filteredData });
  } catch (error) {
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

router.get("/seed", async (req, res) => {
  try {
    await Posts.deleteMany({});
    // const newPosts = await Posts.create([
    //   {
    //     title: "welcome to mama",
    //     img: "https://i.imgur.com/TwHkvE5.jpeg",
    //     short_description: "mama is not so nice",
    //     description: "mama is nice",
    //     style: "scandinavian",
    //     cost: 2000,
    //     company_name: "MaMa",
    //     username: ""
    //   },
    // ]);
    res.send("deleted");
  } catch (error) {
    res.send(error);
  }
});

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
