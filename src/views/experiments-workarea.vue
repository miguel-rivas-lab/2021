<template>
  <scroll-area color="royal-purple">
    <gallery :db="projectsDB" />
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import Gallery from "../components/gallery.vue";

export default Vue.extend({
  components: {
    Gallery,
  },
  data: () => ({
    panel: false,
  }),
  computed: {
    projectsDB() {
      return this.$root.projects.filter(
        (item) => item.category === "experiment" && !item.disabled
      );
    },
  },
  created() {
    this.$store.commit("setValue", { name: "panel", value: false });
  },
});
</script>