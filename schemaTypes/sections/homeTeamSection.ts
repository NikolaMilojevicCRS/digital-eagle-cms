import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'homePageTeamSection',
  title: 'Home Team Section',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'teamSectionCategory',
      title: 'Team section category',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'teamSectionHeading',
      title: 'Team section heading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'teamSectionSubHeading',
      title: 'Team section subheading',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [{type: 'teamMember'}],
      validation: (Rule) => Rule.max(4).warning('Max number of items reached'),
    }),
  ],
})
