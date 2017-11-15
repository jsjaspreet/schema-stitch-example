const database = require('./database')

const query = {
  sql: 'select * from stores'
}

const getAllStores = () => {
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

module.exports = getAllStores
