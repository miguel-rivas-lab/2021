import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    panel: true,
    theme: false,
    selection: {
      row: "Row",
      integrate: false,
      spacing: 0,
      columns: [
        {
          mode: "Percent",
          size: "100%",
          subtraction: "100",
          color: "silver",
          expression: "sz1b4m100",
          block: "column",
        },
        {
          mode: "Fixed",
          size: "100",
          subtraction: "0",
          color: "cod-grey",
          expression: "sz100",
          block: "column",
        },
      ]
    },
  },
  mutations: {
    setPanelVisibility(state, value) {
      state.panel = value;
    },
    togglePanelVisibility(state) {
      state.panel = !state.panel;
    },
    setTheme(state, value) {
      state.theme = value;
    },
    toggleTheme(state) {
      state.theme = !state.theme;
    },
    addColumn(state, value) {
      state.selection.columns.push(value);
    },
    removeColumn(state, index) {
      state.selection.columns.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getPanelVisibility: state => state.panel,
    getTheme: state => state.theme,
    getSelection: state => state.selection,
  }
});
