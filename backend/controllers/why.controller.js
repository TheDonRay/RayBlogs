const whyRayBlogs = (req, res) => { 
    const whyray = req.query; 
    console.log('user typed in', whyray);  
    res.status(200).json({ 
        WhyRay: 'RayBlogs reimagines the diary by making blogging API-driven. Instead of a traditional interface, posts are accessed and updated through HTTP requests — creating a completely different kind of blog experience.'
    })
}; 

module.exports = whyRayBlogs; 