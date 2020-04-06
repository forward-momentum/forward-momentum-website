import { SchemaObject } from '../pages/signup';

export const registerSupporter = async (data: SchemaObject) => {
  return await fetch('/api/registerSupporter', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-Type": 'application/json'
    }
  })
}

export const getRegisteredSupportersCount = async (): Promise<number> => {
  const res = await fetch(process.env.SITE_URL + '/api/countRegisteredSupporters')
  const data = await res.json()
  return data.count
}