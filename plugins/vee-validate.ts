// plugins/vee-validate.js
import { defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json';
import he from '@vee-validate/i18n/dist/locale/he.json';
import fr from '@vee-validate/i18n/dist/locale/fr.json';

// Define global validation rules
defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

// Configure VeeValidate
configure({
  generateMessage: localize({
    en,
    he,
    fr,
  }),
});

export default defineNuxtPlugin(() => {});
