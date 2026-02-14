//import the database here as such 
const postdatabase = require('../../model/database.model.js'); 

const postResolver = { 
    Query: { 
        posts: async () => { 
            // set up a try and catch case here as such 
            try { 
                const foundPost = await postdatabase.find(); 
                if (!foundPost) { 
                    throw new Error('Error finding post from database'); 
                } 
                return foundPost; 
            } catch (error) { 
                console.error('There was an error fetching from the database', error);
            }
        },   

        post: async () => { 
            // searching the database for a specific type of post.  
            // implement try and catch case here to make sure its good. 
        }

    }
}; 

module.exports = postResolver; 