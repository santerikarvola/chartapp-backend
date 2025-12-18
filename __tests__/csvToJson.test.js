import {describe, it, expect} from "vitest"
import csvToJson from "../components/csvToJson"
import fs from "fs"

describe("csvToJson", () => {
  const testCSV = fs.readFileSync("./components/testCSV.csv", "utf8")

  it("tests converting the CSV-file to correct form", () => {
    const testResult = csvToJson(testCSV)

    expect(testResult).toEqual(
      {
        "setelit": [
          {
            "Päätöksen numero": "P3",
            "Päätöksen päivämäärä": "2025-01-02",
            "Palvelutuotteet": {
              "Kognitiivinen psykoterapia": {
                "Arviohinta": 50,
                "Myönnetyt määrät": 5
              },
              "Hoitoneuvottelu": {
                "Arviohinta": 500,
                "Myönnetyt määrät": 50
              }
            }
          },
          {
            "Päätöksen numero": "P2",
            "Päätöksen päivämäärä": "2025-01-01",
            "Palvelutuotteet": {
              "Lyhytterapia": {
                "Arviohinta": 10,
                "Myönnetyt määrät": 1
              }
            }
          },
          {
            "Päätöksen numero": "P5",
            "Päätöksen päivämäärä": "2025-01-31",
            "Palvelutuotteet": {
              "Fysioterapia": {
                "Arviohinta": 100,
                "Myönnetyt määrät": 10
              }
            }
          },
          {
            "Päätöksen numero": "P4",
            "Päätöksen päivämäärä": "2025-02-12",
            "Palvelutuotteet": {
              "Lyhytterapia": {
                "Arviohinta": 1000,
                "Myönnetyt määrät": 100
              }
            }
          },
          {
            "Päätöksen numero": "P1",
            "Päätöksen päivämäärä": "2025-02-28",
            "Palvelutuotteet": {
              "Neuropsykologinen kuntoutus": {
                "Arviohinta": 0,
                "Myönnetyt määrät": 0
              }
            }
          }
        ]
      }
    )
  })
})