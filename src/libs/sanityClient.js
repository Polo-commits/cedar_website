import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'cilh7kpx',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

// Fetch HSE Policies
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

// ✅ Add this:
export async function getServices() {
  const query = `*[_type == "service"]{
    title,
    description,
    body
  }`
  return await client.fetch(query);
}
