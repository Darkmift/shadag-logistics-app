<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-btn @click="drawerStore.toggleDrawer">Moo</v-btn>
          </v-col>
          <v-col cols="12">
            {{ drawerStore.openDrawer }}
          </v-col>
        </v-row>
      </v-container>
      <v-locale-provider :rtl="isRtl">
        <router-view></router-view>
      </v-locale-provider>
    </v-content>
  </v-app>
</template>

<script lang="ts" setup>
import { useSetLocale } from './composables/setLocale';
const { isRtl } = useSetLocale();
const drawerStore = useMyDrawerStore();
</script>
