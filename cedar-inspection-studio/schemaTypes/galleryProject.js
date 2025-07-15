export default {
  name: 'galleryProject',
  title: 'Gallery Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'NDT', value: 'ndt' },
          { title: 'OCTG', value: 'octg' },
          { title: 'Pipeline', value: 'pipeline' },
          { title: 'Marine', value: 'marine' },
          { title: 'Certifications', value: 'certifications' },
        ],
      },
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text',
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
};
