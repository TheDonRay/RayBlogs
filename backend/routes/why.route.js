const express = require('express');  
const whyRoute = express.Router();  
const whyController = require('../controllers/why.controller.js'); 

whyRoute.get('/whyray', whyController); 

module.exports = whyRoute; 