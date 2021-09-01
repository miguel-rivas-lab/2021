<template>
  <main class="vue-theme" :class="classes">
    <row class="nano-app">
      <panel-navigation />
      <column size="100%-50">
        <router-view class="router-area" />
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