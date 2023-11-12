<template>
  <v-layout class="layout">
    <v-navigation-drawer v-model="drawerStore.openDrawer" temporary>
      <v-list density="compact" nav>
        <v-list-item
          v-for="link in links"
          :prepend-icon="link.icon"
          :title="$t(link.title)"
          :value="link.title"
          @click="navigateTo(link.to)"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item>
          <SelectLanguage class="pt-5" />
        </v-list-item>
        <v-list-item @click="toggleTheme" :title="$t(modeName)" :prepend-icon="iconName">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <slot></slot>
  </v-layout>
</template>

<script lang="ts" setup>
import { useTheme } from 'vuetify';
const theme = useTheme();

const iconName = computed(() => {
  return theme.global.current.value.dark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent';
});
const modeName = computed(() => {
  return theme.global.current.value.dark ? 'lightMode' : 'darkMode';
});

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}

const drawerStore = useMyDrawerStore();
const links = [
  { title: 'home', to: '/', icon: 'mdi-view-dashboard' },
  { title: 'form', to: '/form', icon: 'mdi-email' },
  { title: 'thankYou', to: '/thank-you', icon: 'mdi-heart' },
];

const i18n = useI18n({
  useScope: 'global',
  locale: 'en',
  messages: {
    en: {
      home: 'Home',
      form: 'Request Form',
      thankYou: 'Thank You',
      darkMode: 'Dark Mode',
      lightMode: 'Light Mode',
    },
    fr: {
      home: 'Accueil',
      form: 'Formulaire de demande',
      thankYou: 'Merci',
      darkMode: 'Mode sombre',
      lightMode: 'Mode clair',
    },
    he: {
      home: 'בית',
      form: 'טופס בקשה',
      thankYou: 'תודה רבה',
      darkMode: 'מצב כהה',
      lightMode: 'מצב בהיר',
    },
  },
});
</script>

<style lang="scss">
.layout {
  min-height: 100vh;
}
</style>
