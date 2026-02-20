import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'homeTechStackSection',
  title: 'Home Tech Stack Section',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'techStackSectionCategory',
      title: 'Tech stack section category',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'techStackSectionHeading',
      title: 'Tech stack section heading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'techStackSectionSubHeading',
      title: 'Tech stack section subheading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'techStackCategories',
      title: 'Tech stack Categories',
      type: 'array',
      of: [{type: 'techStackCategory'}],
    }),
  ],
})
