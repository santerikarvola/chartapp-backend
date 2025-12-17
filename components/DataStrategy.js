const fs = require('fs')

const jsonDataStrategy = (database) => {
  const db = fs.readFileSync(database, "utf8")
  const data = JSON.parse(db)
  const setelit = data.setelit
  return setelit
}

const dataStrategies = {
  json: jsonDataStrategy
}

const getDataStrategy = (dataType) => dataStrategies[dataType]

module.exports = getDataStrategy