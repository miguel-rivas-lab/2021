<template>
  <scroll-area color="royal-purple">
    <gallery :db="projectsDB" />
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import Gallery from "../components/gallery.vue";
import { client } from "mr-kernel/enums/clients";
import helpers from "mr-kernel/modules/helpers";
import { Project } from "../modules/interfaces";

export default Vue.extend({
  components: {
    Gallery,
  },
  data: () => ({
    panel: false,
    selection: {
      filterData: undefined,
    },
    db: [],
  }),
  computed: {
    projectsDB() {
      let result = this.db;
      switch (this.selection.filterData) {
        case "projects":
          result = this.db.filter(
            (item: Project) =>
              item.client !== client.miguelRivas &&
              item.client !== client.itla &&
              item.client !== client.codepen
          );
          break;
        case "experiments":
          result = this.db.filter(
            (item: Project) =>
              item.client === client.miguelRivas ||
              item.client === client.itla ||
              item.client === client.codepen
          );
          break;
        case "companies":
          result = this.db.filter(
            (item: Project) =>
              item.client === client.enovational ||
              item.client === client.avante ||
              item.client === client.jellyfish ||
              item.client === client.pixelPerfectTree ||
              item.client === client.capitalDBG ||
              item.client === client.plantTherapy ||
              item.client === client.socialNetwork
          );
          break;
        case "homework":
          result = this.db.filter(
            (item: Project) => !item.disabled && item.client === client.itla
          );
          break;
      }
      return result;
    },
  },
  created() {
    this.$store.commit("setValue", {
      name: "panel",
      value: true,
    });
    this.selection = this.$store.getters.getFilterData;
    this.db = Object.values(this.$root.projects)
      .filter((item: Project) => !item.disabled)
      .sort((a: Project, b: Project) => {
        return helpers.dateToNumber(b.date) - helpers.dateToNumber(a.date);
      });
  },
});
</script>