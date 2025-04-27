import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'cilh7kpx', // your real project ID
  dataset: 'production',
  useCdn: true
});
