import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'teamPage',
  title: 'Team',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'pageTopSection',
      title: 'Page top section',
      type: 'pageTopSection',
    }),
    defineField({
      name: 'metaData',
      title: 'Meta data',
      type: 'metaData',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'pageTopSection.pageTopPhoto',
    },
  },
})
