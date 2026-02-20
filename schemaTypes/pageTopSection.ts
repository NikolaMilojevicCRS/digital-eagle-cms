import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'pageTopSection',
  title: 'Page top section',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'pageTopPhoto',
      title: 'Page image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'pageTopSectionHeading',
      title: 'Page top section heading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'pageTopSectionSubHeading',
      title: 'Page top section sub heading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'pageTopText',
      title: 'Page top section text',
      type: 'internationalizedArrayText',
    }),
  ],
})