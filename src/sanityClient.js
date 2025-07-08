// src/sanityClient.jsx

import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'cilh7kpx',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})

export async function getServices() {
  const query = `*[_type == "service"] | order(_createdAt asc){
    _id,
    title,
    slug,
    description,
    icon {
      asset->{
        _id,
        url
      }
    },
    body
  }`

  const services = await client.fetch(query)
  return services
}


