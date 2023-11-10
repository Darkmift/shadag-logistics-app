<template>
  <v-app>
    <v-content>
      <v-locale-provider :rtl="isRtl">
        <router-view></router-view>
      </v-locale-provider>
    </v-content>
  </v-app>
</template>

<script lang="ts" setup>
import { useLocale } from 'vuetify';
import { watch, onMounted } from 'vue';

const { current } = useLocale();
const i18n = useI18n();
const isRtl = ref(current.value === 'he');

watch(
  () => i18n.locale.value,
  (locale) => {
    current.value = locale;
    document.documentElement.setAttribute('dir', locale === 'he' ? 'rtl' : 'ltr');
    isRtl.value = locale === 'he';
  },
  { immediate: true }
);

onMounted(() => {
  document.documentElement.setAttribute('dir', i18n.locale.value === 'he' ? 'rtl' : 'ltr');
  isRtl.value = current.value === 'he';
});
</script>
