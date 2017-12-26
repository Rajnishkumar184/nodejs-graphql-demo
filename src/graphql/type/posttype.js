const _ = require("lodash");
let {
  // These are the basic GraphQL types need in this tutorial
  GraphQLString,
  GraphQLList,
  GraphQLObjectType,
  // This is used to create required fileds and arguments
  GraphQLNonNull,
  // This is the class we need to create the schema
  GraphQLSchema
} = require("graphql");
const AuthorType = require("./authortype");

const PostType = new GraphQLObjectType({
  name: "Post",
  description: "This represent a Post",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: GraphQLString },
    slug: { type: new GraphQLNonNull(GraphQLString) },
    author: {
      type: AuthorType,
      resolve: function(post) {
        return _.find(Authors, a => a.id == post.author_id);
      }
    }
  })
});

module.exports = PostType;
