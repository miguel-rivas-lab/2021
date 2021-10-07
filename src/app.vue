<template>
  <main class="vue-theme" :class="classes">
    <row class="nano-app">
      <panel-navigation />
      <column
        gsize:width="45"
        size="300"
        class="panel"
        :class="{ 'hide-panel': !panel }"
      >
        <router-view name="panel" />
      </column>

      <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
        <router-view name="workarea" />
      </column>
    </row>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import PanelNavigation from "./components/panel-navigation.vue";

export default Vue.extend({
  components: {
    PanelNavigation,
  },
  computed: {
    ...mapGetters({
      theme: "getTheme",
      universe: "getUniverse",
      panel: "getPanelVisibility",
    }),
    sectionName() {
      return `section-${this.$route.name}`;
    },
    classes() {
      return [
        this.sectionName,
        this.theme ? "nano-light" : "nano-dark",
        { universe: this.universe },
      ];
    },
  },
});
</script>