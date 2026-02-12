require("dotenv").config();
const app = require("./app.js");
const dbConnection = require("./config/dbconnection.js");

const PORT = process.env.PORT;

// set up the function for the actual apollo server stuff so that you understand it fully and correctly.
const startServer = async () => {
  // db config
  await dbConnection();
  // apollo server stuff here

  // general app instance start for express below here
  app.listen(PORT, () => {
    console.log(`RayBlogs Running on http://localhost:${PORT}`);
  });
};

//invoke the function below here as such
startServer();
