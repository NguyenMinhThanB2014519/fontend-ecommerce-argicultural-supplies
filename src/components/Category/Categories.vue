<script setup>
import { defineProps, ref, computed } from "vue";
import { useCategoryStore } from "../Store/productsStore"; // Import store

// Nhận dữ liệu qua props từ component cha
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
});

// Khởi tạo store
const categoryStore = useCategoryStore();

// Số lượng danh mục hiển thị mỗi lần
const itemsPerPage = 14; // 2 dòng, mỗi dòng 10 mục

// Biến lưu trữ trang hiện tại (phần tử đầu tiên được hiển thị)
const currentPage = ref(0);

// Hàm để tính toán vị trí đầu và cuối của trang hiện tại
const currentCategories = computed(() => {
  const startIndex = currentPage.value * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return props.categories.slice(startIndex, endIndex);
});

// Hàm điều hướng qua lại giữa các trang
const goToNextPage = () => {
  if (
    currentPage.value <
    Math.ceil(props.categories.length / itemsPerPage) - 1
  ) {
    currentPage.value++;
  }
};

const goToPreviousPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};

// Hàm để hiển thị alert với id của danh mục và lưu vào store
const showCategoryId = (id) => {
  categoryStore.setCategoryId(id);
};
</script>

<template>
  <div class="category-carousel container">
    <div class="d-flex justify-content-between align-items-center">
      <!-- Nút quay lại -->
      <button
        @click="goToPreviousPage"
        :disabled="currentPage === 0"
        class="btn btn-primary">
        &lt;
      </button>

      <!-- Danh mục hiển thị -->

      <div class="container d-flex flex-wrap justify-content-center">
        <RouterLink
          v-for="(category, index) in currentCategories"
          :key="category.category_id"
          :to="'/' + category.category_name.replace(/\s+/g, '-').toLowerCase()"
          class="card m-1"
          style="width: 8rem"
          @click="() => showCategoryId(category.category_id)">
          <!-- <img
              class="card-img-top"
              :src="category.image_url"
              :alt="category.category_name" /> -->
          <div class="card-body">
            <p class="card-text">
              {{ category.category_name }}
              {{ category.category_id }}
            </p>
          </div>
        </RouterLink>
      </div>

      <!-- Nút tiến tới -->
      <button
        @click="goToNextPage"
        :disabled="
          currentPage >= Math.ceil(categories.length / itemsPerPage) - 1
        "
        class="btn btn-primary">
        &gt;
      </button>
    </div>
  </div>
</template>

<style scoped>
.category-carousel {
  display: flex;
  align-items: center;
}

.card {
  margin: 0.5rem;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
