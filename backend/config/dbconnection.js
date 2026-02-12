const mongoose = require("mongoose");
const URI = process.env.URI;

// create the connection function here as such
const DbConnection = async () => {
  // split this into a try and catch case here as such
  try {
    await mongoose.connect(URI);
    console.log("Successfully Connected to Database");
    return true;
  } catch (error) {
    console.error("Error connecting to the database", error);
    return false;
  }
};

module.exports = DbConnection;
