<template>
  <scroll-area color="royal-purple">
    <img :src="dummyImg" alt="" />
    <gallery :db="projectsDB" />
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import Gallery from "../components/gallery.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {
    Gallery,
  },
  data: () => ({
    panel: false,
    dummyImg: undefined,
  }),
  computed: {
    ...mapGetters({
      projects: "getProjects",
    }),
    projectsDB() {
      return this.projects.filter(
        (item) => item.category == "project" && !item.disabled
      );
    },
  },
  created() {
    this.$store.commit("setValue", { name: "panel", value: false });
  },
});
</script>