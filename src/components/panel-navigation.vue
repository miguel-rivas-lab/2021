<template>
  <column size="50" class="main-panel">
    <template v-for="(nav, index) in navigation">
      <template v-if="$route.name !== nav.route">
        <btn
          :to="{name: nav.route}"
          v-bind:key="index"
          color="gravel"
          size="md"
          :glyph="nav.icon"
        />
      </template>
      <template v-else>
        <btn
          v-bind:key="index"
          color="gravel"
          size="md"
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
      { icon: 'duck', route: 'prototypes' },
      { icon: 'robot-industrial', route: 'grid' },
      // { icon: 'gesture-tap-button', route: 'buttons' },
      // { icon: 'format-color-fill', route: 'colors' },
    ],
    
  }),
  computed: {
  },
  methods: {
    ...mapMutations(['togglePanelVisibility']),
    playSound(frequecy:number, duration:number, number:number):any {
      let context = new AudioContext();
      let newSound = context.createOscillator();
      let newGain = context.createGain();
      newSound.connect(newGain);
      newSound.frequency.value = frequecy;
      newGain.connect(context.destination);
      newSound.start(0);
      newGain.gain.exponentialRampToValueAtTime(number, context.currentTime + duration );
    },
  },
  mounted(){
    switch(this.$route.name){
      default:
        this.playSound(600, 0.3, 0.00000001);
        break;
      case "projects":
        this.playSound(500, 0.3, 0.00000001);
        break;
      case "prototypes":
        this.playSound(400, 0.3, 0.00000001);
        break;
      case "grid":
        this.playSound(300, 0.3, 0.00000001);
        break;
    }
    this.panel = this.$store.getters.getPanelVisibility;
  }
  });
</script>