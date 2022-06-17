const express = require("express");
const router = express.Router();

//create review
router.post("/:id", (req, res) => {
    res.send("post will be here")
  })

  module.exports = router;