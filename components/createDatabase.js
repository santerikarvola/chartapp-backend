const fs = require("fs")
const csvToJson = require("./csvToJson")

const csvFile = fs.readFileSync("./palvelusetelit_CSV.csv", "utf8")
const fullData = csvToJson(csvFile)

fs.writeFileSync("../db.json", JSON.stringify(fullData, null, 2), "utf8")