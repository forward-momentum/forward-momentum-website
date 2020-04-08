import table, { createRecords } from '../../lib/airtable';
import { createActionNetworkContact, ActionNetworkPersonArgs } from '../../lib/actionnetwork';
import { schema, SchemaObject } from '../../data/fwdmomentum';

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
    const airtableResponse = await createRecords(table, [{
      "fields": translateFormToAirtableFields(data)
    }])

    const actionNetworkData = translateFromToActionNetworkFields(data)
    const actionNetworkResponse = await createActionNetworkContact(
      process.env.ACTIONNETWORK_API_KEY,
      actionNetworkData
    )
  } catch (error) {
    console.error(error)
    res.statusCode = 500
    return res.end(JSON.stringify({ success, error }))
  }
  res.statusCode = 200
  return res.end(JSON.stringify({ success: true }))
}

// Translators to different third party systems

const translateFormToAirtableFields = (data: SchemaObject) => {
  const { region, momentumMember, isSupporter, townCity, ...d } = data

  return {
    ...d,
    regionFromWebsite: region,
    ['Specific location']: townCity,
    ['Relationship to momentum']: momentumMember ? ['Member'] : undefined,
    ['On board with project']: (isSupporter ? 3 : 1).toString(),
    dataSource: "Signed up via https://fwdmomentum.org"
  }
}

export const translateFromToActionNetworkFields = ({
  firstName,
  lastName,
  email,
  ...person
}: SchemaObject): ActionNetworkPersonArgs => {
  const tags = []

  if (person.isSupporter) {
    tags.push('Support Level 3')
  } else {
    tags.push('Support Level 1')
  }

  if (person.hasVolunteered) {
    tags.push('Volunteer')
  }

  if (person.momentumMember) {
    tags.push('Momentum member')
  }

  return {
    person: {
      "identifiers": [
        `basic:${email}`
      ],
      "given_name": firstName,
      "family_name": lastName,
      "postal_addresses": [{
        "primary": true,
        "locality": person.townCity,
        "region": person.region,
        "country": "GB"
      }],
      "email_addresses": [{
        "primary": true,
        "address": email,
        "status": person.consentToEmail ? "subscribed" : "unsubscribed"
      }],
      custom_fields: person,
      origin_system: "Signed up via https://fwdmomentum.org",
    },
    add_tags: tags
  }
}