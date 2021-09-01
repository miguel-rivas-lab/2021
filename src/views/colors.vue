<template>
  <row>
    <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
      <scroll-area color="royal-purple" />
    </column>

    <column :size="panel ? '100%-300' : '100%'" class="workarea">
      <scroll-area color="royal-purple">
        <div class="container">
          <ul class="palette">
            <template v-for="(color, colorIndex) in gColorsDB">
              <li v-bind:key="colorIndex">
                <div class="color" :style="`background-color: ${color.hex}`" />
                <h1 v-html="color.label" />
                <p v-html="color.hex" />
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
import { gColorsDB } from "../modules/colors";

export default Vue.extend({
  data: () => ({
    panel: false,
    gColorsDB: gColorsDB,
  }),
  computed: {},
  methods: {},
});
</script>