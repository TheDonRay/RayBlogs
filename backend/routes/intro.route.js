const express = require('express'); 
const introRoute = express.Router(); 
const introController = require('../controllers/intro.controller.js'); 

introRoute.get('/intro', introController);  

module.exports = introRoute; 