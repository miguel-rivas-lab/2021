<template>
  <GmapInfoWindow :position="position">
    {{ title }}
  </GmapInfoWindow>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    position: {
      type: Object,
    },
    title: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    // svgMarker: undefined,
  }),
  // mounted() {
  //   this.$refs.mapCanvas.$mapPromise.then((map) => {
  //     this.svgMarker = {
  //       path: "m139.85119,66.8125 c 0,31.521321 -57.074403,99.40774 -57.074403,99.40774 0,0 -57.074401,-67.886419 -57.074402,-99.40774 0,-31.521322 25.55308,-57.0744019 57.074402,-57.0744019 31.521323,-6e-7 57.074403,25.5530799 57.074403,57.0744019 z",
  //       fillColor: "#b42323",
  //       fillOpacity: 1,
  //       strokeWeight: 0,
  //       rotation: 0,
  //       scale: 0.2,
  //     };
  //     this.map = map;
  //   });
  // },
});
</script>