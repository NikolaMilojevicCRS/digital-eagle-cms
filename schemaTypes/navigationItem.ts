import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigationItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal', value: 'internal'},
          {title: 'External', value: 'external'},
          {title: 'Same page', value: 'samePage'},
          {title: 'Contact', value: 'contact'},
        ],
        layout: 'radio',
      },
      initialValue: 'internal'
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'position',
    },
    prepare(selection) {
      return {
        title: selection.title[0].value,
        subtitle: selection.subtitle,
      }
    },
  }
})