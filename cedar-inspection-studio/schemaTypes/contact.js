export default {
  name: 'contact',
  type: 'document',
  title: 'Contact Page',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'subtitle', type: 'string' },
    {
      name: 'phones',
      type: 'array',
      of: [{ type: 'string' }],
    },
    { name: 'email', type: 'string' },
    { name: 'location', type: 'text' },
    { name: 'mapLink', type: 'url' }, // optional
  ],
};
