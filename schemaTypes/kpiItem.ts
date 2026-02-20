import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'kpiItem',
  title: 'KPI Item',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'position',
    },
    prepare(selection) {
      return {
        title: selection.title[0].value,
        subtitle: selection.subtitle,
      }
    },
  },
})
