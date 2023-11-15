import { createVPhoneInput } from 'v-phone-input';
import 'flag-icons/css/flag-icons.min.css';
import 'v-phone-input/dist/v-phone-input.css';

export default defineNuxtPlugin((nuxtApp) => {
  // const i18n = useI18n();
  const t = nuxtApp.vueApp.config.globalProperties.$t;

  const vPhoneInput = createVPhoneInput({
    label: t('phone.phoneLabel'),
    countryLabel: t('phone.phoneCountry'),
    countryAriaLabel: (options) => t('phone.phoneCountryFor', options as any),
    invalidMessage: (options) =>
      t('phone.invalidPhoneGiven', { country: options.country.name } as any),
    countryIconMode: 'svg',
    defaultCountry: 'il',
  });
  nuxtApp.vueApp.use(vPhoneInput);
});
