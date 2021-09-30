import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    panel: true,
    theme: false,
    parallelUniverse: false,
    selection: {
      home: {
        sceneRotation: 1,
        cover: true,
        rotateX: false,
        rotateY: false,
        rotateZ: true,
        grid: true,
      },
      grid: {
        row: "Row",
        integrate: false,
        breakpoint: "-",
        spacing: 0,
        columns: [],
      },
      cube: {
        cubeRotation: 3,
        pause: false,
        grid: true,
        lines: false,
      },
      gear: {
        cornerAmount: 40,
        outterCircleRadius: 50,
        innerCircleRadius: 45,
        mainPerforationRadius: 5,
        sidePerforationAmount: 4,
        sidePerforationRadius: 12,
        sidePerforationDistance: 25,
      },
      wheel: {
        colors: 12,
      }
    },
  },
  mutations: {
    setValue(state, payload) {
      state[payload.name] = payload.value;
    },
    toggleValue(state, payload) {
      state[payload] = !state[payload];
    },
    addColumn(state, payload) {
      state.selection.grid.columns.push(payload);
    },
    removeColumn(state, index) {
      state.selection.grid.columns.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
  getters: {
    getPanelVisibility: state => state.panel,
    getTheme: state => state.theme,
    getUniverse: state => state.parallelUniverse,
    getHomeSelection: state => state.selection.home,
    getGridSelection: state => state.selection.grid,
    getCubeSelection: state => state.selection.cube,
    getGearSelection: state => state.selection.gear,
    getWheelSelection: state => state.selection.wheel,
  }
});