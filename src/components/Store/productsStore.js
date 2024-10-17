// src/stores/categoryStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCategoryStore = defineStore("category", () => {
  const selectedCategoryId = ref(null);

  const setCategoryId = (id) => {
    selectedCategoryId.value = id;
  };

  return { selectedCategoryId, setCategoryId };
});
