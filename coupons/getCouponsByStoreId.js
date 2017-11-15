const database = require('./database')

const getCouponsByStoreId = (storeId) => {
  const query = {
    sql: `select * from coupons 
        where storeId = @storeId`,
    params: {
      storeId
    }
  }
  return database
    .run(query)
    .then(results => {
      const rows = results[0];
      return rows.map(row => row.toJSON())
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

module.exports = getCouponsByStoreId
