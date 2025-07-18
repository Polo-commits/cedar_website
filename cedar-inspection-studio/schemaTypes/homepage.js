import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main page title (for SEO & display)',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'text',
    }),
    defineField({
      name: 'callToActionText',
      title: 'Call to Action Text',
      type: 'string',
    }),
    defineField({
      name: 'callToActionLink',
      title: 'Call to Action Link',
      type: 'url',
    }),
    defineField({
      name: 'introImage',
      title: 'Intro Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'blockContent',
    }),

    // ✅ WHO WE ARE
    defineField({
      name: 'whoWeAreTitle',
      title: 'Who We Are Title',
      type: 'string',
    }),
    defineField({
      name: 'whoWeAreBody',
      title: 'Who We Are Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'whoWeAreImage',
      title: 'Who We Are Image',
      type: 'image',
      options: { hotspot: true },
    }),

    // ✅ MISSION / VISION / VALUES
    defineField({
      name: 'mission',
      title: 'Mission',
      type: 'blockContent',
    }),
    defineField({
      name: 'vision',
      title: 'Vision',
      type: 'blockContent',
    }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'blockContent',
    }),

    // ✅ SEO
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Custom title for SEO purposes',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Meta description for search engines',
    }),
  ],
})
