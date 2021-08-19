<template>
  <main :class="sectionName">
    <router-view />
  </main>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    sectionName() {
      return `section-${this.$route.name}`;
    },
  },
});
</script>