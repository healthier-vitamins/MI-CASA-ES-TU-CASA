const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("probably don't need this route")
})

// signup
router.post("/singup", (req, res) => {
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