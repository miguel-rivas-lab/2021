<template>
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
</template>

<script lang="ts">
import Vue from "vue";
import { gColorsDB } from "../modules/colors";

export default Vue.extend({
  data: () => ({
    panel: false,
    gColorsDB: gColorsDB,
  }),
  created(){
    this.$store.commit("setValue", { name: "panel", value: false });
  },
});
</script>