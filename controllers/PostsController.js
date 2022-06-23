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
    // console.log("post's cost and query",post.cost, cost)
    if (post.cost <= cost && post.cost > 0) {
      // console.log("return COOSTTT", post);
      return true;
    }
  }
  return false;
};

const filterUsername = (post, usernameLower) => {
  if (usernameLower !== "") {
    // console.log("post's username and query",post.username_lower, usernameLower)
    if (post.username_lower === usernameLower) {
      // console.log("return USERNAMEMEE", post);
      return true;
    }
  }
  return false;
};

const filterStyle = (post, styleLower) => {
  if (styleLower !== "") {
    // console.log("post's style and query",post.style_lower, styleLower)
    if (post.style_lower === styleLower) {
      // console.log("return STYLLEE", post);
      return true;
    }
  }
  return false;
};

const filterCompanyName = (post, companyNameLower) => {
  if (companyNameLower !== "") {
    // console.log("post's company name and query company",post.company_name_lower, companyNameLower)
    if (post.company_name_lower === companyNameLower) {
      // console.log("return COMPAANNYY", post);
      return true;
    }
  }
  return false;
};

const filterExcess = (
  post,
  index,
  cost,
  usernameLower,
  styleLower,
  companyNameLower
) => {
  // if (
  //   post.cost > cost ||
  //   post.username_lower !== usernameLower ||
  //   post.style_lower !== styleLower ||
  //   post.company_name_lower !== companyNameLower
  // ) {
  //   console.log("INDEX:", index);
  //   console.log("post cost & cost:", post.cost, cost);
  //   console.log(
  //     "post username & username:",
  //     post.username_lower,
  //     usernameLower
  //   );
  //   console.log("post style & style:", post.style_lower, styleLower);
  //   console.log(
  //     "post companyname & companyname:",
  //     post.company_name_lower,
  //     companyNameLower
  //   );
  //   return index;
  // }
  // console.log("INDEX:", index);
  //   console.log("post cost & cost:", post.cost, cost);
  //   console.log(
  //     "post username & username:",
  //     post.username_lower,
  //     usernameLower
  //   );
  //   console.log("post style & style:", post.style_lower, styleLower);
  //   console.log(
  //     "post companyname & companyname:",
  //     post.company_name_lower,
  //     companyNameLower
  //   );

  if (post.cost > cost) {
    console.log("COST FAILED:", post.cost, cost);
    console.log("failed index:", index);
    return index;
  }
  if (post.username_lower !== usernameLower) {
    console.log("username FAILED:", post.username_lower, usernameLower);
    console.log("failed index:", index);
    return index;
  }
  if (post.style_lower !== styleLower) {
    console.log("style FAILED:", post.style_lower, styleLower);
    console.log("failed index:", index);
    return index;
  }
  if (post.company_name_lower !== companyNameLower) {
    console.log(
      "company name FAILED:",
      post.company_name_lower,
      companyNameLower
    );
    console.log("failed index:", index);
    return index;
  }
  return -1;
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
    console.log("filteredData before excess", filteredData);
    // for (let j = 0; j < filteredData.length; j++) {
    let indexed;
    const lengthOfFilter = filteredData.length;
    console.log(lengthOfFilter);
    for (let i = 0; i < lengthOfFilter; i++) {
      for (let j = 0; j < filteredData.length; j++) {
        indexed = filterExcess(
          filteredData[j],
          j,
          cost,
          usernameLower,
          styleLower,
          companyNameLower
        );
        if (indexed >= 0) {
          console.log("remove:", filteredData[indexed]);
          filteredData.splice(indexed, 1);
        } else {
          console.log(filteredData);
        }
      }
    }
    console.log("filteredData AFTER EXCESS:", filteredData);
    // }

    if (filteredData.length === 0) {
      filteredData.push("No posts found");
      console.log(filteredData);
    }

    res.send({ status: "filtered successfully", data: filteredData });
  } catch (error) {
    res.send({
      status: "failed filter",
      data: [],
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

// show post for user profile page
router.get("/prof/:id", async (req, res) => {
  const id= req.params.id;
  try {
    const user = await Posts.findById(id);
    res.send({status: "found user", data: user.userId})
  } catch (error) {
    res.send({ status: "error", data: "couldn't find any posts made by this user"})
  }
})

module.exports = router;
