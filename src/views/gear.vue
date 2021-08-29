<template>
  <row class="nano-app">
    <panel-navigation />

    <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
      <scroll-area color="royal-purple">
        <row class="row-block" tag="fieldset">
          <column size="100%">
            <legend>Gear Properties</legend>
            <number-input
              id="corner-amount"
              :value="cornerAmount"
              label="Teeth Amount"
              v-on:update-value="updateVal($event, 'cornerAmount')"
            />
            <number-input
              id="outter-circle-radius"
              :value="outterCircleRadius"
              label="Pitch Radius"
              v-on:update-value="updateVal($event, 'outterCircleRadius')"
            />
            <number-input
              id="inner-circle-radius"
              :value="innerCircleRadius"
              label="Base Circle Radius"
              v-on:update-value="updateVal($event, 'innerCircleRadius')"
            />
            <number-input
              id="main-perforation-radius"
              :value="mainPerforationRadius"
              label="Axis Radius"
              v-on:update-value="updateVal($event, 'mainPerforationRadius')"
            />
            <number-input
              id="side-perforation-amount"
              :value="sidePerforationAmount"
              label="Side Perforation Amount"
              v-on:update-value="updateVal($event, 'sidePerforationAmount')"
            />
            <number-input
              id="side-perforation-radius"
              :value="sidePerforationRadius"
              label="Side Perforation Radius"
              v-on:update-value="updateVal($event, 'sidePerforationRadius')"
            />
            <number-input
              id="side-perforation-distance"
              :value="sidePerforationDistance"
              label="Side Perforation Distance"
              v-on:update-value="updateVal($event, 'sidePerforationDistance')"
            />
          </column>
        </row>
      </scroll-area>
    </column>

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
      <scroll-area color="royal-purple">
        <canvas class="animation-rotate" ref="gear" width="400" height="400"> no canvas </canvas>
      </scroll-area>
    </column>
  </row>
</template>

<script lang="ts">
import Vue from "vue";
import PanelNavigation from "../components/panel-navigation.vue";
import NumberInput from "../components/number-input.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {
    PanelNavigation,
    NumberInput,
  },
  data: () => ({
    cornerAmount: 40,
    outterCircleRadius: 50,
    innerCircleRadius: 45,
    mainPerforationRadius: 5,
    sidePerforationAmount: 4,
    sidePerforationRadius: 12,
    sidePerforationDistance: 25,
  }),
  mounted() {
    this.render();
  },
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
    }),
  },
  methods: {
    updateVal(newVal, property) {
      this[property] = newVal;
      this.render();
    },
    render() {
      let canvas = this.$refs.gear;
      let size = 400;
      let percent = size / 100;
      let p = canvas.getContext("2d");
      let ang = Math.PI / 180;
      let x = size / 2;
      let y = size / 2;
      let gear_color = "#999";
      let holes_color = "#444";
      /* ----------- Poligon 1 ----------- */
      let px = [];
      let py = [];
      /* ----------- Poligon 2 ----------- */
      let px2 = [];
      let py2 = [];
      /* ----------- Inner Circle ----------- */
      let px3 = [];
      let py3 = [];
      /* ----------- End Vars ----------- */

      p.clearRect(0, 0, size, size);
      for (let kk = 0; kk <= this.cornerAmount - 1; kk++) {
        px[kk] =
          Math.cos((360 / this.cornerAmount) * kk * ang) *
          this.outterCircleRadius *
          percent;
        py[kk] =
          Math.sin((360 / this.cornerAmount) * kk * -ang) *
          this.outterCircleRadius *
          percent;
      }
      /* --------------------- Second Shape --------------------- */
      for (let kk = 0; kk <= this.cornerAmount - 1; kk++) {
        px2[kk] =
          Math.cos(
            (360 / (this.cornerAmount * 2) + (360 / this.cornerAmount) * kk) *
              ang
          ) *
          this.innerCircleRadius *
          percent;
        py2[kk] =
          Math.sin(
            (360 / (this.cornerAmount * 2) + (360 / this.cornerAmount) * kk) *
              -ang
          ) *
          this.innerCircleRadius *
          percent;
      }
      /* --------------------- Circles --------------------- */
      for (let kk = 0; kk <= this.sidePerforationAmount - 1; kk++) {
        px3[kk] =
          Math.cos((360 / this.sidePerforationAmount) * kk * ang) *
          this.sidePerforationDistance *
          percent;
        py3[kk] =
          Math.sin((360 / this.sidePerforationAmount) * kk * -ang) *
          this.sidePerforationDistance *
          percent;
      }
      p.beginPath();
      p.moveTo(x + px[0], y + py[0]);
      p.lineTo(x + px2[0], y + py2[0]);
      for (let kk = 1; kk <= this.cornerAmount - 1; kk++) {
        p.lineTo(x + px[kk], y + py[kk]);
        p.lineTo(x + px2[kk], y + py2[kk]);
      }
      p.fillStyle = gear_color;
      p.fill();
      p.closePath();
      p.beginPath();
      p.arc(x, y, this.mainPerforationRadius * percent, 0, Math.PI * 2, true);
      p.fillStyle = holes_color;
      p.fill();
      p.closePath();
      for (let kk = 0; kk <= this.sidePerforationAmount - 1; kk++) {
        p.beginPath();
        p.arc(
          x + px3[kk],
          y + py3[kk],
          this.sidePerforationRadius * percent,
          0,
          Math.PI * 2,
          true
        );
        p.fillStyle = holes_color;
        p.fill();
        p.closePath();
      }
    },
  },
});
</script>