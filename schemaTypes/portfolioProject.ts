import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolioProject',
  title: 'Portfolio Project',
  type: 'object',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
    },
    prepare(selection) {
      return {
        title: selection.title[0].value,
        subtitle: selection.subtitle,
      }
    },
  },
})
