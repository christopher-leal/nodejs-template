const Router = require('express').Router
const usersController = require('./../controllers/users')
const router = Router()

router.get('/', usersController.getUsers)

module.exports = router
