import { defineStore } from 'pinia';

export const useMyDrawerStore = defineStore(
  'drawer',
  () => {
    const openDrawer = ref(false);
    const toggleDrawer = () => {
      openDrawer.value = !openDrawer.value;
    };
    return { openDrawer, toggleDrawer };
  },
  { persist: true }
);
