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

        post: async (id) => { 
            // searching the database for a specific type of post.  
            // implement try and catch case here to make sure its good.  
            try { 
                const specificPost = await postdatabase.findById(id); 
                if (!specificPost) { 
                    throw new Error('Error in finding a specific post'); 
                }  
                return specificPost; 
            } catch (error) { 
                console.error('Error with finding post from database', error); 
            }
        }  
    } 
    
    // now we can handle the mutations here as such which is completely different here as such 
}; 

module.exports = postResolver; 