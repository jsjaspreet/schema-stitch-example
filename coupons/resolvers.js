const getAllCoupons = require('./getAllCoupons')
const getCouponsByStoreId = require('./getCouponsByStoreId')

const resolvers = {
  Query: {
    coupons: () =>  getAllCoupons(),
    couponsByStoreId: (_, {storeId}) => getCouponsByStoreId(storeId)
  }
}

module.exports = resolvers