<script setup>
import { onMounted, ref } from "vue";
import CategoryPage from "@/components/Category/CategoryDetails/CategoryPage.vue";
import ProductsServices from "@/services/products.service";
import { useCategoryStore } from "../../components/Store/productsStore"; // Import store

const productNames = ref([]);

// Khởi tạo store
const categoryStore = useCategoryStore();

onMounted(async () => {
  try {
    const id = categoryStore.selectedCategoryId;
    console.log("id la " + id);
    productNames.value = await ProductsServices.getProductNameByCategoryID(id);
    console.log(productNames.value);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
});
</script>

<template>
  <!-- <categoryPage /> -->
  <h1>{{ productNames }}</h1>
</template>

<style lang="scss" scoped></style>
