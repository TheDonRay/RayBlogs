const aboutmeController = async (req, res) => {
  res.json({
    "So Who's Ray?":
      "I am a Junior at Hunter College, passionate about building services and systems to aid people in not only their everyday lives but also their own journey. I never was really good at coding, whether it be from leetcode to simple for loops you name it, it wasn't my best skill but I still showed up. Thats the type of person I am.",
  });
};

module.exports = aboutmeController;
