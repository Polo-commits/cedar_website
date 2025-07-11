export default {
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'heading', title: 'Heading', type: 'string' },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'bio', title: 'Bio', type: 'text' },
            { name: 'photo', title: 'Photo', type: 'image' }
          ]
        }
      ]
    }
  ]
}
