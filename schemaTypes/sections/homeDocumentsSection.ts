import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'homePageDocumentsSection',
  title: 'Home Documents Section',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'documentsSectionCategory',
      title: 'Documents section category',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'documentsSectionHeading',
      title: 'Documents section heading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'documentsSectionSubHeading',
      title: 'Documents section subheading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'proposals',
      title: 'Proposals',
      type: 'array',
      of: [{type: 'proposal'}],
      validation: (Rule) => Rule.max(4).warning('Max number of items reached'),
    }),
  ],
})
