const express = require("express");
const whyRoute = express.Router();
const whyController = require("../controllers/why.controller.js");

whyRoute.get("/question", whyController);

module.exports = whyRoute;
