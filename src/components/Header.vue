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
          Trở thành kênh người bán |</RouterLink
        >
        <RouterLink to="/dowloadapp"> Tải ứng dụng |</RouterLink>
        <RouterLink to="/connect"> Kết nối</RouterLink>
      </div>

      <div class="header-right-pane">
        <HoverModal />

        <RouterLink to="/help"> Giúp đỡ </RouterLink>
        <select class="" name="" id="">
          <option value="tiengviet">Tiếng Việt</option>
          <option value="tienganh">Tiếng Anh</option>
        </select>
        <RouterLink to="/register"> Đăng ký |</RouterLink>
        <RouterLink to="/login"> Đăng nhập</RouterLink>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #f94d2f;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    padding: 4px 2px;
    display: flex;
    justify-content: space-between;
    width: 80%;
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
