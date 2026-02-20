import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'techStackCategory',
  title: 'Tech Stack Category',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'techStackCategoryItems',
      title: 'Tech stack Category Items',
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
