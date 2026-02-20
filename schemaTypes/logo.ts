import {defineField, defineType} from 'sanity'
import {MdSignalCellular0Bar as icon} from 'react-icons/md'


export default defineType({
  name: 'logo',
  title: 'Logo',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})