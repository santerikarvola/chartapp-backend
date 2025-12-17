const fs = require("fs")
const Papa = require("papaparse")

const csvFile = fs.readFileSync("./palvelusetelit_CSV.csv", "utf8")

const parsedData = Papa.parse(csvFile, {
  delimiter: ";",
  header: true,
  dynamicTyping: true,
  skipEmptyLines: "greedy",

})

const jsonData = parsedData.data

console.log("Parsed data", parsedData)
console.log(jsonData)
