require("dotenv").config();
const {app, express} = require("./app.js");
const dbConnection = require("./config/dbconnection.js"); 
const { expressMiddleware } = require("@as-integrations/express5");   
const apolloserver = require('./graphql/ApolloServer.js'); 

const PORT = process.env.PORT;

// set up the function for the actual apollo server stuff so that you understand it fully and correctly.
// as you can see to start the server here its a asynchronous function here as such:
const startServer = async () => {
  // db config
  await dbConnection();
  // apollo server stuff here
  await apolloserver.start(); 
  
  // need to instantiate the middleware to be used here as such and mount the specific route 
  app.use( 
    '/api/v1/rayblogs', express.json(), expressMiddleware(apolloserver)
  ); 
  // general app instance start for express below here
  app.listen(PORT, () => {
    console.log(`RayBlogs Running on http://localhost:${PORT}`);
  });
};

//invoke the server start function below here as such to make sure it starts. 
startServer();
