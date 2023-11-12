// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@invictus.codes/nuxt-vuetify',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vee-validate/nuxt',
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      // treeshaking: true | false,
      // useIconCDN: true | false,
      // /* vite-plugin-vuetify options */
      // styles: true | 'none' | 'expose' | 'sass' | { configFile: string },
      autoImport: true,
      // useVuetifyLabs: true | false,
    },
  },
  i18n: {
    vueI18n: './plugins/i18n/i18n.config.ts',
    locales: ['he', 'en', 'fr'], // used in URL path prefix
    defaultLocale: 'he', // default locale of your project for Nuxt pages and routings
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  pinia: {
    // imports: ['~/store'],
  },
  veeValidate: {
    autoImports: true,
  },
  plugins: ['~/plugins/vee-validate.ts'],
});
