<template>
  <row class="nano-app" :class="classes">
    <panel-navigation />

    <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
      <scroll-area color="royal-purple">
        <row class="row-block" tag="fieldset" v-if="sceneCtrl">
          <column size="100%">
            <legend>Animation Controllers</legend>

            <number-input
              id="outter-circle-radius"
              :value="cubeRotation"
              label="Rotation"
              v-on:update-value="updateSpeed($event)"
            />

            <row>
              <column size="100%">
                <label
                  class="btn flat charcoal"
                  :class="{ active: cover }"
                >
                  Cover
                  <input type="checkbox" v-model="cover" />
                </label>
              </column>
            </row>

            <row>
              <column size="100%">
                <label class="btn flat charcoal" :class="{ active: !rotateX }">
                  Rotate X
                  <input type="checkbox" v-model="rotateX" />
                </label>
              </column>
            </row>

            <row>
              <column size="100%">
                <label class="btn flat charcoal" :class="{ active: !rotateZ }">
                  Rotate Z
                  <input type="checkbox" v-model="rotateZ" />
                </label>
              </column>
            </row>

             <row>
              <column size="100%">
                <label
                  class="btn flat charcoal"
                  :class="{ active: !sceneCtrl.rotateY }"
                >
                  Pause
                  <input type="checkbox" v-model="sceneCtrl.rotateY" />
                </label>
              </column>
            </row>

            <!-- <row>
              <column size="100%">
                <label
                  class="btn flat charcoal"
                  :class="{ active: sceneCtrl.grid }"
                >
                  Grid
                  <input type="checkbox" v-model="sceneCtrl.grid" />
                </label>
              </column>
            </row> -->
          </column>
        </row>

      </scroll-area>
    </column>

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
      <template v-if="this.getModality == 'drakkar'">
        <div ref="drakkar" class="drakkar" />
        <div class="cover" v-if="cover">
          <template v-if="user.lastName">
            <h1 v-html="`${user.middleName} ${user.lastName}`" />
            <h2 v-html="user.title" />
          </template>
        </div>
      </template>

      <template v-if="user.lastName">
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
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default Vue.extend({
  components: {
    PanelNavigation,
    Monster,
  },
  data: () => ({
    winHeight: undefined,
    winWidth: undefined,
    controls: undefined,
    scene: undefined,
    camera: undefined,
    renderer: undefined,
    sceneCtrl: undefined,
    linesGroup: undefined,
    sceneRotation: 1,
    rotateX: false,
    rotateZ: true,
    cover: true,
    sceneControls: function () {
      this.grid = true;
      this.zoom = 10;
      this.rotateY = false;
    },
  }),
  computed: {
    ...mapGetters({
      user: "getUser",
      theme: "getTheme",
      panel: "getPanelVisibility",
    }),
    getModality() {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      return urlParams.get("mode")
        ? urlParams.get("mode").toLowerCase()
        : "drakkar";
    },
    classes() {
      return [this.getModality];
    },
    panelsSize() {
      return this.panel ? 350 : 50;
    },
  },
  methods: {
    buildScene() {
      this.winHeight = window.innerHeight;
      this.winWidth = window.innerWidth - this.panelsSize;
      this.sceneCtrl = new this.sceneControls();
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        this.winWidth / this.winHeight,
        0.1,
        1000
      );
      this.camera.position.set(15, 2.5, 0);
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(this.winWidth, this.winHeight);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      this.setLight();
      this.switchThemes();
      this.$refs.drakkar.appendChild(this.renderer.domElement);
    },
    setLight() {
      const horizontalLight = new THREE.AmbientLight(0x404040, 1);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      const pointLight = new THREE.PointLight(0xc4c4c4, 1);
      const pointLight2 = new THREE.PointLight(0xc4c4c4, 1);
      const pointLight3 = new THREE.PointLight(0xc4c4c4, 1);
      const pointLight4 = new THREE.PointLight(0xc4c4c4, 1);

      directionalLight.position.set(0, 1, 0);
      directionalLight.castShadow = true;
      pointLight.position.set(0, 300, 500);
      pointLight2.position.set(500, 100, 0);
      pointLight3.position.set(0, 100, -500);
      pointLight4.position.set(-540, 300, 0);
      this.scene.add(
        horizontalLight,
        directionalLight,
        pointLight,
        pointLight2,
        pointLight3,
        pointLight4
      );
    },
    resizeWindow() {
      this.winHeight = window.innerHeight;
      this.winWidth = window.innerWidth - this.panelsSize;
      this.renderer.setSize(this.winWidth, this.winHeight);
      this.camera.aspect = this.winWidth / this.winHeight;
      this.camera.updateProjectionMatrix();
    },
    switchThemes() {
      if (this.theme) {
        this.renderer.setClearColor("#e0e0e0");
      } else {
        this.renderer.setClearColor("#1e1e1e");
      }
    },
    render() {
      if (this.controls) {
        this.controls.update();
      }
      this.scene.rotation.x = !this.rotateX ? 45 : 0;
      this.scene.rotation.z = !this.rotateZ ? 45 : 0;

      requestAnimationFrame(this.render);
      if (!this.sceneCtrl.rotateY) {
        this.scene.rotation.y += this.sceneRotation * 0.01;
      }
      this.renderer.render(this.scene, this.camera);
      this.sceneCtrl.grid
        ? this.scene.add(this.gridHelper)
        : this.scene.remove(this.gridHelper);
    },
    buildGeometry() {
      const size = 60;
      const divisions = 25;
      this.gridHelper = new THREE.GridHelper(size, divisions);

      const loader = new GLTFLoader();

      (function (scene) {
        loader.load(
          "/drakkar.glb",
          function (gltf) {
            scene.add(gltf.scene);
          },
          undefined,
          function (error) {
            console.error(error);
          }
        );
      })(this.scene);
    },
  },
  mounted() {
    this.$store.commit("setPanelVisibility", false);

    this.buildScene();
    this.buildGeometry();
    this.render();
  },

  created() {
    window.addEventListener("resize", this.resizeWindow);
  },
  beforeDestroy() {
    this.render = () => {
      // remove render loop
    };
    window.removeEventListener("resize", this.resizeWindow);
  },
  watch: {
    theme: function () {
      this.switchThemes();
    },
    panel: function () {
      this.resizeWindow();
    },
  },
});
</script>