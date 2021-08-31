<template>
  <row class="nano-app">
    <panel-navigation />

    <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
      <scroll-area color="royal-purple">
        <row class="row-block" tag="fieldset" v-if="sceneCtrl">
          <column size="100%">
            <legend>Cube Controllers</legend>

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
                  :class="{ active: sceneCtrl.pause }"
                >
                  Pause
                  <input type="checkbox" v-model="sceneCtrl.pause" />
                </label>
              </column>
            </row>

            <row>
              <column size="100%">
                <label
                  class="btn flat charcoal"
                  :class="{ active: sceneCtrl.grid }"
                >
                  Grid
                  <input type="checkbox" v-model="sceneCtrl.grid" />
                </label>
              </column>
            </row>

            <row>
              <column size="100%">
                <label
                  class="btn flat charcoal"
                  :class="{ active: sceneCtrl.lines }"
                >
                  Lines
                  <input type="checkbox" v-model="sceneCtrl.lines" />
                </label>
              </column>
            </row>
          </column>
        </row>

        <row class="row-block" tag="fieldset">
          <column size="100%">
            <legend>Colors</legend>
            <row>
              <column size="100%">
                <ul class="standard">
                  <template v-for="(color, colorIndex) in gColorsDB">
                    <li v-bind:key="colorIndex">
                      {{ colorIndex }}: {{ color.label }}
                    </li>
                  </template>
                </ul>
              </column>
            </row>
          </column>
        </row>
      </scroll-area>
    </column>

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
      <div ref="cube" />
    </column>
  </row>
</template>

<script lang="ts">
import Vue from "vue";
import PanelNavigation from "../components/panel-navigation.vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { gColorsDB } from "../modules/colors";
import { mapGetters } from "vuex";
import NumberInput from "../components/number-input.vue";

export default Vue.extend({
  components: {
    PanelNavigation,
    NumberInput,
  },
  data: () => ({
    gColorsDB: gColorsDB,
    winHeight: undefined,
    winWidth: undefined,
    controls: undefined,
    scene: undefined,
    camera: undefined,
    distanceBetweenCubes: 1,
    maxValue: 255,
    renderer: undefined,
    sceneCtrl: undefined,
    linesGroup: undefined,
    cubeRotation: 3,
    sceneControls: function () {
      this.grid = true;
      this.lines = false;
      this.zoom = 10;
      this.pause = false;
    },
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
      theme: "getTheme",
    }),
    panelsSize() {
      return this.panel ? 350 : 50;
    },
  },
  methods: {
    render() {
      if (this.controls) {
        this.controls.update();
      }
      requestAnimationFrame(this.render);
      if (!this.sceneCtrl.pause) {
        this.scene.rotation.y += this.cubeRotation * 0.01;
      }
      this.renderer.render(this.scene, this.camera);
      this.sceneCtrl.lines
        ? this.scene.add(this.linesGroup)
        : this.scene.remove(this.linesGroup);
      this.sceneCtrl.grid
        ? this.scene.add(this.gridHelper)
        : this.scene.remove(this.gridHelper);
    },
    resizeWindow() {
      this.winHeight = window.innerHeight;
      this.winWidth = window.innerWidth - this.panelsSize;
      this.renderer.setSize(this.winWidth, this.winHeight);
      this.camera.aspect = this.winWidth / this.winHeight;
      this.camera.updateProjectionMatrix();
    },
    createLine(color, origin, destination) {
      let lineMaterial = new THREE.LineBasicMaterial({
        color: `rgb(${color})`,
      });
      let points = [];
      points.push(new THREE.Vector3(origin[0], origin[1], origin[2]));
      points.push(
        new THREE.Vector3(destination[0], destination[1], destination[2])
      );
      let lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      let line = new THREE.Line(lineGeometry, lineMaterial);
      return line;
    },
    switchThemes() {
      if (this.theme) {
        this.renderer.setClearColor("#e0e0e0");
      } else {
        this.renderer.setClearColor("#1e1e1e");
      }
    },
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
      this.renderer = new THREE.WebGLRenderer({ antialias: true });

      this.camera.position.x =
        (-this.maxValue - 1) * this.distanceBetweenCubes * 0.5;
      this.camera.position.y = 40;
      this.camera.position.z = 10;
      this.scene.position.y = (-this.maxValue - 1) * 0.5;
      this.renderer.setSize(this.winWidth, this.winHeight);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.switchThemes();
      this.$refs.cube.appendChild(this.renderer.domElement);
    },
    buildGeometry() {
      const geometry = new THREE.BoxGeometry(1, 1, 1);

      for (const value of gColorsDB) {
        let x = value.RGB.red;
        let y = value.RGB.green;
        let z = value.RGB.blue;
        let material = new THREE.MeshBasicMaterial({
          color: value.rgb,
        });
        let mesh = new THREE.Mesh(geometry, material);
        mesh.position.x =
          x * this.distanceBetweenCubes -
          this.maxValue * this.distanceBetweenCubes * 0.5;
        mesh.position.y = y * this.distanceBetweenCubes;
        mesh.position.z =
          z * this.distanceBetweenCubes -
          this.maxValue * this.distanceBetweenCubes * 0.5;
        mesh.name = value.spinalCase;
        this.scene.add(mesh);
      }

      const size = this.maxValue * this.distanceBetweenCubes;
      const divisions = 25;
      this.gridHelper = new THREE.GridHelper(size, divisions);

      const red = this.createLine(
        "255,0,0",
        [-255 / 2, 0, -255 / 2],
        [255 / 2, 0, -255 / 2]
      );
      const blue = this.createLine(
        "0,0,255",
        [-255 / 2, 0, -255 / 2],
        [-255 / 2, 0, 255 / 2]
      );
      const green = this.createLine(
        "0,255,0",
        [-255 / 2, 0, -255 / 2],
        [-255 / 2, 255, -255 / 2]
      );
      const cyan = this.createLine(
        "0,255,255",
        [-255 / 2, 0, -255 / 2],
        [-255 / 2, 255, 255 / 2]
      );
      const magenta = this.createLine(
        "255,0,255",
        [-255 / 2, 0, -255 / 2],
        [255 / 2, 0, 255 / 2]
      );
      const yellow = this.createLine(
        "255,255,0",
        [-255 / 2, 0, -255 / 2],
        [255 / 2, 255, -255 / 2]
      );
      const white = this.createLine(
        "255,255,255",
        [-255 / 2, 0, -255 / 2],
        [255 / 2, 255, 255 / 2]
      );

      const boxGroup = new THREE.Group();
      boxGroup.add(
        this.createLine(
          "80,80,80",
          [255 / 2, 0, -255 / 2],
          [255 / 2, 255, -255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [255 / 2, 0, -255 / 2],
          [255 / 2, 0, 255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [255 / 2, 0, 255 / 2],
          [255 / 2, 255, 255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [-255 / 2, 0, 255 / 2],
          [255 / 2, 0, 255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [-255 / 2, 255, -255 / 2],
          [255 / 2, 255, -255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [-255 / 2, 255, -255 / 2],
          [-255 / 2, 255, 255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [-255 / 2, 0, 255 / 2],
          [-255 / 2, 255, 255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [255 / 2, 255, -255 / 2],
          [255 / 2, 255, 255 / 2]
        ),
        this.createLine(
          "80,80,80",
          [255 / 2, 255, 255 / 2],
          [-255 / 2, 255, 255 / 2]
        )
      );

      this.linesGroup = new THREE.Group();
      this.linesGroup.add(
        red,
        blue,
        green,
        cyan,
        magenta,
        yellow,
        white,
        boxGroup
      );
    },
    updateSpeed(newVal) {
      this.cubeRotation = parseInt(newVal);
    },
  },
  mounted() {
    this.$store.commit("setPanelVisibility", true);

    this.buildScene();
    this.buildGeometry();
    this.render();
  },
  created() {
    window.addEventListener("resize", this.resizeWindow);
  },
  watch: {
    theme: function () {
      this.switchThemes();
    },
    panel: function () {
      this.resizeWindow();
    },
  },
  beforeDestroy() {
    this.render = () => {
      // remove render loop
    };
    window.removeEventListener("resize", this.resizeWindow);
  },
});
</script>