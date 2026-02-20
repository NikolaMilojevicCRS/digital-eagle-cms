import {defineField, defineType} from 'sanity'
import {MdFirstPage as icon} from 'react-icons/md'

export default defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'homePageHeroSection',
      title: 'Home Hero Section',
      type: 'homePageHeroSection',
    }),
    defineField({
      name: 'homePageKpiSection',
      title: 'Home KPI Section',
      type: 'homePageKpiSection',
    }),
    defineField({
      name: 'homePageAboutSection',
      title: 'Home About Section',
      type: 'homePageAboutSection',
    }),
    defineField({
      name: 'homePageWhatWeDoSection',
      title: 'Home What We Do Section',
      type: 'homePageWhatWeDoSection',
    }),
    defineField({
      name: 'homeTechStackSection',
      title: 'Home Tech Stack Section',
      type: 'homeTechStackSection',
    }),
    defineField({
      name: 'homePortfolioSection',
      title: 'Home Portfolio Section',
      type: 'homePortfolioSection',
    }),
    defineField({
      name: 'homePageClientsSection',
      title: 'Home Clients Section',
      type: 'homePageClientsSection',
    }),
    defineField({
      name: 'homePageDocumentsSection',
      title: 'Home Documents Section',
      type: 'homePageDocumentsSection',
    }),
    defineField({
      name: 'homePageTeamSection',
      title: 'Home Team Section',
      type: 'homePageTeamSection',
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
      media: 'hero',
    },
  },
})
