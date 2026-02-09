const express = require("express");
const app = express();

// set up the express json middleware here as such
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    Intro:
      "Welcome to RayBlogs Not your typical blog post but rather a server to",
  });
});

module.exports = app;
