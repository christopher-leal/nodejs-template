const morgan = require('morgan')

morgan.token('body', (req) => {
  return JSON.stringify(req.body)
})

const showBody = process.env.SHOW_REQUEST_BODY

const getCustomMorganFormat = () =>
  `:method :url :status :res[content-length] - :response-time ms ${
    showBody ? ':body' : ''
  }`

module.exports = getCustomMorganFormat
