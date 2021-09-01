<template>
  <row>
    <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
      <scroll-area color="royal-purple">
        <row class="row-block" tag="fieldset">
          <column size="100%">
            <legend>Color Wheel</legend>

            <template v-for="colorIndex in colors">
              <row v-bind:key="colorIndex">
                <column size="100%-35">
                  <btn
                    color="silver"
                    size="md"
                    @click="toggleBlockVisibility()"
                    :value="`Color #${colorIndex}`"
                  />
                </column>
                <suffix size="35">
                  <btn
                    color="persian-red"
                    size="md"
                    glyph="close"
                    @click="removeBlock()"
                  />
                </suffix>
              </row>
            </template>
          </column>
        </row>
        <row class="row-block">
          <column size="100%">
            <btn color="gold-tips" @click="addColumn()" value="Add Color" />
          </column>
        </row>
      </scroll-area>
    </column>

    <column :size="panel ? '100%-300' : '100%'" class="workarea">
      <scroll-area color="royal-purple">
        <pie-chart :chart-data="colors" />
      </scroll-area>
    </column>
  </row>
</template>

<script lang="ts">
import Vue from "vue";
import PieChart from "../components/pie-chart.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {
    PieChart,
  },
  data: () => ({
    colors: 12,
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
    }),
  },
  methods: {
    addColumn() {
      this.colors++;
    },
    removeBlock() {
      this.colors--;
    },
  },
});
</script>