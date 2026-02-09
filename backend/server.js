require('dotenv').config(); 
const { app, express } = require('./app.js'); 
// import the apollo server stuff 

const PORT = process.env.PORT; 

const startServer = async () => { 
    // instantiate the server here as such  
    app.listen(PORT, () => { 
        console.log(`RayBlog is successfully running on http://localhost:${PORT}`); 
    }); 
}; 

// invoke the function here as such 
startServer; 