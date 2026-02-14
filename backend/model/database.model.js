// Defining the schema model for the database here as such  
const mongoose = require('mongoose'); 

const rayblogsSchema = new mongoose.Schema({ 
    title: { 
        required: true, 
        type: String, 
    }, 
    post: { 
        required: true, 
        type: String
    }, 
    Date: { 
        type: Date, 
        default: Date.now
    }
}); 

module.exports = mongoose.model('RayBlogs', rayblogsSchema); 