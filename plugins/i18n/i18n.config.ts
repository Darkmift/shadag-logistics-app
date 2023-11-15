import locales from './locales';
export const commonLocales = {
  messages: locales,
};
// available locales defined in nuxt.config.ts
export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'he',
  fallbackLocale: 'en',
  ...commonLocales,
}));

