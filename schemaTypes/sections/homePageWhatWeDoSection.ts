import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'homePageWhatWeDoSection',
  title: 'Home What We Do Section',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'whatWeDoSectionCategory',
      title: 'What We Do section category',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'whatWeDoSectionHeading',
      title: 'What We Do section heading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'whatWeDoSectionSubHeading',
      title: 'What We Do section subheading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'serviceItems',
      title: 'Service Items',
      type: 'array',
      of: [{type: 'serviceItem'}],
      // validation: (Rule) => Rule.max(4).warning('Max number of items reached'),
    }),
  ],
})
