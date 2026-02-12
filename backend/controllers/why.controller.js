const whyRayBlogs = (req, res) => {
  // wrap this in a try and catch case.
  try {
    const whyRayBlogs = req.query; 

    if (!whyRayBlogs || whyRayBlogs == " ") { 
        return res.status(401).json({ 
            ErrorMessage: 'Nothing entered in query parameters.'
        }); 
    }; 
    console.log("user typed in", whyRayBlogs);
    res.status(200).json({
      WhyRay:
        "RayBlogs reimagines the diary by making blogging API-driven. Instead of a traditional interface, posts are accessed and updated through HTTP requests — creating a completely different kind of blog experience.",
    });
  } catch (error) {
    res.status(500).json({
      Error: "getting data from server error.",
    });
    console.error("There was an error retrieving data from the server", error);
  }
};

module.exports = whyRayBlogs;
