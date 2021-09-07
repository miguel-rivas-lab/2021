<template>
  <main class="vue-theme" :class="classes">
    <row class="nano-app">
      <panel-navigation />
      <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
        <scroll-area color="royal-purple">
          <router-view name="panel" />
        </scroll-area>
      </column>

      <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
        <scroll-area color="royal-purple">
          <router-view name="workarea" />
        </scroll-area>
      </column>
    </row>
    <img
      v-if="universe"
      src="./assets/cow.png"
      alt="the cow that will finish your existence"
      class="cow"
      width="90"
    />
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