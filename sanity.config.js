import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {I18nFields} from 'sanity-plugin-i18n-fields'

export default defineConfig({
  name: 'default',
  title: 'sanity-studio-with-localization',

  projectId: '0tn2fxb8',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    I18nFields({
      ui: {
        type: 'dropdown', // The UI of the plugin, Default is 'slider'
        position: 'top', // You can specify the position of the 'slider' above or below the input field, with the default being 'bottom'.
        selected: 'border', // For the 'slider' type, you can configure the UI of the selected locale, and the default setting is 'border'.
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
