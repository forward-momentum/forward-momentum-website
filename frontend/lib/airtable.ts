import Airtable from 'airtable'
const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
const base = airtable.base(process.env.AIRTABLE_MEMBERS_BASE_ID)
const table = base(process.env.AIRTABLE_MEMBERS_BASE_TABLE_NAME)

export default table

export const createRecords = (table: Airtable.Table<any>, rows: Array<{ fields: any }>) => new Promise((resolve, reject) => {
  (table.create as any)(rows, ((err, records) => {
    if (err) {
      reject(err)
    }
    resolve(records)
  }));
})

export const countRecords = (table: Airtable.Table<any>) => new Promise<number>(async (resolve) => {
  let length: number
  const records = await table.select().all()
  length = records.length
  resolve(length)
})