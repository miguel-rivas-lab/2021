<template>
  <row class="nano-app">
    <panel-navigation />

    <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
      <scroll-area color="royal-purple">
        <row class="row-block" tag="fieldset">
          <column size="100%">
            <legend>Wheel Properties</legend>

            

          </column>
        </row>
      </scroll-area>
    </column>

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
      <scroll-area color="royal-purple">
        <div class="container">
          <h1>wheel</h1>
        </div>
      </scroll-area>
    </column>
  </row>
</template>

<script lang="ts">
import Vue from "vue";
import PanelNavigation from "../components/panel-navigation.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {
    PanelNavigation,

  },
  data: () => ({
    // selection: { columns: [] },
  }),
  mounted() {
    // this.$store.commit("setPanelVisibility", true);
    // this.selection = this.$store.getters.getSelection;
  },
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
    }),
  },
  methods: {
    // addColumn() {
    //   this.$store.commit("addColumn", {
    //     mode: "Percent",
    //     size: "50%",
    //     subtraction: "0",
    //     color: "desert",
    //     expression: "sz1b4",
    //     block: "column",
    //   });
    //   this.selection = this.$store.getters.getSelection;
    // },
  },
});
</script>