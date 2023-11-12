<template>
  <v-app-bar color="primary" prominent class="d-flex align-center">
    <v-app-bar-nav-icon variant="text" @click.stop="drawerStore.toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>{{ $t('appName') }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="pt-5 mx-5" style="width: 200px">
      <SelectLanguage />
    </div>
    <dark-mode-btn />
  </v-app-bar>
</template>

<script lang="ts" setup>
import { commonLocales } from '~/plugins/i18n/i18n.config';
import DarkModeBtn from '~/components/DarkModeBtn.vue';
import SelectLanguage from '~/components/SelectLanguage.vue';
const drawerStore = useMyDrawerStore();
const i18n = useI18n({
  useScope: 'global',
  sharedMessages: commonLocales,
  locale: 'en',
  messages: {
    en: {
      appName: 'Shadag',
    },
    fr: {
      appName: 'Shadag',
    },
    he: {
      appName: 'שד"ג',
    },
  },
});
</script>

<style></style>
