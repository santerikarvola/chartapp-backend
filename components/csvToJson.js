const Papa = require("papaparse")

const csvToJson = (csv) => {
  const parsedData = Papa.parse(csv, {
    delimiter: ";",
    header: true,
    dynamicTyping: true,
    skipEmptyLines: "greedy"
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

  return fullData
}

module.exports = csvToJson