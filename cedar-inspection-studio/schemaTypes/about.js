// schemas/about.js
export default {
  name: 'about',
  type: 'document',
  title: 'About Page',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'subtitle', type: 'string' },
    { name: 'heading', type: 'string' },
    { name: 'body', type: 'array', of: [{ type: 'block' }] },
    {
      name: 'image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'teamMembers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string' },
            { name: 'title', type: 'string' },
            { name: 'bio', type: 'text' },
          ],
        },
      ],
    },
  ],
};
