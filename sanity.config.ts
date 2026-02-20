import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

export default defineConfig({
  name: 'default',
  title: 'digital-eagle-cms',

  projectId: 'cag26atv',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'en', title: 'English'},
        {id: 'rs', title: 'Serbian'},
      ],
      defaultLanguages: ['en'],
      fieldTypes: ['string', 'text'],
      buttonAddAll: false,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
