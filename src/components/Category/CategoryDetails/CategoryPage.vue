<script setup>
import { ref } from "vue";
const selectedBtn = ref();
const btnSelected = (index) => {
  selectedBtn.value = index;
};
</script>

<template>
  <p>{{ $route.params.name }}</p>
  <div class="pane-products d-flex container">
    <div class="category-pane-left" style="width: 13%">
      <span> All categories </span>
    </div>
    <div class="product-pane-right" style="width: 85%">
      <div class="top-right-pane d-flex justify-content-between m-3">
        <div class="left-top">
          <button>Sắp xếp theo</button>
          <button
            @click="btnSelected(1)"
            :class="{ active: selectedBtn === 1 }">
            Phổ biến
          </button>
          <button
            @click="btnSelected(2)"
            :class="{ active: selectedBtn === 2 }">
            Mới nhất
          </button>
          <button
            @click="btnSelected(3)"
            :class="{ active: selectedBtn === 3 }">
            Bán chạy
          </button>
          <select name="range" id="range">
            <option value="">Gía thấp đến cao</option>
            <option value="">Giá cao đến thấp</option>
            <option value=""></option>
          </select>
        </div>
        <div class="right-top d-flex">
          <div class="number-page">1/9</div>
          <div class="d-flex">
            <button class="btn-right"><</button>
            <button class="btn-left">></button>
          </div>
        </div>
      </div>
      <div class="bottom-right-pane d-flex flex-wrap">
        <div
          class="card"
          title="Some quick example text to build on the card title and make up the
              bulk of the card's content."
          style="width: 11rem; margin-right: 5px; margin-bottom: 11px">
          <img
            class="card-img-top"
            src="C:\Users\htna7\OneDrive\Máy tính\Final\backen-decommerce-argicultural-supplies\src\img\datsach.img\SFARM\DatHoaKieng\trc+bg.webp"
            alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Đất sạch hữu cơ</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div class="price-card d-flex" style="font-size: 0.9rem">
              <span class="left">19.999 đ</span>
              <span class="right d-flex">
                <span
                  class="card-text roof-price text-decoration-line-through me-2"
                  >30.000</span
                >
                <span
                  class="card-text discount-percents d-flex justify-content-center align-items-center text-danger"
                  style="background-color: #feeeea"
                  >30%</span
                >
              </span>
            </div>
            <div class="rating">
              <span class="star">***** Đã bán 12k</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.category-pane-left {
  width: 30%;
}
.product-pane-right {
  width: 70%;
  height: 50px;
  align-items: center;
  background-color: #ededed;
  .fillter-pane {
    #range {
      border: none;
      width: 110px;
    }
    .fillter-name {
      button {
        justify-content: center;
        align-items: center;
        display: flex;
        text-align: center;
        height: 35px;
        width: 90px;
        // background-color: rgb(77, 64, 64);
        padding: 5px;
        margin: 5px;
        border: none;
      }
    }
  }
}
.active {
  background-color: blue;
}
.card {
  .card-text {
    white-space: nowrap; /* Không cho phép xuống dòng */
    overflow: hidden; /* Ẩn phần văn bản tràn ra ngoài */
    text-overflow: ellipsis; /* Thêm dấu "..." khi văn bản bị cắt */
    // width: 200px;
  }
}
.card:hover {
  // background-color: red;
  transform: translateY(-1%);
}
</style>
