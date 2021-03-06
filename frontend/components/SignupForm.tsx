/** @jsx jsx */
import { jsx, Button, Label, Select, Box } from 'theme-ui';
import { useForm, Controller } from "react-hook-form";
import { TextInput, fieldErrorStyle, IN } from '../components/form';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { registerSupporter } from '../data/api';
import { schema } from '../data/fwdmomentum';
import { useAnalytics } from '../lib/analytics/browser';

const SignUp = () => {
  const router = useRouter()
  const defaultValues = schema.cast(router.query)

  const { register, handleSubmit, watch, errors, control, formState } = useForm({
    validationSchema: schema,
    defaultValues
  });

  const [successfullySubmitted, setSuccessfullySubmitted] = useState(false)

  const hasErrors = Object.keys(errors).length > 0
  const d = watch()

  type ArgumentTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
  type Fields = ArgumentTypes<ArgumentTypes<typeof handleSubmit>[0]>[0]

  const analytics = useAnalytics()

  const trackAttemptedSignup = (success = true) => {
    analytics.trackEvent('attemptedSignup', {
      'category': 'campaign',
      'label': 'Clicked the sign-up send button',
      'value': 'webform',
      success
    });
  }

  const onSubmit = async (data: Fields) => {
    trackAttemptedSignup(true)

    try {
      schema.validate(data)
      if (schema.isValid(data)) {
        analytics.trackEvent('validSignup', {
          'category': 'campaign',
          'label': 'Submitted valid signup data',
          'value': 'webform'
        });

        const res = await registerSupporter(data)
        if (!res.ok) throw new Error("Not OK response from server")
        const d = await res.json()
        if (!d.success) throw new Error("Failure to record signup. " + d.error)
        setSuccessfullySubmitted(true)
      }
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (formState.isSubmitted && successfullySubmitted) {
      const { firstName, consentToEmail, consentToMessaging, consentToPhone } = d
      analytics.trackEvent('successfulSignup', {
        'category': 'campaign',
        'label': 'Signup was successful',
        'value': 'webform',
      });
      router.push({
        pathname: '/share',
        query: { firstName, consentToEmail, consentToMessaging, consentToPhone }
      })
    }
  }, [router, formState.submitCount, successfullySubmitted])

  return (
    <Box sx={{ variant: 'page.narrow' }}>
      <form onSubmit={handleSubmit(onSubmit as any)} onInvalid={() => {
        trackAttemptedSignup(false)
      }}>

        <Label>{(schema.fields.isSupporter as any)._label}</Label>
        <Label variant='forms.checkboxOption' sx={{ lineHeight: '2em' }}>
          <IN sx={{ variant: 'checkbox' }} name='isSupporter' type="checkbox" ref={register} />
            Yes, I do
          </Label>

        <Label>{(schema.fields.hasVolunteered as any)._label}</Label>
        <Label variant='forms.checkboxOption' sx={{ lineHeight: '2em' }}>
          <IN type='checkbox' sx={{ variant: 'checkbox' }} name={'hasVolunteered'} ref={register} />
            Yes, let me know how
          </Label>

        <Label>{(schema.fields.momentumMember as any)._label}</Label>
        <Label variant='forms.checkboxOption' sx={{ lineHeight: '2em' }}>
          <IN type='checkbox' sx={{ variant: 'checkbox' }} name={'momentumMember'} ref={register} />
            Yes, I am
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

        <TextInput
          name='townCity'
          schema={schema}
          errors={errors}
          register={register}
        />

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

        <Button disabled={hasErrors || formState.isSubmitting} type="submit" sx={{ mt: 3, fontSize: 4, fontWeight: 700, width: '100%' }}>
          {hasErrors ? 'Fix your answers' : formState.isSubmitting ? 'Sending...' : 'Complete'}
        </Button>
      </form>
    </Box>
  )
};

export default SignUp