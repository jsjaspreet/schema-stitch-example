const database = require('./database')

const getStoreById = (id) => {
  const query = {
    sql: `select * from stores 
        where id = @id`,
    params: {
      id
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

module.exports = getStoreById
