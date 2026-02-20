import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'homePageHeroSection',
  title: 'Home Hero Section',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'hero',
      title: 'Hero section background',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'heroSectionHeading',
      title: 'Hero section heading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'heroSectionSubheading',
      title: 'Hero section Subheading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'heroSectionEstText',
      title: 'Hero section est text',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'heroSectionButton',
      title: 'Hero section button',
      type: 'buttonLink',
    }),
  ],
})
