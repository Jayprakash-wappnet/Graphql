const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");



//ApolloServer is give as Server
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Product
  }
});

server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
