export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
      {
        name: 'siteName',
        title: 'Site Name',
        type: 'string'
      },
      {
        name: 'logo',
        title: 'Logo',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'description',
        title: 'Site Description',
        type: 'text'
      }
    ]
  }