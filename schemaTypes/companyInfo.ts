import {defineField, defineType} from 'sanity'
import { MdInfoOutline as icon } from "react-icons/md";


export default defineType({
  name: 'companyInfo',
  title: 'Company Info',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'companyLegalName',
      title: 'Company Legal Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'string',
    }),
    defineField({
      name: 'pib',
      title: 'PIB',
      type: 'string',
    }),
    defineField({
      name: 'mb',
      title: 'MB',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social networks',
      type: 'array',
      of: [{type: 'socialLink'}],
    }),
  ],
})