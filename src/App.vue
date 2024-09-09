<script setup>
import { useRoute, RouterView } from "vue-router";
import HeaderViews from "./views/HeaderViews.vue";

const route = useRoute();
</script>

<template>
  <HeaderViews v-if="!route.meta.hideHeaderViews" />
  <!-- Button trigger modal -->

  <RouterView />
</template>

<style>
.container {
  max-width: 1140px;
}
</style>
