const express = require('express');
const mongoose = require('mongoose');
const schema = require('./src/graphQl/Schema');
const resolvers = require('./src/graphQl/Resolver');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const mongoDbUrl = require('./src/config');

const connect = mongoose.connect(mongoDbUrl.mongoDB, {});

connect.then((db) => {
  console.log('Connected correctly to server!');
}, (err) => {
  console.log(err);
});

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers
});

const app = express();

app.use(bodyParser.json());
app.use('*', cors());

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });
}

startServer().then(() => {
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}).catch(err => {
  console.error('Error starting server:', err);
});
