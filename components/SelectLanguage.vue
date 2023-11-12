<template>
  <v-select
    rounded
    variant="outlined"
    density="compact"
    :label="$t('selectLanguage')"
    v-model="i18n.locale.value"
    :items="i18n.localeCodes.value"
  ></v-select>
</template>

<script lang="ts" setup>
const i18n = useI18n({
  useScope: 'global',
  locale: 'en',
  messages: {
    en: {
      selectLanguage: 'Select Language',
    },
    fr: {
      selectLanguage: 'Choisir la langue',
    },
    he: {
      selectLanguage: 'בחירת שפה',
    },
  },
});
</script>

<style></style>
