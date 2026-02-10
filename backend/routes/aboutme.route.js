const express = require('express'); 
aboutmeRoute = express.Router(); 
const aboutmeController = require('../controllers/aboutme.controller.js'); 

aboutmeRoute.get('/aboutme', aboutmeController); 

module.exports = aboutmeRoute; 