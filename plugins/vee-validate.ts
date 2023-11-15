// plugins/vee-validate.js
import { defineRule, configure } from 'vee-validate';
import { required, email, min, regex, max, integer } from '@vee-validate/rules';
import { localize } from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json';
import he from '@vee-validate/i18n/dist/locale/he.json';
import fr from '@vee-validate/i18n/dist/locale/fr.json';

// Define global validation rules
defineRule('required', required);
defineRule('integer', integer);
defineRule('email', email);
defineRule('min', min);
defineRule('max', max);
defineRule('regex', regex);
defineRule('israelId', (field: number) => {
  let id = String(field).trim();
  if (id.length > 9 || isNaN(field)) return false;
  id = id.length < 9 ? ('00000000' + id).slice(-9) : id;
  return (
    Array.from(id, Number).reduce((counter, digit, i) => {
      const step = digit * ((i % 2) + 1);
      return counter + (step > 9 ? step - 9 : step);
    }) %
      10 ===
    0
  );
});
defineRule('requiredIfFieldListedIsFilled', (value, input: Record<string, any>, ctx) => {
  if (value === ctx.form[input.target]) {
    return true;
  }
  return input.errorMessage;
});

// Configure VeeValidate
configure({
  generateMessage: localize({
    en,
    he,
    // he: { ...he, names: { firstName: 'שם פרטי',lastName:'שם משפחה' } },
    fr,
  }),
});

export default defineNuxtPlugin(() => {});
