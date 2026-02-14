const whyRayBlogs = (req, res) => {
  // wrap this in a try and catch case.
  try {
    const question = req.query.question; // compared to the usual req.query that would get like the entire query object the req.query.question just gets the specific value of the parameter assigned to the URL. 

    if (!question.search) { // search parameters help with the req.query parameter  to make sure there is at least a key value pair
        return res.status(401).json({ 
            ErrorMessage: 'Nothing entered in query parameters.'
        }); 
    }; 
    res.status(200).json({
      Question:
        "RayBlogs reimagines the diary by making blogging API-driven. Instead of a traditional interface, posts are accessed and updated through HTTP requests — creating a completely different kind of blog experience.",
    });
    console.log("user typed in", question);
  } catch (error) {
    res.status(500).json({
      Error: "getting data from server error.",
    });
    console.error("There was an error retrieving data from the server", error);
  }
};

module.exports = whyRayBlogs;
