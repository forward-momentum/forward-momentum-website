import { schema, SchemaObject } from '../signup';
import table, { createRecords } from '../../lib/airtable';

const translateFormToAirtableFields = (data: SchemaObject) => {
  const { region, isSupporter, ...d } = data

  return {
    ...d,
    regionFromWebsite: region,
    ['On board with project']: (isSupporter ? 3 : 1).toString(),
    dataSource: "Signed up via https://fwdmomentum.org"
  }
}

export default async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  let success = false

  if (req.method !== 'POST') {
    res.statusCode = 400
    res.end(JSON.stringify({ success, error: "Only accepts POST method" }))
  }

  const data = schema.cast(req.body)
  if (!schema.isValid(data)) {
    res.statusCode = 400
    res.end(JSON.stringify({ success, error: "Invalid payload." }))
  }

  try {
    const res = await createRecords(table, [{
      "fields": translateFormToAirtableFields(data)
    }])
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    return res.end(JSON.stringify({ success, error }))
  }
  res.statusCode = 200
  return res.end(JSON.stringify({ success: true }))
}