require('dotenv').config()
const express = require('express')
const cors = require('cors')
const config = require('./config')
const morgan = require('morgan')
const helmet = require('helmet')
const logger = require('./config/logger')
const getCustomMorganFormat = require('./config/morgan')
const exceptionHandler = require('./utils/exceptionHandler')

const app = express()

app.use(express.json())
app.use(morgan(getCustomMorganFormat()))
app.use(cors())
app.use(helmet())

const PORT = config.environment.port

app.use('/api', require('./routes'))

const started = new Date()

app.get('/', (req, res) => {
  logger.info('Server is online')
  return res.status(200).json({
    success: true,
    message: 'Server online',
    started,
    uptime: (Date.now() - Number(started)) / 1000

  })
})

app.use((error, req, res, next) => {
  exceptionHandler(error, res)
})
app.listen(PORT, () => {
  logger.info(`Server is up and running on port : ${PORT}`)
})
