import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'cilh7kpx',  // Replace with your actual project ID
  dataset: 'production',
  useCdn: true
})
