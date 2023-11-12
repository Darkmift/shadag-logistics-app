<template>
  <v-app>
    <v-content>
      <v-locale-provider :rtl="isRtl">
        <app-layout>
          <app-navigation-bar></app-navigation-bar>
          <v-main>
            <router-view></router-view>
          </v-main>
        </app-layout>
      </v-locale-provider>
    </v-content>
  </v-app>
</template>

<script lang="ts" setup>
import { useSetLocale } from './composables/setLocale';
import AppLayout from './components/layout/Layout.vue';
import AppNavigationBar from './components/layout/Navigation.vue';
const { isRtl } = useSetLocale();
definePageMeta({
  title: 'Shadag',
});
</script>
