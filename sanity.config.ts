import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'


const projectId = process.env.SANITY_PROJECT_ID!;
const dataset = process.env.SANITY_DATASET!;


export default defineConfig({
  basePath: '/studio',
  name: 'content-studio',
  title: 'content-studio',
  projectId: 'n347xevw',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
