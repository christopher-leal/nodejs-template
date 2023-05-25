const logger = require('../config/logger')
const HTTP_STATUS = require('../constants/httpCodes')

const exceptionHandler = (error, res) => {
  logger.error(error.message)
  return res.status(HTTP_STATUS.SERVER_ERROR).json({
    error: 'Error not contemplated',
    name: error.name,
    message: error.message,
    stack: error.stack
  })
}

module.exports = exceptionHandler
