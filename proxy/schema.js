const { mergeSchemas } = require('graphql-tools')
const { makeExecutableSchema } = require('graphql-tools')
const couponsTypeDefs = require('../coupons/typeDefs')
const couponsResolvers = require('../coupons/resolvers')
const storesTypeDefs = require('../stores/typeDefs')
const storesResolvers = require('../stores/resolvers')

const couponsSchema = makeExecutableSchema({
  typeDefs: couponsTypeDefs,
  resolvers: couponsResolvers
})

const storesSchema = makeExecutableSchema({
  typeDefs: storesTypeDefs,
  resolvers: storesResolvers
})


const extensionSchema = `
  extend type Store {
    coupons: [Coupon]
  }
`

const rootSchema = mergeSchemas({
  schemas: [couponsSchema, storesSchema, extensionSchema],
  resolvers: mergeInfo => ({
    Store: {
      coupons: {
        fragment: `fragment StoreFragment on Store { id }`,
        resolve({ id }, args, context, info) {
          const storeId = id
          return mergeInfo.delegate(
            'query',
            'couponsByStoreId',
            {
              storeId
            },
            context,
            info
          )
        }
      }
    }
  })
});

module.exports = rootSchema
