import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'homePageKpiSection',
  title: 'Home Page KPI Section',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'kpiItems',
      title: 'KPI Items',
      type: 'array',
      of: [{type: 'kpiItem'}],
    }),
  ],
})
