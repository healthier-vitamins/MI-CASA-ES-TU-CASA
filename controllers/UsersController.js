const express = require("express");
const session = require("express-session");
const bcrypt = require("bcrypt");
const Users = require("../models/Users");

const router = express.Router();

// saltRounds for bcrypt!!!
const saltRounds = bcrypt.genSaltSync(10);

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
        company_name: "Who's Joe",
        profileImg: "https://i.imgur.com/fSBfFDP.jpg",
        socialLink: "https://www.instagram.com/richkids_english_police/?hl=en",
        // postCount: "",
        // likeCount: "",
      },
      {
        username: "whatsupdog",
        password: bcrypt.hashSync("12345678", saltRounds),
        firstName: "Up",
        lastName: "Dog",
        email: "whatsupdog@email.com",
        company_name: "Snoop Dogg",
        profileImg: "https://i.imgur.com/9S7TWYn.jpg",
        socialLink: "https://www.instagram.com/world_record_egg/",
        // postCount: [6],
        // likeCount: [666],
      },
      {
        username: "whatsamatterbaby",
        password: bcrypt.hashSync("12345678", saltRounds),
        firstName: "Matter",
        lastName: "Baby",
        email: "matterbaby@email.com",
        company_name: "Aaaa",
        profileImg: "https://i.imgur.com/2jdd9fW.jpg",
        socialLink: "https://www.instagram.com/nocturnaltrashposts/?hl=en",
        // postCount: [21],
        // likeCount: [37],
      },
    ]);
    res.send(fixedUsers);
  } catch (error) {
    res.send(error);
  }
});

// signup route
router.post("/signup", async (req, res) => {
  const {
    username,
    password,
    firstName,
    lastName,
    email,
    company_name,
    profileImg,
    socialLink,
  } = req.body;
  console.log(req.body);
  const duplicateUser = await Users.findOne({ username });
  if (!duplicateUser) {
    try {
      const createUser = await Users.create({ ...req.body, password:bcrypt.hashSync(password, saltRounds) });
      res.send({ status: "success", data: createUser})
    } catch (error) {
      res.send(error);
    }
  } else {
    res.send("username taken");
  }
});

// login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const userLogin = await Users.findOne({ username });
  if (userLogin === null) {
    res.send({ status: "fail", data: "Username not found :(" });
  } else {
    if (bcrypt.compareSync(password, userLogin.password)) {
      req.session.user = userLogin;
      // console.log("login session", req.session.user)
      // res.status(StatusCodes.OK).send(user);
      res.send({ status: "success", data: userLogin });
    } else {
      res.send("password fail");
    }
  }
});

// log in authentication 
const isLoggedIn = (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    res.send("login fail");
  }
}

router.get("/authorizedtest", isLoggedIn, async (req, res) => {
  res.send(req.session.user)
})

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
