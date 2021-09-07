import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import ButtonsWorkareaView from '../views/buttons-workarea.vue';
import ColorsWorkareaView from '../views/colors-workarea.vue';
import CubeWorkareaView from '../views/cube-workarea.vue';
import CubePanelView from '../views/cube-panel.vue';
import GridWorkareaView from '../views/grid-workarea.vue';
import GridPanelView from '../views/grid-panel.vue';
import HomeWorkareaView from '../views/home-workarea.vue';
import HomePanelView from '../views/home-panel.vue';
import ProjectsWorkareaView from '../views/projects-workarea.vue';
import ExperimentsWorkareaView from '../views/experiments-workarea.vue';
import StatisticsWorkareaView from '../views/statistics-workarea.vue';
import GearWorkareaView from '../views/gear-workarea.vue';
import GearPanelView from '../views/gear-panel.vue';
import WheelWorkareaView from '../views/wheel-workarea.vue';
import WheelPanelView from '../views/wheel-panel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: 'home',
    path: '/',
    components: {
      workarea: HomeWorkareaView,
      panel: HomePanelView,
    },
  },
  {
    name: 'projects',
    path: '/projects',
    components: {
      workarea: ProjectsWorkareaView,
    },
  },
  {
    name: 'experiments',
    path: '/experiments',
    components: {
      workarea: ExperimentsWorkareaView,
    },
  },
  {
    name: 'colors',
    path: '/colors',
    components: {
      workarea: ColorsWorkareaView,
    },
  },
  {
    name: 'buttons',
    path: '/buttons',
    components: {
      workarea: ButtonsWorkareaView,
    },
  },
  {
    name: 'cube',
    path: '/cube',
    components: {
      workarea: CubeWorkareaView,
      panel: CubePanelView,
    },
  },
  {
    name: 'statistics',
    path: '/statistics',
    components: {
      workarea: StatisticsWorkareaView,
    },
  },
  {
    name: 'grid',
    path: '/grid',
    components: {
      workarea: GridWorkareaView,
      panel: GridPanelView,
    },
  },
  {
    name: 'gear',
    path: '/gear',
    components: {
      workarea: GearWorkareaView,
      panel: GearPanelView,
    },
  },
  {
    name: 'wheel',
    path: '/wheel',
    components: {
      workarea: WheelWorkareaView,
      panel: WheelPanelView,
    },
  },
  {
    path: '*',
    redirect: '/'
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;