// express init
const express = require("express");

// mongoose init
const mongoose = require("mongoose")

// express init
const app = express();

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

// express init
app.get("/api/", (req, res) => {
    res.send("welcome to the hoe in me");
})

// express init
app.listen(PORT, () => {
    console.log(`server is runnning on port: ${PORT}`);
})