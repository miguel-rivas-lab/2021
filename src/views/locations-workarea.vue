<template>
  <div class="map">
    <GmapMap
      :center="mapCenter"
      :zoom="mapZoom"
      map-type-id="roadmap"
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
      <!-- <GmapPolyline
        :key="`marker-${index}`"
        :path="mapPaths"
        :options="{ strokeColor: '#5c322c' }"
      /> -->
    </GmapMap>
    <div class="clouds"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Pin from "../components/pin.vue";

export default Vue.extend({
  components: { Pin },
  data: () => ({
    locations: [
      {
        title: "Social Network",
        position: {
          lat: 18.4659438,
          lng: -69.915391,
        },
      },
      {
        title: "Avante Marketing",
        position: {
          lat: 18.4703103,
          lng: -69.940124,
        },
      },
      {
        title: "Capital DBG",
        position: {
          lat: 18.4648539,
          lng: -69.9582155,
        },
      },
      {
        title: "Pixel Perfect Tree",
        position: {
          lat: 18.4460353,
          lng: -69.959968,
        },
      },
      {
        title: "Plant Therapy",
        position: {
          lat: 42.5395726,
          lng: -114.4798225,
        },
      },
      {
        title: "Enovational",
        position: {
          lat: 38.902872,
          lng: -77.0299321,
        },
      },
      {
        title: "Jellyfish",
        position: {
          lat: 38.9550186,
          lng: -77.3670827,
        },
      },
    ],
    mapPaths: [],
    mapCenter: {
      lat: 31,
      lng: -94,
    },
    mapZoom: 4,
  }),
  created() {
    this.$store.commit("setValue", { name: "panel", value: false });
    this.locations.forEach((item) => {
      this.mapPaths.push(item.position);
    });
  },
});
</script>