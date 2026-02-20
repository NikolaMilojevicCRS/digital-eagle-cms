import {defineField, defineType} from 'sanity'
import {MdMenu as icon} from 'react-icons/md'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Item title',
      type: 'string',
    }),
    defineField({
      name: 'navigationItems',
      title: 'Navigation Items',
      type: 'array',
      of: [{type: 'navigationItem'}],
    }),
  ],
})