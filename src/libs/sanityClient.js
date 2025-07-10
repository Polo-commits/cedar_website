// src/sanityClient.js

import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'cilh7kpx',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

// Fetch HSE Policies — EXPANDED
export async function getHSEPolicies() {
  const query = `*[_type == "hsePolicies"][0]{
    title,
    subtitle,
    heading,
    body,
    signed,
    image {
      asset->{
        url
      }
    }
  }`
  return await client.fetch(query);
}
