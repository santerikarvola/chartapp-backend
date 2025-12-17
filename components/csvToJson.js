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

const groupedData = {}

for(const row of jsonData){
  const numero = row["Päätöksen numero"]
  const paivamaara = row["Päätöksen päivämäärä"]
  const palvelutuote = row["Palvelutuote"]
  const hinta = row["Arviohinta"]
  const maara = row["Myönnetyt määrät"]

  if(!groupedData[numero]) {
    groupedData[numero] = {
      "Päätöksen numero": numero,
      "Päätöksen päivämäärä": paivamaara,
      "Palvelutuotteet": {}
    }
  }

  groupedData[numero]["Palvelutuotteet"][palvelutuote] = {
    "Arviohinta": hinta,
    "Myönnetyt määrät": maara
  }
}

console.log("groupedData", groupedData)


const fullData = {
  setelit: Object.values(groupedData)
}

fs.writeFileSync("../jsonData.json", JSON.stringify(fullData, null, 2), "utf8")