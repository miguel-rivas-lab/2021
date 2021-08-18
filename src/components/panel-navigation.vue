<template>
  <column size="50" class="main-panel">
    <template v-for="(nav, index) in navigation">
      <template v-if="$route.name !== nav.route">
        <btn
          :to="{name: nav.route}"
          v-bind:key="index"
          color="gravel"
          :class="['tooltip', nav.route]"
          size="md"
          :glyph="nav.icon"
        />
      </template>
      <template v-else>
        <btn
          v-bind:key="index"
          color="gravel"
          size="md"
          :class="['tooltip', nav.route]"
          @click="togglePanelVisibility"
          :glyph="nav.icon"
          active
        />
      </template>
      
    </template>
  </column>
</template>

<script lang="ts">
  import Vue from "vue";
  import {
    mapMutations,
  } from 'vuex';

  export default Vue.extend({
  components: {
  },
  data: () => ({
    navigation: [
      { icon: 'home', route: 'home' },
      { icon: 'projector-screen', route: 'projects' },
      { icon: 'duck', route: 'experiments' },
      { icon: 'robot-industrial', route: 'grid' },
      { icon: 'gesture-tap-button', route: 'buttons' },
      { icon: 'format-color-fill', route: 'colors' },
    ],
    
  }),
  computed: {
  },
  methods: {
    ...mapMutations(['togglePanelVisibility']),
    playSound(frequency:number, duration:number, number:number):any {
      let context = new AudioContext();
      let newSound = context.createOscillator();
      let newGain = context.createGain();
      newSound.connect(newGain);
      newSound.frequency.value = frequency;
      newGain.connect(context.destination);
      newSound.start(0);
      newGain.gain.exponentialRampToValueAtTime(number, context.currentTime + duration );
    },
  },
  mounted() {
    this.navigation.forEach( (value, index) => {
      if(value.route == this.$route.name) {
        this.playSound((100 * (index + 2)), 0.3, 0.00000001);
      }
    });
    this.panel = this.$store.getters.getPanelVisibility;
  }
  });
</script>