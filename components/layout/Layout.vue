<template>
  <v-layout class="layout">
    <v-navigation-drawer v-model="drawerStore.openDrawer" temporary>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Home"
          value="home"
          @click="navigateTo('/')"
        >
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-forum"
          title="About"
          value="form"
          @click="navigateTo('/form')"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <slot></slot>
  </v-layout>
</template>

<script lang="ts" setup>
const drawerStore = useMyDrawerStore();
</script>

<style lang="scss">
.layout {
  min-height: 100vh;
}
</style>
