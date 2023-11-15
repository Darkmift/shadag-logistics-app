<template>
  <v-container class="px-0 mx-0">
    <v-row
      v-for="(item, index) in lineItems"
      :key="item.id"
      class="pa-0 ma-0 d-flex justify-space-between"
    >
      <v-col cols="2" class="px-0">
        <v-text-field
          v-model.number="item.quantity"
          label="Quantity"
          type="number"
          outlined
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-text-field v-model="item.name" label="Name" outlined dense></v-text-field>
      </v-col>

      <v-col cols="4">
        <v-textarea v-model="item.note" label="Note" outlined no-resize rows="1"></v-textarea>
      </v-col>
      <v-col cols="1">
        <v-icon class="mt-2" color="red" size="x-large" @click="removeItem(index)"
          >mdi-delete</v-icon
        >
      </v-col>
    </v-row>
    <!-- <v-btn @click="addItem">Add Item</v-btn> -->
  </v-container>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { LineItem } from '~/types/index';

const props = defineProps<{
  lineItems: LineItem[];
}>();

const addItem = () => {
  props.lineItems.push({
    id: '',
    name: '',
    quantity: 1,
    note: '',
    category: '',
    subCategory: '',
  });
};

const removeItem = (index: number) => {
  props.lineItems.splice(index, 1);
};

const generateCode = () => {
  // Generate a unique code for new items
  return `code-${Math.random().toString(16).slice(2)}`;
};
</script>

<style scoped>
.v-col {
  padding-top: 0;
  padding-bottom: 0;
}
</style>
