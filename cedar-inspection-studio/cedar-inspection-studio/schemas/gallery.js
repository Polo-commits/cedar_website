export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
      { name: 'title', title: 'Gallery Title', type: 'string' },
      {
        name: 'images',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }]
      }
    ]
  }
  