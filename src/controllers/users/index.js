const HTTP_STATUS = require('../../constants/httpCodes')

const getUsers = async (req, res, next) => {
  try {
    return res.status(HTTP_STATUS.SUCCESS).json({
      success: true
    })
  } catch (error) {
    next(error)
  }
}

module.exports = { getUsers }
