import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'proposal',
  title: 'Proposal',
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
      name: 'description',
      title: 'Description',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'document',
      title: 'Document',
      type: 'file',
      fields: [
        {
          name: 'numberOfPages',
          title: 'Number of pages',
          type: 'number',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
    },
    prepare(selection) {
      return {
        title: selection.title[0].value,
        subtitle: selection.subtitle[0].value,
      }
    },
  },
})
