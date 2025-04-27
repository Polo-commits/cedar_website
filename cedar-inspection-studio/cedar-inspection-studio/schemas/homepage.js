export default {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'tagline',
        title: 'Tagline',
        type: 'string',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{ type: 'block' }],
      },
    ],
  }
  