const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/exercises', (req, res) => {
  res.send(
    [{
      name: 'A name',
      description: 'This is my desc tag',
      tags: ['tag']
    }]
  )
})

app.listen(process.env.PORT || 8082)
