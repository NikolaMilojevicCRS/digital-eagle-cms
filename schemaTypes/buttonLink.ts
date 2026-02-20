import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'buttonLink',
  title: 'Button link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
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
    defineField({
      name: 'variant',
      title: 'Variant',
      type: 'string',
      options: {
        list: [
          {title: 'Outlined', value: 'outlined'},
          {title: 'Contained', value: 'contained'},
          {title: 'Primary', value: 'primary'},
        ],
        layout: 'radio',
      },
    }),
  ],
  preview: {
    select: {
      title: 'label',
    },
    prepare(selection) {
      return {
        title: selection.label[0].value,
      }
    },
  }
})