<template>
  <div id="nano-bot"/>
</template>

<script lang="ts">
  import Vue from "vue";
  import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    BoxGeometry,
    MeshBasicMaterial,
    Mesh,
    // Group,
  } from 'three';
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

  export default Vue.extend({
    data: () => ({
      winHeight: 400,
      winWidth: 600,
      controls: undefined,
      scene: undefined,
      camera: undefined,
      distanceBetweenCubes: 1,
      maxValue: 255,
      renderer: undefined,
      sceneCtrl: undefined,
      linesGroup: undefined,
    }),
    methods: {
      render() {
        if (this.controls){
          this.controls.update();
        }
        requestAnimationFrame(this.render);
        this.renderer.render(this.scene, this.camera);
      },
      createCube({x,y,z},{r,g,b},{px,py,pz}){
        const geometry = new BoxGeometry(x, y, z);
        let material = new MeshBasicMaterial(
          {color: `rgb(${r}, ${g}, ${b})`}
        );
        let mesh = new Mesh(geometry, material);

        mesh.position.x = px;
        mesh.position.y = py;
        mesh.position.z = pz;

        this.scene.add(mesh);
        return mesh;
      },
    },
    mounted(){
      this.scene = new Scene();
      this.camera = new PerspectiveCamera(75, this.winWidth/this.winHeight, 0.1, 1000);
      this.renderer = new WebGLRenderer({antialias: true});

      this.camera.position.x = 0;
      this.camera.position.y = 40;
      this.camera.position.z = 0;
      this.scene.position.y = 0;
      this.scene.rotation.z = -10;
      this.renderer.setSize(this.winWidth, this.winHeight);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);

      this.renderer.setClearColor("#232327");
      // this.renderer.setClearColor("#dddddd");

      this.createCube({x:20, y:35, z:5},{r:22, g:22, b:22},{px:0, py:0, pz:0});
      this.createCube({x:1, y:2, z:4},{r:88, g:88, b:88},{px:10.5, py:0, pz:0});

      this.render();

      document.getElementById('nano-bot').appendChild(this.renderer.domElement);
    },
  });
</script>