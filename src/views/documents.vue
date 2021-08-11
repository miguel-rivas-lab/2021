<template>
  <row class="nano-app nano-dark">
    <panel-navigation />

    <column size="300" class="panel" :class="{'hide-panel': !state.panel}">
      <scroll-area color="royal-purple">
      </scroll-area>
    </column>

    <column :size="state.panel ? '100%-350' : '100%-50'" class="workarea">
      <div class="container">
          <h1>documents</h1>
      </div>
    </column>
  </row>
</template>

<script lang="ts">
  import Vue from "vue";
  import PanelNavigation from "../components/panel-navigation.vue";

  export default Vue.extend({
    components: {
      PanelNavigation
    },
    data: () => ({
      state: {
        panel: false,
      },
    }),
    computed: {
    },
    methods: {
    },
  });
</script>