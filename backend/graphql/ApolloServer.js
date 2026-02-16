// define the apollo server here as such
const { ApolloServer } = require("@apollo/server");
// get all the typeDefinitions here as such
const { blogPosts } = require("../graphql/typeDefs");
// get all the resolvers here as such
const {postQueryResolver, postMutation } = require('../graphql/resolvers'); 

// export the apollo server here as such.
const apolloserver = new ApolloServer({ 
    //define the type definitions and the resolvers here as such 
    typeDefs: [blogPosts], 
    resolvers: [postQueryResolver, postMutation], 
}); 

// export the server instance here as such 
module.exports = apolloserver; 