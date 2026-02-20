import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialLink',
  title: 'Social network',
  type: 'object',
  fields: [
    defineField({
      name: 'socialNetwork',
      title: 'Social network',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
  ],
})