import fetch from "isomorphic-unfetch";
import { merge } from 'lodash';

export interface ActionNetworkPersonArgs {
  person: Person;
  add_tags?: string[];
}

export interface Person {
  identifiers?: string[];
  family_name?: string;
  given_name?: string;
  origin_system?: string
  postal_addresses?: Array<Partial<PostalAddress>>;
  email_addresses: EmailAddress[];
  custom_fields?: {
    [key: string]: any
  }
}

export interface EmailAddress {
  primary?: boolean;
  address: string;
  status?: "subscribed" | "unsubscribed";
}

export interface PostalAddress {
  primary: boolean;
  address_lines: string[];
  locality: string;
  region: string;
  postal_code: string;
  country: string;
  language: string;
  location: Location;
}

export interface Location {
  latitude: number;
  longitude: number;
  accuracy: string;
}

export const createActionNetworkContact = async (
  key: string,
  person: any // ActionNetworkPersonArgs
) => {
  const res = await fetch('https://actionnetwork.org/api/v2/people/', {
    headers: {
      'Content-Type': 'application/json',
      'OSDI-API-Token': key
    },
    method: 'POST',
    body: JSON.stringify(person)
  })
  const d = await res.json()
  return d
}