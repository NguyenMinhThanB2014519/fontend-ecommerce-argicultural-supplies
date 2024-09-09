<script setup>
import { RouterLink } from "vue-router";
import HoverModal from "./HoverModal.vue";
</script>

<template>
  <main>
    <div class="container">
      <div class="header-left-pane">
        <RouterLink to="/sellerchannel">Seller channel |</RouterLink>
        <RouterLink to="/becomeasellerchanel">
          Become a seller channel |</RouterLink
        >
        <RouterLink to="/dowloadapp"> Dowload the App |</RouterLink>
        <RouterLink to="/connect"> Connect</RouterLink>
      </div>

      <div class="header-right-pane">
        <HoverModal />

        <RouterLink to="/help"> Help </RouterLink>
        <select class="" name="" id="">
          <option value="tiengviet">Tiếng Việt</option>
          <option value="tienganh">Tiếng Anh</option>
        </select>
        <RouterLink to="/register"> Register |</RouterLink>
        <RouterLink to="/login"> Login</RouterLink>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #f94d2f;
  display: flex;
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-items: center; /* Căn giữa theo chiều dọc */

  .container {
    padding: 4px 2px;
    display: flex;
    justify-content: space-between; /* Chia đều khoảng cách giữa các phần tử */
    width: 80%; /* Điều chỉnh kích thước để phù hợp */
  }

  select {
    font-size: 12px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
