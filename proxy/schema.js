const { mergeSchemas } = require('graphql-tools')
const couponsSchema = require('../coupons/schema')
const storesSchema = require('../stores/schema')

const extensionSchema = `
  extend type Store {
    coupons: [Coupon]
  }
`

const rootSchema = mergeSchemas({
  schemas: [storesSchema, couponsSchema, extensionSchema],
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
})


module.exports = rootSchema
