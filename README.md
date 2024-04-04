To execute the server.js using below command

```node server.js```

Once server is running open below url in postman and choose the option for GraphQL to HTTP

```localhost:4000/graphql```

In the below-mentioned postman collection urls with Graphql query and mutation.

**Get Movies:**

```query {
getMovies {
id
name
producer
rating
}
}
```

**Get Movie By Id:**

```query {
getMovie(id: "660e73748dde26e368d968f3") {
id
name
producer
rating
}
}
```
**Add Movie:**
```
mutation {
addMovie(name: "Abc123 Movie", producer: "XYZ 456", rating: 10 ) {
id
name
producer
rating
}
}
```
**Update movie:**

```
mutation {
updateMovie(id: "660e558a2133bfa8bb91fc86", name: "GraphQL", producer: "Alen Max", rating: 6 ){
id
name
producer
rating
}
}
```

**Delete By Id:**

```mutation {
deleteMovie(id: "660e73748dde26e368d968f3"){
id
name
producer
rating
}
}
```