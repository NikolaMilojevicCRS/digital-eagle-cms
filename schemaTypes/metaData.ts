import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'metaData',
  title: 'Meta data',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Page title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords (comma separated)',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'ogImage',
      title: 'OG Graph image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})