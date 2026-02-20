import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team member',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
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
      title: 'name',
      subtitle: 'role',
      media: 'photo',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle[0].value,
        media: selection.media,
      }
    },
  },
})
