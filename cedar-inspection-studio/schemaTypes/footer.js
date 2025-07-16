import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'description',
      title: 'Company Description',
      type: 'text',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string', title: 'Platform (Facebook, LinkedIn, etc.)' },
            { name: 'url', type: 'url', title: 'Profile URL' },
            { name: 'icon', type: 'string', title: 'FontAwesome Icon Class (e.g., fa-facebook)' },
          ],
        },
      ],
    }),
    defineField({
      name: 'services',
      title: 'Services Links',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'string',
    }),
    defineField({
      name: 'additionalPages',
      title: 'Additional Pages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Page Title' },
            { name: 'slug', type: 'slug', title: 'Page Slug' },
          ],
        },
      ],
    }),
    defineField({
      name: 'location',
      title: 'Office Location',
      type: 'text',
    }),
    defineField({
      name: 'phones',
      title: 'Mobile Numbers',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
  ],
});
