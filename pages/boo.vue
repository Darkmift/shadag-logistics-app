<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-title>Boo</v-title>
        {{ drawerStore.openDrawer }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const drawerStore = useMyDrawerStore();
</script>
