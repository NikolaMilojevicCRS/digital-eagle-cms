import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'serviceItem',
  title: 'Service item',
  type: 'object',
  fields: [
    defineField({
      name: 'serviceTitle',
      title: 'Service title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'serviceText',
      title: 'Service text',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'serviceTitle',
      media: 'icon',
    },
    prepare(selection) {
      return {
        title: selection.title[0].value,
        media: selection.media,
      }
    },
  },
})