/** @jsx jsx */
import { jsx, Input, Button, Label, Select, Box, Styled } from 'theme-ui';
import { withApollo } from '../lib/apollo';
import Layout from '../components/Layout';
import { useForm, ErrorMessage, Controller } from "react-hook-form";
import * as yup from 'yup'
import { TextInput, fieldErrorStyle, IN } from '../components/form';
import { Fragment } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { registerSupporter } from '../data/api';

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
    .label("Do you support this campaign?"),
  hasVolunteered: yup
    .boolean()
    .label("Do you want to get involved?"),
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

const SignUp = () => {
  const router = useRouter()
  const { email } = router.query

  const { register, handleSubmit, watch, errors, control } = useForm({
    validationSchema: schema,
    defaultValues: { email } as SchemaObject
  });

  const d = watch()

  type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
  type Fields = ArgumentTypes<ArgumentTypes<typeof handleSubmit>[0]>[0]

  const onSubmit = async (data: Fields) => {
    try {
      if (schema.isValid(data)) {
        const res = await registerSupporter(data)
        if (!res.ok) throw new Error("Not OK response from server")
        const d = await res.json()
        if (!d.success) throw new Error("Failure to record signup. " + d.error)
      }
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Layout>
      <Box sx={{ variant: 'page.block', fontSize: 3 }}>
        <Box sx={{ variant: 'page.narrow' }}>
          <form onSubmit={handleSubmit(onSubmit as any)}>

            <Label>{(schema.fields.isSupporter as any)._label}</Label>
            <Label variant='forms.checkboxOption' sx={{ lineHeight: '2em' }}>
              <IN sx={{ variant: 'checkbox' }} name='isSupporter' type="checkbox" ref={register} />
            Yes, I support the campaign
          </Label>

            <Label>{(schema.fields.hasVolunteered as any)._label}</Label>
            <Label variant='forms.checkboxOption' sx={{ lineHeight: '2em' }}>
              <IN type='checkbox' sx={{ variant: 'checkbox' }} name={'hasVolunteered'} ref={register} />
            Yes, let me know how
          </Label>

            <TextInput
              name='firstName'
              schema={schema}
              errors={errors}
              register={register}
            />

            <TextInput
              name='lastName'
              schema={schema}
              errors={errors}
              register={register}
            />

            <TextInput
              name='email'
              type='email'
              schema={schema}
              errors={errors}
              register={register}
            />

            <TextInput
              name='phone'
              schema={schema}
              errors={errors}
              register={register}
            />

            <Label>{(schema.fields.region as any)._label}</Label>
            <Controller
              name="region"
              control={control}
              as={
                <Select>
                  <option disabled selected>Select a region</option>
                  {Array.from((schema.fields.region as any)._whitelist.list as string[]).map((value, key) => (
                    <option id={`amount-${key}`} value={value}>{value}</option>
                  ))}
                </Select>
              }
            />
            {errors.region && <div style={fieldErrorStyle}>{errors.region.message}</div>}

            <Label variant='forms.checkboxOption' sx={{ mt: 4 }}>
              <IN sx={{ variant: 'checkbox' }} type='checkbox' name='consentToDataPolicy' ref={register} />
              <small>You are over the age of 13 or have you parents/guardians' permission to sign this form. You consent to Forward Momentum staff and volunteers storing and handling my data for campaign purposes, in accordance with our <Link href='/privacy-policy'>privacy policy</Link>.</small>
            </Label>
            {errors.consentToDataPolicy && <div style={fieldErrorStyle}>{errors.consentToDataPolicy.message}</div>}

            <Label>Forward Momentum staff and volunteers can contact me about their campaigns via...</Label>
            <Label variant='forms.checkboxOption' sx={{ lineHeight: '2em' }}>
              <IN sx={{ variant: 'checkbox' }} type='checkbox' name={'consentToEmail'} ref={register} />
              <span>Email</span>
            </Label>
            <Label variant='forms.checkboxOption' sx={{ lineHeight: '2em' }}>
              <IN sx={{ variant: 'checkbox' }} type='checkbox' name={'consentToMessaging'} ref={register} />
              <span>SMS / Whatsapp</span>
            </Label>
            <Label variant='forms.checkboxOption' sx={{ lineHeight: '2em' }}>
              <IN sx={{ variant: 'checkbox' }} type='checkbox' name={'consentToPhone'} ref={register} />
              <span>Phone call</span>
            </Label>

            <Button type="submit" sx={{ mt: 3, fontSize: 4, fontWeight: 700, width: '100%' }}>
              Complete
          </Button>
          </form>
        </Box>
      </Box>
    </Layout>
  )
};

export default withApollo({ ssr: true })(SignUp)