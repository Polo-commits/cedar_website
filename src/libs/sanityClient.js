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
  return await client.fetch(`*[_type == "service"]{
    _id,
    title,
    description,
    slug,
    image
  }`);
}

export async function getAbout() {
  const query = `*[_type == "about"][0]{
    title,
    subtitle,
    heading,
    body,
    image,
    teamMembers[] {
      name,
      title,
      bio
    }
  }`;

  return await client.fetch(query);
}


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


