const Router = require('express').Router
const fs = require('fs')

const router = Router()

const ROUTERS_PATH = `${__dirname}`

fs.readdirSync(ROUTERS_PATH).forEach(dir => {
  const route = dir.replace('.js', '')
  if (route !== 'index') {
    router.use(`/${route}`, require(`./${route}`))
  }
})

module.exports = router
