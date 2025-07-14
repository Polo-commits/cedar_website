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
  }`;
  return await client.fetch(query);
}

// ✅ Fetch Services
export async function getServices() {
  return await client.fetch(`*[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    slug,
    image,
    icon,
    body,
    order
  }`);
}

// ✅ Final version of getAbout
export async function getAbout() {
  const query = `*[_type == "about"][0]{
    title,
    subtitle,
    heading,
    body,
    image {
      asset->{ url }
    },
    teamMembers[] {
      name,
      title,
      bio
    }
  }`;
  return await client.fetch(query);
}

// ✅ Contact
export async function getContact() {
  const query = `*[_type == "contact"][0]{
    title,
    subtitle,
    phones,
    email,
    location,
    mapLink
  }`;
  return await client.fetch(query);
}
