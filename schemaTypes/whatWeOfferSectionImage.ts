import {defineField, defineType} from 'sanity'
import {MdSignalCellular0Bar as icon} from 'react-icons/md'


export default defineType({
  name: 'whatWeOfferSectionImage',
  title: 'What We Offer Section Image',
  type: 'object',
  icon,
  fields: [
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'position',
      title: 'Position',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'internationalizedArrayString',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'photo',
    },
    prepare(selection) {
      return {
        title: selection.title[0].value,
        media: selection.media,
      }
    },
  }
})