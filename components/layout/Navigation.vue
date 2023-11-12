<template>
  <v-app-bar color="primary" prominent class="d-flex align-center">
    <v-app-bar-nav-icon variant="text" @click.stop="drawerStore.toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ $t('appName') }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="pt-5 mx-5" style="width: 200px">
      <v-select
        rounded
        variant="outlined"
        density="compact"
        :label="$t('selectLanguage')"
        v-model="i18n.locale.value"
        :items="i18n.localeCodes.value"
      ></v-select>
    </div>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { commonLocales } from '~/plugins/i18n/i18n.config';

const drawerStore = useMyDrawerStore();
const i18n = useI18n({
  useScope: 'global',
  sharedMessages: commonLocales,
  locale: 'en',
  messages: {
    en: {
      appName: 'Shadag',
      selectLanguage: 'Select Language',
    },
    fr: {
      appName: 'Shadag',
      selectLanguage: 'Choisir la langue',
    },
    he: {
      appName: 'שד"ג',
      selectLanguage: 'בחירת שפה',
    },
  },
});
</script>

<style></style>
