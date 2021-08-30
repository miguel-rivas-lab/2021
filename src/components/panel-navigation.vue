<template>
  <column size="50" class="main-panel">
    <div class="container">
      <row vertical>
        <column size="100%-35*2">
          <template v-for="(nav) in navigation">
            <template v-if="$route.name !== nav.route">
              <btn
                :to="{ name: nav.route }"
                v-bind:key="nav.route"
                color="gravel"
                :class="['tooltip', nav.route]"
                size="md"
                :glyph="nav.icon"
              />
            </template>
            <template v-else>
              <btn
                v-bind:key="nav.route"
                color="gravel"
                size="md"
                :class="['tooltip', nav.route]"
                @click="togglePanelVisibility"
                :glyph="nav.icon"
                active
              />
            </template>
          </template>
          <hr />
          <template v-for="(nav) in navigationBuilder">
            <template v-if="$route.name !== nav.route">
              <btn
                :to="{ name: nav.route }"
                v-bind:key="nav.route"
                color="gravel"
                :class="['tooltip', nav.route]"
                size="md"
                :glyph="nav.icon"
              />
            </template>
            <template v-else>
              <btn
                v-bind:key="nav.route"
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
        <suffix size="35">
          <btn
            color="charcoal"
            size="md"
            class="tooltip theme"
            glyph="brightness-4"
            @click="toggleTheme"
            :active="!theme"
          />
        </suffix>
        <suffix size="35">
          <btn
            color="persian-red"
            size="md"
            class="tooltip universe"
            glyph="cow"
            @click="toggleUniverse"
            :active="universe"
          />
        </suffix>
      </row>
    </div>
  </column>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  components: {},
  data: () => ({
    navigation: [
      { icon: "home", route: "home" },
      { icon: "projector-screen", route: "projects" },
      { icon: "duck", route: "experiments" },
      { icon: "gesture-tap-button", route: "buttons" },
      { icon: "format-color-fill", route: "colors" },
      { icon: "cube-outline", route: "cube" },
    ],
    navigationBuilder: [
      { icon: "robot-industrial", route: "grid" },
      { icon: "cog-transfer-outline", route: "gear" },
      { icon: "palette", route: "wheel" },
      { icon: "chart-areaspline", route: "statistics" },
    ],
  }),
  computed: {
    ...mapGetters({
      theme: "getTheme",
      universe: "getUniverse",
    }),
  },
  methods: {
    ...mapMutations(["togglePanelVisibility", "toggleTheme", "toggleUniverse"]),
    playSound(frequency: number, duration: number, number: number) {
      let context = new AudioContext();
      let newSound = context.createOscillator();
      let newGain = context.createGain();
      newSound.connect(newGain);
      newSound.frequency.value = frequency;
      newGain.connect(context.destination);
      newSound.start(0);
      newGain.gain.exponentialRampToValueAtTime(
        number,
        context.currentTime + duration
      );
    },
  },
  mounted() {
    this.navigation.concat(this.navigationBuilder).forEach((value, index) => {
      if (value.route == this.$route.name) {
        this.playSound(100 * (index + 2), 0.3, 0.00000001);
      }
    });
    this.panel = this.$store.getters.getPanelVisibility;
  },
});
</script>