import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}, {
        type: 'image',
        fields: [
          {
            type: 'string',
            name: 'alt',
            title: 'Alt',
            description: 'The alt text of the image',
          },

        ],
      },]
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title[0].value,
      }
    },
  }
})