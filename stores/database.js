const Spanner = require('@google-cloud/spanner')

const projectId = 'crested-trilogy-120318'

const spanner = new Spanner({
  projectId
})

const instanceId = 'spanner-test'
const databaseId  = 'forum'

const instance = spanner.instance(instanceId)
const database = instance.database(databaseId)

module.exports = database
