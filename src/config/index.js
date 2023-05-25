const Joi = require('joi')

const schema = Joi.object({
  PORT: Joi.number().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  JWT_SECRET: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().required(),
  SHOW_REQUEST_BODY: Joi.boolean().default(false),
  NODE_ENV: Joi.string().valid('nonprod', 'prod', 'dev').default('dev')
}).unknown()

const { error, value: envVars } = schema.validate(process.env)
if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

const db = {
  DATABASE_HOST: envVars.DATABASE_HOST,
  DATABASE_PORT: envVars.DATABASE_PORT,
  DATABASE_USERNAME: envVars.DATABASE_USERNAME,
  DATABASE_PASSWORD: envVars.DATABASE_PASSWORD,
  DATABASE_NAME: envVars.DATABASE_NAME
}

const environment = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  showRequestBody: envVars.SHOW_REQUEST_BODY
}

const jwt = {
  secret: envVars.JWT_SECRET,
  expireIn: envVars.JWT_EXPIRES_IN
}

module.exports = {
  db,
  environment,
  jwt
}
