<template>
  <row>
    <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
      <scroll-area color="royal-purple" />
    </column>

    <column :size="panel ? '100%-300' : '100%'" class="workarea">
      <scroll-area color="royal-purple">
        <div class="container">
          <ul class="buttons">
            <template v-for="(color, colorIndex) in gColorsDB">
              <li v-bind:key="colorIndex">
                <btn
                  tag="span"
                  :color="color.spinalCase"
                  :value="color.label"
                />
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