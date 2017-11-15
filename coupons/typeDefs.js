const typeDefs = `
  type Coupon {
    id: ID!
    code: String!
    storeId: ID!
  }
  
  type Query {
    coupons: [Coupon]
    couponsByStoreId(storeId: ID!): [Coupon]
  }
`

module.exports = typeDefs