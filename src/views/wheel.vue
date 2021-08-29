<template>
  <row class="nano-app">
    <panel-navigation />

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
            <row class="row-block">
              <column size="100%">
                <btn color="denim" @click="addColumn()" value="Add Color" />
              </column>
            </row>
          </column>
        </row>
      </scroll-area>
    </column>

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
      <scroll-area color="royal-purple">
        <pie-chart :chart-data="colors" />
      </scroll-area>
    </column>
  </row>
</template>

<script lang="ts">
import Vue from "vue";
import PanelNavigation from "../components/panel-navigation.vue";
import PieChart from "../components/pie-chart.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {
    PanelNavigation,
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
    createColor(index, max_color_amount) {
      var hue, difference, filter_max_color, filter_min_color;
      filter_max_color = max_color_amount > 359 ? 359 : max_color_amount;
      filter_min_color = filter_max_color < 3 ? 3 : filter_max_color;
      max_color_amount = filter_min_color;

      difference = 360 / max_color_amount;
      hue = (index * difference).toFixed(1);
      return `hsl(${hue}, 59%, 51%)`;
    },
  },
});
</script>