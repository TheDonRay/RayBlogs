const introController = async (req, res) => { 
    // User hits a get request to what is RayBlogs  
    //so im simply sending a response to the backend here as such 
    res.status(200).json({ 
        "What is Ray Blogs?": "RayBlogs is not what you think it is. I bet you were expecting a frontend for this blog site but I wanted to switch it up completely. Instead of a frontend for blog posts why not make it a backend and have people send HTTP requests to fetch the latest blog or information about me and my day to day life",
    })
}   

module.exports = introController; 