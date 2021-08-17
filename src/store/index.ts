import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    panel: true,
    selection: {
      row: "Row",
      integrate: false,
      spacing: 0,
      columns: [
        {
            mode: "Percent",
            size: "50%",
            subtraction: "0",
            color: "denim",
            expression: "sz1b4",
            block: "column",
        },
        {
            mode: "Percent",
            size: "50%",
            subtraction: "0",
            color: "persian-red",
            expression: "sz1b4",
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
    getSelection: state => state.selection,
  }
});
