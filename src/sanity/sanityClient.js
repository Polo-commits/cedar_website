// src/sanityClient.jsx

import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'cilh7kpx',    // YOUR project ID
  dataset: 'production',    // your dataset
  apiVersion: '2023-01-01', // NEW API version
  useCdn: true,
});
