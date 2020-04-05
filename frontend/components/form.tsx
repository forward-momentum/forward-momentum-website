/** @jsx jsx */
import { jsx, Label, Input, Textarea, Select } from 'theme-ui'
import { ErrorMessage } from "react-hook-form";
import React, { Fragment, DetailedHTMLProps, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, forwardRef } from 'react';
import * as yup from 'yup'

type YupObjectSchema = yup.ObjectSchema<{ [key: string]: any }>

export const fieldErrorStyle = {
  color: 'red',
  fontWeight: 500,
  mt: '0.1em',
  mb: '0.1em'
}

export const IN: React.FC<any> = forwardRef((props, ref) => <input ref={ref} {...props} />)

export function TextInput<S extends YupObjectSchema>({ name, label, schema, errors, register, ...componentProps }: {
  label?: string
  name: keyof S['fields']
  errors: any
  schema: S
  register: any
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  try {
    const id = `field-${name}`
    const _label = label || (schema.fields[name] as any)?._label
    const hasErrors = errors[name]
    const errorMessage = <ErrorMessage errors={errors} name={name} />

    return (
      <Fragment>
        {_label && <Label htmlFor={id}>{_label}</Label>}
        {errors && hasErrors && <div style={fieldErrorStyle}>{errorMessage}</div>}
        <Input type='text' {...componentProps} name={name} id={id} ref={register()} />
      </Fragment>
    )
  } catch (e) {
    console.error(name, schema.fields)
    throw new Error(`${name} field probably does not exist in the Yup schema.`)
  }
}


export function TextAreaInput<S extends YupObjectSchema>({ name, label, schema, errors, register, ...componentProps }: {
  label?: string
  name: keyof S['fields']
  errors: any
  schema: S
  register: any
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) {
  try {
    const id = `field-${name}`
    const _label = label || (schema.fields[name] as any)?._label
    const hasErrors = errors[name]
    const errorMessage = <ErrorMessage errors={errors} name={name} />

    return (
      <Fragment>
        {_label && <Label htmlFor={id}>{_label}</Label>}
        {errors && hasErrors && <div style={fieldErrorStyle}>{errorMessage}</div>}
        <Textarea {...componentProps} name={name} id={id} ref={register()} />
      </Fragment>
    )
  } catch (e) {
    console.error(name, schema.fields)
    throw new Error(`${name} field probably does not exist in the Yup schema.`)
  }
}

export function SelectInput<O, S extends YupObjectSchema>(
  { name, label, options, errors, renderOption, schema, register, ...inputProps }: {
    label?: string,
    name: keyof S['fields']
    errors: any
    options: O[]
    renderOption: (i: O, ind: number, arr: O[]) => any
    schema: S
    register: any
  } & DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>
) {
  try {
    const id = `field-${name}`
    const _label = label || (schema.fields[name] as any)?._label
    const hasErrors = errors[name]
    const errorMessage = <ErrorMessage errors={errors} name={name} />

    return (
      <Fragment>
        {_label && <Label htmlFor={id}>{_label}</Label>}
        {errors && hasErrors && <div style={fieldErrorStyle}>{errorMessage}</div>}
        <Select {...inputProps} name={name} id={id} ref={register()}>
          {options.map(renderOption)}
        </Select>
      </Fragment>
    )
  } catch (e) {
    console.error(name, schema.fields)
    throw new Error(`${name} field probably does not exist in the Yup schema.`)
  }
}