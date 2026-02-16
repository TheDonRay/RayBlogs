// the id is automatically made here so we don thave to worry about that.
// note that the first type is just the structure of the actual data itself.
const blogPosts = ` 
    type Post {  
        id: String!
        title: String! 
        post: String!  
    } 
    
    type Query { 
        posts: [Post!]! 
        post(id: String!): Post
    } 

    type Mutation { 
        createPost(title: String!, post: String!) : Post! 
        updatePost(id: String!, title: String!, post: String!) : Post! 
        deletePost(id: String!) : Boolean!
    }
`;

module.exports = { blogPosts };
