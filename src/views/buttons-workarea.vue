<template>
  <scroll-area color="royal-purple">
    <div class="gallery">
      <div class="container">
        <ul class="buttons">
          <template v-for="(color, colorIndex) in gColorsDB">
            <li v-bind:key="colorIndex">
              <btn tag="span" :color="color.spinalCase" :text="color.label" />
            </li>
          </template>
        </ul>
      </div>
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
  created() {
    this.$store.commit("setValue", { name: "panel", value: false });
  },
});
</script>