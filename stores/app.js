const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(5050, () => console.log("app is now running at port 5050"))