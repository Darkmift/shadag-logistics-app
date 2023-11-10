// Translations provided by Vuetify
import { en, fr, he } from 'vuetify/locale';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    locale: {
      locale: 'he',
      fallback: 'he',
      messages: { en, fr, he },
    },
  });
  app.vueApp.use(vuetify);
});
