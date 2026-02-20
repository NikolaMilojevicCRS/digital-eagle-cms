import {defineField, defineType} from 'sanity'
import {MdSignalCellular0Bar as icon} from 'react-icons/md'


export default defineType({
  name: 'clientLogoImage',
  title: 'Client Logo Image',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt',
      type: 'string',
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
  ],
  preview: {
    select: {
      title: 'position',
      media: 'photo',
    },
  },
})