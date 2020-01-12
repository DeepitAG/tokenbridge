const Redis = require('ioredis')
const logger = require('./logger')

const redis = new Redis({
  host: process.env.ORACLE_REDIS_URL,
  password: process.env.REDIS_PWD,
  port: process.env.REDIS_PORT
})

redis.on('connect', () => {
  logger.info('Connected to redis')
})

redis.on('error', () => {
  logger.error('Disconnected from redis')
})

module.exports = {
  redis
}
