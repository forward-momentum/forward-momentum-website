import * as yup from 'yup'

export const schema = yup.object({
  consentToDataPolicy: yup
    .boolean()
    .label("Consent to privacy policy and data handling")
    .oneOf([true], "You must consent to the data and privacy policy to submit this form"),
  firstName: yup
    .string()
    .label("First name")
    .required(),
  lastName: yup
    .string()
    .label("Last name")
    .required(),
  email: yup
    .string()
    .label("Email address")
    .email()
    .required(),
  phone: yup
    .string()
    .label("Phone number"),
  townCity: yup
    .string()
    .label("Town or city"),
  region: yup
    .string()
    .oneOf([
      "Wales",
      "Northern Ireland",
      "Scotland",
      "North West",
      "North East",
      "Yorkshire and the Humber",
      "East of England",
      "West Midlands",
      "East Midlands",
      "South West",
      "South East",
      "London",
    ])
    .label("UK region where you live")
    .required(),
  isSupporter: yup
    .boolean()
    .label("Do you support the goals of this campaign?"),
  hasVolunteered: yup
    .boolean()
    .label("Do you want to get involved?"),
  momentumMember: yup
    .boolean()
    .label("Are you a Momentum member?"),
  consentToEmail: yup
    .boolean()
    .label("Consent to emails"),
  consentToMessaging: yup
    .boolean()
    .label("Consent to text and whatsapp messaging"),
  consentToPhone: yup
    .boolean()
    .label("Consent to phone calls"),
})

export type SchemaObject = yup.InferType<typeof schema>