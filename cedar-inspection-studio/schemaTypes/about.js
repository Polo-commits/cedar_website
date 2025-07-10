export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'subtitle', title: 'Subtitle', type: 'string' },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'content', title: 'Main Content', type: 'array', of: [{ type: 'block' }] },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'position', title: 'Position', type: 'string' },
            { name: 'bio', title: 'Bio', type: 'text' },
            { name: 'photo', title: 'Photo', type: 'image' }
          ]
        }
      ]
    }
  ]
}
