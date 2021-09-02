import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import ButtonsView from '../views/buttons.vue';
import ColorsView from '../views/colors.vue';
import CubeView from '../views/cube.vue';
import GridView from '../views/grid.vue';
import HomeView from '../views/home.vue';
import ProjectsView from '../views/projects.vue';
import ExperimentsView from '../views/experiments.vue';
import StatisticsView from '../views/statistics.vue';
import GearView from '../views/gear.vue';
import WheelView from '../views/wheel.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    name: 'home',
    path: '/',
    components: {
      default: HomeView,
    },
  },
  {
    name: 'projects',
    path: '/projects',
    components: {
      default: ProjectsView,
    },
  },
  {
    name: 'experiments',
    path: '/experiments',
    components: {
      default: ExperimentsView,
    },
  },
  {
    name: 'colors',
    path: '/colors',
    components: {
      default: ColorsView,
    },
  },
  {
    name: 'buttons',
    path: '/buttons',
    components: {
      default: ButtonsView,
    },
  },
  {
    name: 'cube',
    path: '/cube',
    components: {
      default: CubeView,
    },
  },
  {
    name: 'statistics',
    path: '/statistics',
    components: {
      default: StatisticsView,
    },
  },
  {
    name: 'grid',
    path: '/grid',
    components: {
      default: GridView,
    },
  },
  {
    name: 'gear',
    path: '/gear',
    components: {
      default: GearView,
    },
  },
  {
    name: 'wheel',
    path: '/wheel',
    components: {
      default: WheelView,
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