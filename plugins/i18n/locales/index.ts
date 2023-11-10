import { en, fr, he } from 'vuetify/locale';
const english = {
  welcome: 'Welcome',
  language: 'Language',
  ...en,
};
const french = {
  welcome: 'Bienvenue',
  language: 'Language',
  ...fr,
};
const hebrew = {
  welcome: 'ברוכים הבאים',
  language: 'שפה',
  ...he,
};

export default { en: english, fr: french, he: hebrew };
