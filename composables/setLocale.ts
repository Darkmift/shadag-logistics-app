import { setLocale } from '@vee-validate/i18n';
import { useLocale } from 'vuetify';

export const useSetLocale = () => {
  const { current } = useLocale();
  const i18n = useI18n();
  const isRtl = ref(current.value === 'he');

  watch(
    () => i18n.locale.value,
    (locale) => {
      current.value = locale;
      isRtl.value = locale === 'he';
      setLocale(locale);
    },
    { immediate: true }
  );

  return { isRtl };
};
