<template>
  <div class="map">
    <GmapMap
      map-type-id="roadmap"
      :center="selection.mapCenter"
      :zoom="selection.mapZoom"
      :options="{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        mapId: 'dd79fd2df77ae359',
        zoomControl: false,
      }"
    >
      <template v-for="(m, index) in locations">
        <pin :key="`marker-${index}`" :position="m.position" :title="m.title" />
      </template>
      <GmapPolyline
        v-if="selection.viewPath"
        :path="mapPaths"
        :options="{ strokeColor: '#5c322c' }"
      />
    </GmapMap>
    <div class="clouds" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Pin from "../components/pin.vue";
import { locations } from "../db/locations";

export default Vue.extend({
  components: { Pin },
  data: () => ({
    locations,
    selection: {},
  }),
  computed: {
    mapPaths() {
      const paths = [];
      this.locations.forEach((item) => {
        paths.push(item.position);
      });
      return paths;
    },
  },
  created() {
    this.selection = this.$store.getters.getLocationSelection;
  },
});
</script>