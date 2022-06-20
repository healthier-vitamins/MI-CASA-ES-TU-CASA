// express init
const express = require("express");

// mongoose init
const mongoose = require("mongoose");

// controllers
const PostsController = require("./controllers/PostsController");
const ReviewsController = require("./controllers/ReviewsController");
const UsersController = require("./controllers/UsersController");

// express init
const app = express();

// for dist/root file
const path = require("path");

// envs
const PORT = process.env.PORT ?? 3000
const MONGO_URI = process.env.MONGO_URI ?? "mongodb+srv://general-assembly:246135@cluster0.v2pf4.mongodb.net/collective"

// mongoose init
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));
mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// middleware
app.use(express.json());

// dist init
app.use(express.static("./frontend/dist"));
app.use("/api/posts", PostsController);
app.use("/api/reviews", ReviewsController);
app.use("/api/users", UsersController);

// express init
app.get("/api/", (req, res) => {
    res.send("welcome to the hoe in me");
})

//! might not be needed
// home 
// app.get("/api/home", (req, res) => {
//   res.send("random posts will be here")
// })

// for dist root/file
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/dist/index.html"));
});

// express init
app.listen(PORT, () => {
    console.log(`server is runnning on port: ${PORT}`);
})