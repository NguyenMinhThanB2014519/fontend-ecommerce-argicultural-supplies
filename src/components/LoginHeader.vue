<script setup></script>
<template>
  <div>
    <header class="header container">
      <div class="left-section">
        <img src="" alt="Logo" class="logo" />
        <h1 class="app-name">Tên APP</h1>
      </div>
      <div class="right-section">
        <p>Bạn cần giúp đỡ</p>
      </div>
    </header>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 25px 0;
  width: 100%;
  background-color: red;
  .left-section {
    display: flex;
    align-items: center;
    .logo {
      width: 40px; /* Điều chỉnh kích thước logo theo nhu cầu */
      height: auto;
      margin-right: 10px;
    }
    .app-name {
      font-size: 1.5rem; /* Điều chỉnh kích thước chữ theo nhu cầu */
      margin: 0;
    }
  }
  .right-section p {
    margin: 0;
  }
}
</style>
