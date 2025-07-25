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
    icon { asset->{ url } },
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

// ✅ GalleryProject
export async function getGallery() {
  return await client.fetch(`*[_type == "galleryProject"] | order(_createdAt desc) {
    title,
    category,
    description,
    images[] {
      image { asset->{ url } },
      caption
    }
  }`);
}

// ✅ Leadership
export async function getLeadership() {
  return await client.fetch(`*[_type == "leadershipMember"] | order(_createdAt asc) {
    name, title, bio, photo { asset->{ url } }
  }`);
}

// ✅ Footer
export async function getFooter() {
  return await client.fetch(`*[_type == "footer"][0]{
    description,
    socialLinks,
    services,
    languages,
    additionalPages,
    location,
    phones,
    email
  }`);
}
