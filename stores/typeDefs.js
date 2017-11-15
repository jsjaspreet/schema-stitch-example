const typeDefs = `
  type Store {
    id: ID!
    title: String!
    url: String!
  }
  
  type Query {
    stores: [Store]
    storeById(id: ID!): [Store]
  }
`

module.exports = typeDefs