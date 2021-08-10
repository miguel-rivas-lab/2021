<template>
  <main>
    <view-grid />
  </main>
</template>

<script lang="ts">
  import Vue from "vue";
  import viewGrid from "./views/grid.vue";

  export default Vue.extend({
    components: {viewGrid},
  });
</script>