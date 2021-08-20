<template>
  <main :class="classes">
    <router-view />
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters({
      theme: "getTheme",
    }),
    sectionName() {
      return `section-${this.$route.name}`;
    },
    classes() {
      return [this.sectionName, { 'nano-dark': !this.theme }]
    }
  },
});
</script>