import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { theme } from './theme';
import StudioNavbar from './components/StudioNavbar';
import { getDefaultDocumentNode } from './structure';


const projectId = process.env.SANITY_PROJECT_ID!;
const dataset = process.env.SANITY_DATASET!;


export default defineConfig({
  basePath: '/studio',
  name: 'content-studio',
  title: 'content-studio',
  projectId: 'n347xevw',
  dataset: 'production',
  plugins: [deskTool({
    defaultDocumentNode: getDefaultDocumentNode,
  }), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  }
})
