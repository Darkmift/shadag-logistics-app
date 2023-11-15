import { en, fr, he } from 'vuetify/locale';
const english = {
  welcome: 'Welcome',
  language: 'Language',
  phone: {
    phoneLabel: 'Phone',
    phoneCountry: 'Country',
    phoneCountryFor: 'Country for {0}',
    invalidPhoneGiven: 'Invalid phone number given for {country}',
  },
  ...en,
};
const french = {
  welcome: 'Bienvenue',
  language: 'Language',
  phone: {
    phoneLabel: 'Téléphone',
    phoneCountry: 'Pays',
    phoneCountryFor: 'Pays pour {0}',
    invalidPhoneGiven: 'Numéro de téléphone invalide pour {country}',
  },
  ...fr,
};
const hebrew = {
  welcome: 'ברוכים הבאים',
  language: 'שפה',
  phone: {
    phoneLabel: 'טלפון',
    phoneCountry: 'מדינה',
    phoneCountryFor: 'מדינה עבור {0}',
    invalidPhoneGiven: 'מספר טלפון לא תקין עבור {country}',
  },
  ...he,
};

export default {
  en: english,
  // fr: french,
  he: hebrew,
};
