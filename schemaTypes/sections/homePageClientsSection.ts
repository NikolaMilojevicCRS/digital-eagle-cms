import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'homePageClientsSection',
  title: 'Home Clients Section',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'clientsSectionHeading',
      title: 'Clients section heading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'clients',
      title: 'Clients',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})
