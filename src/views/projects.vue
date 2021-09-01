<template>
  <row>
    <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
      <scroll-area color="royal-purple" />
    </column>

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
      <scroll-area color="royal-purple">
        <gallery :db="projectsDB" />
      </scroll-area>
    </column>
  </row>
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
});
</script>