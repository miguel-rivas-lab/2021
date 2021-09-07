import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import ButtonsView from '../views/buttons.vue';
import ColorsView from '../views/colors.vue';
import CubeView from '../views/cube.vue';
import CubePanelView from '../views/cube-panel.vue';
import GridView from '../views/grid.vue';
import GridPanelView from '../views/grid-panel.vue';
import HomeView from '../views/home.vue';
import HomePanelView from '../views/home-panel.vue';
import ProjectsView from '../views/projects.vue';
import ExperimentsView from '../views/experiments.vue';
import StatisticsView from '../views/statistics.vue';
import GearView from '../views/gear.vue';
import GearPanelView from '../views/gear-panel.vue';
import WheelView from '../views/wheel.vue';
import WheelPanelView from '../views/wheel-panel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: 'home',
    path: '/',
    components: {
      workarea: HomeView,
      panel: HomePanelView,
    },
  },
  {
    name: 'projects',
    path: '/projects',
    components: {
      workarea: ProjectsView,
    },
  },
  {
    name: 'experiments',
    path: '/experiments',
    components: {
      workarea: ExperimentsView,
    },
  },
  {
    name: 'colors',
    path: '/colors',
    components: {
      workarea: ColorsView,
    },
  },
  {
    name: 'buttons',
    path: '/buttons',
    components: {
      workarea: ButtonsView,
    },
  },
  {
    name: 'cube',
    path: '/cube',
    components: {
      workarea: CubeView,
      panel: CubePanelView,
    },
  },
  {
    name: 'statistics',
    path: '/statistics',
    components: {
      workarea: StatisticsView,
    },
  },
  {
    name: 'grid',
    path: '/grid',
    components: {
      workarea: GridView,
      panel: GridPanelView,
    },
  },
  {
    name: 'gear',
    path: '/gear',
    components: {
      workarea: GearView,
      panel: GearPanelView,
    },
  },
  {
    name: 'wheel',
    path: '/wheel',
    components: {
      workarea: WheelView,
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