const express = require("express");
const app = express();

// import Routes here
const introRoute = require("./routes/intro.route.js");
const aboutmeRoute = require("./routes/aboutme.route.js"); 
const whyRoute = require('./routes/why.route.js'); 

// set up the express json middleware here as such
app.use(express.json());

//Route Mounting here
app.use("/api/v1/", introRoute); // intro route here
app.use("/api/v1/", aboutmeRoute); 
app.use("/api/v1/", whyRoute); 

app.get("/", (req, res) => {
  res.json({
    Intro:
      "Welcome to RayBlogs — not your typical blog. This is where I share my journey, one post at a time",
  });
});

module.exports = app;
