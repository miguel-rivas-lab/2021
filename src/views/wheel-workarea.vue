<template>
  <scroll-area color="royal-purple">
    <pie-chart :chart-data="selection.colors" />
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import PieChart from "../components/pie-chart.vue";

export default Vue.extend({
  components: {
    PieChart,
  },
  data: () => ({
    selection: {},
  }),
  created() {
    this.$store.commit("setValue", { name: "panel", value: true });
    this.selection = this.$store.getters.getWheelSelection;
  },
});
</script>