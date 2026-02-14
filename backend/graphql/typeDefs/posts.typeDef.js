// the id is automatically made here so we don thave to worry about that. 

const blogPosts = ` 
    type Post {  
        id: String!
        title: String! 
        post: String!  
    } 
    
    type Query { 
        posts: [Posts!]! 
        post(id: String!): Post
    } 

    type Mutation { 
        createPost(title: String!, post: String!) : Post! 
        udpatePost(id: String!, title: String!, post: String!) : Post! 
        deletePost(id: String!) : Boolean!
    }
`;  

module.exports = blogPosts;  