import { getAsync, setexAsync } from '../../lib/redis';
import table, { countRecords } from '../../lib/airtable';

export const getRegisteredSupportersCount = async (): Promise<number> => {
  const REDIS_KEY = 'countRegisteredSupporters'
  const REDIS_EXPIRY_SECONDS = 60

  let count: number = await getAsync(REDIS_KEY)
  if (!count) {
    count = await countRecords(table)
    setexAsync(REDIS_KEY, REDIS_EXPIRY_SECONDS, count)
  }
  return count
}

export default async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  let success = false

  if (req.method !== 'GET') {
    res.statusCode = 400
    res.end(JSON.stringify({ success, error: "Only accepts GET method" }))
  }

  try {
    const count = await getRegisteredSupportersCount()
    success = true
    res.statusCode = 200
    return res.end(JSON.stringify({ success, count }))
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    return res.end(JSON.stringify({ success, error }))
  }
}