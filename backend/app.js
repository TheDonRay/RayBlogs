const express = require("express");
const app = express();

// set up the express json middleware here as such
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    Intro:
      "Welcome to RayBlogs — not your typical blog. This is where I share my journey, one post at a time",
  });
});

module.exports = app;
