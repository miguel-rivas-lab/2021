<template>
  <column size="50" class="main-panel">
    <scroll-area color="royal-purple" :horizontal="false">
      <div class="container">
        <row vertical>
          <column size="100%-85">
            <template v-for="nav in navigation">
              <template v-if="$route.name !== nav.route">
                <btn
                  :to="{ name: nav.route }"
                  v-bind:key="nav.route"
                  color="gravel"
                  size="md"
                  :title="`${nav.route} button`"
                  v-nano-tooltip.right="nav.route"
                  :glyph="nav.icon"
                />
              </template>
              <template v-else>
                <btn
                  v-bind:key="nav.route"
                  color="gravel"
                  size="md"
                  :title="`${nav.route} button`"
                  v-nano-tooltip.right="nav.route"
                  @click="toggleValue('panel'), playSound()"
                  :glyph="nav.icon"
                  active
                />
              </template>
            </template>
            <hr />
            <template v-for="nav in navigationBuilder">
              <template v-if="$route.name !== nav.route">
                <btn
                  :to="{ name: nav.route }"
                  v-bind:key="nav.route"
                  color="gravel"
                  :title="`${nav.route} button`"
                  v-nano-tooltip.right="nav.route"
                  size="md"
                  :glyph="nav.icon"
                />
              </template>
              <template v-else>
                <btn
                  v-bind:key="nav.route"
                  color="gravel"
                  size="md"
                  :title="`${nav.route} button`"
                  v-nano-tooltip.right="nav.route"
                  @click="toggleValue('panel'), playSound()"
                  :glyph="nav.icon"
                  active
                />
              </template>
            </template>
          </column>
          <suffix size="85">
            <!-- <btn
              href="https://miguel-rivas.github.io/2021-react/"
              class="btn-react"
              v-nano-tooltip.right="'React site'"
              size="md"
              glyph="react"
              tag="a"
            /> -->
            <btn
              color="charcoal"
              size="md"
              title="Toggle theme button"
              v-nano-tooltip.right="'Toggle Theme'"
              glyph="brightness-4"
              @click="toggleValue('theme'), playSound()"
              :active="!theme"
            />
            <btn
              color="persian-red"
              size="md"
              title="Toggle universe button"
              v-nano-tooltip.right="'A Parallel Universe Where Cows Rule Earth'"
              glyph="cow"
              @click="toggleValue('parallelUniverse'), playSound()"
              :active="universe"
            />
          </suffix>
        </row>
      </div>
    </scroll-area>
  </column>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";

export default Vue.extend({
  components: {},
  data: () => ({
    navigation: [
      { icon: "monster", route: "home" },
      { icon: "projector-screen", route: "projects" },
      { icon: "duck", route: "experiments" },
      { icon: "gesture-tap-button", route: "buttons" },
      { icon: "format-color-fill", route: "colors" },
    ],
    navigationBuilder: [
      { icon: "robot-industrial", route: "grid" },
      { icon: "chart-areaspline", route: "statistics" },
      { icon: "cube-outline", route: "cube" },
      { icon: "cog-transfer-outline", route: "gear" },
      { icon: "palette", route: "wheel" },
    ],
  }),
  computed: {
    ...mapGetters({
      theme: "getTheme",
      universe: "getUniverse",
    }),
  },
  methods: {
    ...mapMutations(["toggleValue"]),
    playSound() {
      let context = new AudioContext();
      let newSound = context.createOscillator();
      let newGain = context.createGain();
      newSound.connect(newGain);
      newSound.frequency.value = 300;
      newGain.connect(context.destination);
      newSound.start(0);
      newGain.gain.exponentialRampToValueAtTime(
        0.00000001,
        context.currentTime + 0.5
      );
    },
  },
  mounted() {
    this.panel = this.$store.getters.getPanelVisibility;
  },
});
</script>