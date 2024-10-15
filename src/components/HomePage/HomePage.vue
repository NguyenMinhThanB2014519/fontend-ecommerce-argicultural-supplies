<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light container">
      <div class="container-fluid">
        <!-- Logo và tên ứng dụng -->
        <RouterLink
          to="/"
          class="navbar-brand d-flex align-items-center"
          href="#">
          <div class="icon-app me-2">
            <img
              src="../../assets/img/iconspA-removebg-preview.png"
              alt=""
              width="50px"
              height="50px" />
          </div>
          <span
            class="d-flex flex-column justify-content-center align-items-center text-white fw-bold">
            <span>Supply</span>
            <span>Agriculture</span>
          </span>
        </RouterLink>

        <!-- Thanh tìm kiếm -->
        <div class="d-flex flex-grow-1 mx-lg-4">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              v-model="search"
              placeholder="Search title.."
              aria-label="Search" />
            <span class="input-group-text">
              <img src="../assets/img/" alt="" />
            </span>
          </div>
        </div>

        <!-- Giỏ hàng -->
        <div class="position-relative">
          <button class="btn btn-outline-secondary">
            <i class="bi bi-cart"></i>
          </button>
          <span
            v-if="cartItemCount > 0"
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {{ cartItemCount }}
          </span>
        </div>
      </div>
    </nav>

    <!-- Added lorem ipsum text below the search input -->
  </main>
</template>

<script setup>
import { ref } from "vue";

const search = ref("");
const cartItemCount = ref(2); // Giả sử có 2 mặt hàng trong giỏ hàng
</script>

<style scoped>
/* Có thể thêm styles tùy chỉnh ở đây nếu cần */
.navbar {
  box-shadow: none !important;
  border: none !important;
}
.form-control:focus {
  box-shadow: none;
  border-color: #ced4da; /* Giữ nguyên màu viền khi focus */
}

.input-group:focus-within {
  outline: none;
  box-shadow: none;
}

.lorem-text {
  font-size: 14px;
  color: #6c757d;
  margin-top: 10px;
}
</style>
