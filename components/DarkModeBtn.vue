<template>
  <v-btn variant="text" rounded @click="toggleTheme">
    <v-icon v-if="theme.global.current.value.dark"> mdi-white-balance-sunny </v-icon>
    <v-icon v-else> mdi-moon-waning-crescent </v-icon>
  </v-btn>
</template>

<script setup>
import { useTheme } from 'vuetify';

const theme = useTheme();

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<style></style>
