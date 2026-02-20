import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'homeGrowNetworkSection',
  title: 'Home Grow Network Section',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'growNetworkSectionHeading',
      title: 'Grow Network section heading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'mapPhoto',
      title: 'Map Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'growNetworkSectionButton',
      title: 'Grow Network Section button',
      type: 'buttonLink',
    }),
  ],
})
