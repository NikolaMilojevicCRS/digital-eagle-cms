import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'workflowPage',
  title: 'Workflow',
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
      name: 'workflowItems',
      title: 'Workflow Items',
      type: 'array',
      of: [{type: 'serviceItem'}],
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
