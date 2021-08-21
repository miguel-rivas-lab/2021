<template>
  <row class="nano-app">
    <panel-navigation />

    <column size="300" class="panel">
      <scroll-area color="royal-purple">
        <row class="row-block" tag="fieldset" v-if="sceneCtrl">
          <column size="100%">
            <legend>Cube Controllers</legend>

            <!-- <row>
              <column size="100%">
                <label for="rotation">Rotation Speed</label>
              </column>
              <column size="100%">
                <input
                  id="rotation"
                  type="range"
                  name="rotation"
                  min="-0.05"
                  max="0.05"
                  step="0.0001"
                  v-model="sceneCtrl.rotation"
                />
              </column>
            </row> -->

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

    <column size="100%-350" class="workarea">
      <div id="my-graph"></div>
    </column>
  </row>
</template>

<script lang="ts">
import Vue from "vue";
import PanelNavigation from "../components/panel-navigation.vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { gColorsDB } from "../db/colors";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {
    PanelNavigation,
  },
  data: () => ({
    gColorsDB: gColorsDB,
    gui: undefined,
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
    sceneControls: function () {
      this.rotation = 0.025;
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
      return 350;
    },
  },
  methods: {
    render() {
      if (this.controls) {
        this.controls.update();
      }
      requestAnimationFrame(this.render);
      if (!this.sceneCtrl.pause) {
        this.scene.rotation.y += this.sceneCtrl.rotation;
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
    switchThemes(){
      if(this.getTheme){
        this.renderer.setClearColor("#e0e0e0");
      } else {
        this.renderer.setClearColor("#151619");
      }
    },
  },
  mounted() {
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

    this.$store.commit("setPanelVisibility", true);

    this.camera.position.x =
      (-this.maxValue - 1) * this.distanceBetweenCubes * 0.5;
    this.camera.position.y = 40;
    this.camera.position.z = 10;
    this.scene.position.y = (-this.maxValue - 1) * 0.5;
    this.renderer.setSize(this.winWidth, this.winHeight);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    if(this.getTheme){
      this.renderer.setClearColor("#e0e0e0");
    } else {
      this.renderer.setClearColor("#1e1e1e");
    }

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

    this.render();

    document.getElementById("my-graph").appendChild(this.renderer.domElement);
    window.addEventListener("resize", this.resizeWindow);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeWindow);
  },
});
</script>