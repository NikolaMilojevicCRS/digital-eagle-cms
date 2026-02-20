import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'homePortfolioSection',
  title: 'Home Portfolio Section',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'portfolioSectionCategory',
      title: 'Portfolio section category',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'portfolioSectionHeading',
      title: 'Portfolio section heading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'portfolioSectionSubHeading',
      title: 'Portfolio section subheading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'portfolioProjects',
      title: 'Portfolio Projects',
      type: 'array',
      of: [{type: 'portfolioProject'}],
    }),
  ],
})
