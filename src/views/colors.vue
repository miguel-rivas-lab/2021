<template>
  <row class="nano-app nano-dark">
    <panel-navigation />

    <column size="300" class="panel" :class="{'hide-panel': !panel}">
      <scroll-area color="royal-purple">
      </scroll-area>
    </column>

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
      <scroll-area color="royal-purple">
        <div class="container">
          <ul class="palette">
            <template v-for="color, colorIndex in gColorsDB">
              <li v-bind:key="colorIndex">
                <div class="color" :style="`background-color: ${color.hex}`" />
                <div>
                  <h4>
                    {{color.label}}
                  </h4>
                  <p>
                    {{color.hex}}
                  </p>
                </div>
              </li>
            </template>
          </ul>
        </div>
      </scroll-area>
    </column>
  </row>
</template>

<script lang="ts">
  import Vue from "vue";
  import PanelNavigation from "../components/panel-navigation.vue";
  import {
    gColorsDB,
  } from '../db/colors';

  export default Vue.extend({
    components: {
      PanelNavigation
    },
    data: () => ({
      panel: false,
      gColorsDB: gColorsDB,
    }),
    computed: {
    },
    methods: {
    },
  });
</script>