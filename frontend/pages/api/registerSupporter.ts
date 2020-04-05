import { schema, SchemaObject } from '../signup';
import Airtable from 'airtable'
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
const base = airtable.base(process.env.AIRTABLE_MEMBERS_BASE_ID)
const table = base(process.env.AIRTABLE_MEMBERS_BASE_TABLE_NAME)

const translateFormToAirtableFields = (data: SchemaObject) => {
  const { region, isSupporter, ...d } = data

  return {
    ...d,
    regionFromWebsite: region,
    ['On board with project']: (isSupporter ? 3 : 1).toString(),
    dataSource: "Signed up via https://fwdmomentum.org"
  }
}

const createRecords = (table, rows: Array<{ fields: any }>) => new Promise((resolve, reject) => {
  table.create(rows, function (err, records) {
    if (err) {
      reject(err)
    }
    resolve(records)
  });
})

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