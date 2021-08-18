<template>
  <row class="nano-app nano-dark section-project">
    <panel-navigation />

    <column size="300" class="panel" :class="{'hide-panel': !panel}">
      <scroll-area color="royal-purple">
      </scroll-area>
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
  import PanelNavigation from "../components/panel-navigation.vue";
  import {
    projects,
  } from '../db/projects.js';
  import Gallery from "../components/gallery.vue";

  export default Vue.extend({
    components: {
      PanelNavigation,
      Gallery,
    },
    data: () => ({
      panel: false,
    }),
    computed: {
      projectsDB():Array<any> {
        return projects;
      }
    },
    methods: {
    },
  });
</script>