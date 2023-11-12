<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-title>{{ `${$t('message.hello')} ${$t('welcome')}` }}</v-title>
        {{ current }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { commonLocales } from '~/plugins/i18n/i18n.config';
import { useLocale } from 'vuetify';

const { current } = useLocale();

const i18n = useI18n({
  useScope: 'global',
  locale: 'en',
  sharedMessages: commonLocales,
  messages: {
    en: {
      message: {
        hello: 'Hello',
      },
    },
    fr: {
      message: {
        hello: 'Bonjour',
      },
    },
    he: {
      message: {
        hello: 'שלום',
      },
    },
  },
});

watch(
  () => i18n.locale.value,
  (locale) => (current.value = locale)
);
</script>
