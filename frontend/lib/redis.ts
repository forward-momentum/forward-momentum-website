import url from 'url'
import Redis from 'redis'
import { promisify } from "util"

let redis: Redis.RedisClient

if (process.env.REDIS_URL) {
  const redisURL = url.parse(process.env.REDIS_URL);
  redis = Redis.createClient(parseInt(redisURL.port), redisURL.hostname, { no_ready_check: true });
  redis.auth(redisURL.auth.split(":")[1]);
  console.log("Connected to production REDIS")
} else {
  redis = Redis.createClient()
  console.log("Connected to development REDIS")
}

export const getAsync = promisify(redis.get).bind(redis);
export const setAsync = promisify(redis.set).bind(redis);
export const setexAsync = promisify(redis.setex).bind(redis);

export default redis