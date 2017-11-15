const getAllStores = require('./getAllStores')
const getStoreById = require('./getStoreById')

const resolvers = {
  Query: {
    stores: () => getAllStores(),
    storeById: (_, {id}) => getStoreById(id)
  }
}

module.exports = resolvers