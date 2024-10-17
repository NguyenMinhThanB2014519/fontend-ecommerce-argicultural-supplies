<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router"; // Thêm import useRouter
import Categories from "@/components/Category/Categories.vue";
import categoriesService from "@/services/categories.service";

const categoriesData = ref([]);
const categoryById = ref(null);
const router = useRouter();

onMounted(async () => {
  try {
    categoriesData.value = await categoriesService.getCategories();
    console.log(categoriesData.value);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
});

// Hàm xử lý khi danh mục được chọn
const handleCategorySelected = (categoryId) => {
  console.log("Selected category ID:", categoryId);

  // Tìm danh mục tương ứng với ID và chuyển hướng
  const selectedCategory = categoriesData.value.find(
    (category) => category.category_id === categoryId
  );
  if (selectedCategory) {
    const categoryName = selectedCategory.category_name
      .replace(/\s+/g, "-")
      .toLowerCase();
    router.push(`/${categoryName}`); //
  }
};
</script>

<template>
  <template v-if="!$route.params.name">
    <categories
      :categories="categoriesData"
      @category-selected="handleCategorySelected" />
  </template>

  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
