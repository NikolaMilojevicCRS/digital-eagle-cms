import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'homePageAboutSection',
  title: 'Home About Section',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'aboutSectionCategory',
      title: 'About section category',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'aboutSectionHeading',
      title: 'About section heading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'aboutSectionDescription',
      title: 'About section Description',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'aboutSectionItems',
      title: 'About section Items',
      type: 'array',
      of: [{type: 'aboutSectionItem'}],
    }),
  ],
})
