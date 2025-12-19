const fs = require('fs')

const jsonDataStrategy = () => {
  const db = fs.readFileSync("../db.json", "utf8")
  const data = JSON.parse(db)
  const setelit = data.setelit
  return setelit
}

const dataStrategies = {
  jsonFile: jsonDataStrategy
}

const getDataStrategy = (dataSource) => dataStrategies[dataSource]

module.exports = getDataStrategy