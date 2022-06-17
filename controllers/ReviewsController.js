const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("probably don't need this route")
})
// create post
router.get("/create", (req, res) => {
    res.send("you'll create post here")
  })

//show post
router.get("/:id", (req, res) => {
    res.send("post will be here")
  })

  module.exports = router;