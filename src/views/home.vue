<template>
  <row class="nano-app" :class="classes">
    <panel-navigation />

    <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
      <scroll-area color="royal-purple" />
    </column>

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
      <template v-if="user.lastName">
        <!-- <div class="card" v-if="this.getModality == '3d'">
          <div ref="drakkar" />
        </div> -->

        <div class="card" v-if="this.getModality == 'loop'">
          <monster />
          <h1 v-html="`${user.middleName} ${user.lastName}`" />
          <h2 v-html="user.title" />
        </div>

        <div class="out-card" v-if="this.getModality == 'card'">
          <div class="card">
            <div class="content">
              <h1 v-html="`${user.middleName} ${user.lastName}`" />
              <h2 v-html="user.title" />
            </div>
            <div class="bk" />
          </div>
          <div class="out-bk" />
        </div>
      </template>
    </column>
  </row>
</template>

<script lang="ts">
import Vue from "vue";
import PanelNavigation from "../components/panel-navigation.vue";
import Monster from "../components/monster.vue";
import { mapGetters } from "vuex";
// import * as THREE from "three";

export default Vue.extend({
  components: {
    PanelNavigation,
    Monster,
  },
  data: () => ({
    panel: false,
  }),
  computed: {
    ...mapGetters({
      user: "getUser",
    }),
    getModality() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get("mode") ? urlParams.get("mode").toLowerCase() : "loop";
    },
    classes() {
      return [this.getModality];
    },
  },
  // methods: {
  // },
  // mounted(){
  //   this.renderer = new THREE.WebGLRenderer({ antialias: true });
  // }
});
</script>