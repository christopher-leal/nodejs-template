const winston = require('winston')
const config = require('./index')

const infraFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
)

const localFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.simple()
)

/**
 * Instance of winston logger
 * @type {object}
 */
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: './logs/combined.log' })

  ],
  format: config.environment.env === 'dev' ? localFormat : infraFormat
})

module.exports = logger
