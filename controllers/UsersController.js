const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const Users = require("../models/Users");
const { StatusCodes } = require("http-status-codes");

const router = express.Router();

// middleware
router.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  })
);

// test route
router.get("/", (req, res) => {
  res.send("probably don't need this route");
});

// seed route
router.get("/seed", async (req, res) => {
  try {
    await Users.deleteMany({});
    const fixedUsers = await Users.create([
      {
        username: "joemama",
        password: bcrypt.hashSync("12345678", saltRounds),
        firstName: "Joe",
        lastName: "Mama",
        email: "joemama@email.com",
        profileImg: "https://i.imgur.com/fSBfFDP.jpg",
        socialLink: "https://www.instagram.com/richkids_english_police/?hl=en",
        postCount: 2,
        likeCount: 0,
      },
      {
        username: "whatsupdog",
        password: bcrypt.hashSync("12345678", saltRounds),
        firstName: "Up",
        lastName: "Dog",
        email: "whatsupdog@email.com",
        profileImg: "https://i.imgur.com/9S7TWYn.jpg",
        socialLink: "https://www.instagram.com/world_record_egg/",
        postCount: 6,
        likeCount: 666,
      },
      {
        username: "whatsamatterbaby",
        password: bcrypt.hashSync("12345678", saltRounds),
        firstName: "Matter",
        lastName: "Baby",
        email: "matterbaby@email.com",
        profileImg: "https://i.imgur.com/2jdd9fW.jpg",
        socialLink: "https://www.instagram.com/nocturnaltrashposts/?hl=en",
        postCount: 21,
        likeCount: 420,
      },
    ]);
    res.send(fixedUsers);
  } catch (error) {
    res.send(error);
  }
});

// signup
router.post("/signup", (req, res) => {
  res.send("you'll signuphere");
});

// login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  const userLogin = await Users.findOne({ username });
    if (userLogin === null) {
      res 
        .status(StatusCodes.NOT_FOUND)
        .send({ status: "fail", data: "Username not found :(" });
    } else {
      if 
        (bcrypt.compareSync(password, userLogin.password)) {
        req.session.user = userLogin
        // console.log("login session", req.session.user)
        // res.status(StatusCodes.OK).send(user);
        res.send({ status: "success", data: "welcome!!!!" });
      } else {
        res.send("password fail")
      }
    }
});

// const isLoggedIn = (req, res, next) => {
//   if (req.session.user) {
//     return next();
//   } else {
//     res.send("login fail");
//   }
// }

//show user page
router.get("/username/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userId = await Users.findById(id);
    res.send(userId);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;

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
