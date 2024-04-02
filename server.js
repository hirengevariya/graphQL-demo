const express = require('express');
const { createHandler} = require('graphql-http/lib/use/express');
const { buildSchema} = require('graphql');
const { ruruHTML } = require('ruru/server');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The rootValue provides a resolver function for each API endpoint
const root = {
    hello() {
        return "Hello world!"
    }
}

const app = express();

app.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root
    })
)

app.get('/', (_req, res) => {
    res.type('html')
    res.end(ruruHTML({ endpoint: '/graphql'}))
})

app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/ghraphql");
