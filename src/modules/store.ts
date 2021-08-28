import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    panel: true,
    theme: false,
    parallelUniverse: false,
    user: {},
    projects: [],
    selection: {
      row: "Row",
      integrate: false,
      spacing: 0,
      columns: []
    },
  },
  mutations: {
    setPanelVisibility(state, payload) {
      state.panel = payload;
    },
    togglePanelVisibility(state) {
      state.panel = !state.panel;
    },
    setTheme(state, payload) {
      state.theme = payload;
    },
    toggleTheme(state) {
      state.theme = !state.theme;
    },
    toggleUniverse(state) {
      state.parallelUniverse = !state.parallelUniverse;
    },
    addColumn(state, payload) {
      state.selection.columns.push(payload);
    },
    removeColumn(state, index) {
      state.selection.columns.splice(index, 1);
    },
    loadUsers(state, payload) {
      state.user = payload;
    },
    loadProjects(state, payload) {
      state.projects = payload;
    },
  },
  actions: {},
  modules: {
  },
  getters: {
    getPanelVisibility: state => state.panel,
    getTheme: state => state.theme,
    getUniverse: state => state.parallelUniverse,
    getSelection: state => state.selection,
    getUser: state => state.user,
    getProjects: state => state.projects,
  }
});