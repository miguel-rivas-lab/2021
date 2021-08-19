<template>
  <row class="nano-app nano-dark">
    <panel-navigation />

    <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
      <scroll-area color="royal-purple"> </scroll-area>
    </column>

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
      <div class="out-card">
        <div class="card">
          <div class="content">
            <h1>Miguel Rivas</h1>
            <h2>Frontend Developer</h2>
          </div>
          <div class="bk"></div>
        </div>
        <div class="out-bk"></div>
      </div>
    </column>
  </row>
</template>

<script lang="ts">
import Vue from "vue";
import PanelNavigation from "../components/panel-navigation.vue";

export default Vue.extend({
  components: {
    PanelNavigation,
  },
  data: () => ({
    panel: false,
  }),
  computed: {},
  methods: {},
});
</script>