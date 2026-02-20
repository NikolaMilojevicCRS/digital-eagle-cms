import {defineField, defineType} from 'sanity'
import {MdMenu as icon} from 'react-icons/md'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'footerHeading',
      title: 'Footer heading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'internationalizedArrayString',
    }),
  ],
})