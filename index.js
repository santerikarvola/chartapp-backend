const express = require('express')
const cors = require('cors')
const getDataStrategy = require("./components/DataStrategy")

const app = express()

const strategy = getDataStrategy("json")
const database = "db.json"
const setelit = strategy(database)

app.use(express.json())
app.use(cors())
app.use(express.static("dist"))

app.get('/api/setelit', (request, response) => {
  response.json(setelit)
})

app.get('/api/setelit/:id', (request, response) => {
  const id = request.params.id
  const seteli = setelit.find(seteli => seteli["Päätöksen numero"] === id)

  if (seteli) {
    response.json(seteli)
  } else {
    response.status(404).end()
  }
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

