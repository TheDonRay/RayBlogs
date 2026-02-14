const introController = async (req, res) => {
  // User hits a get request to what is RayBlogs
  //so im simply sending a response to the backend here as such
  res.status(200).json({
    "What is Ray Blogs?":
      "RayBlogs isn’t what you think it is. You might expect a traditional frontend blog, but I decided to flip the idea entirely. Instead of rendering posts visually, RayBlogs lives on the backend—where users fetch the latest entries and insights about my day-to-day life through HTTP requests.",
  });
};

module.exports = introController;
