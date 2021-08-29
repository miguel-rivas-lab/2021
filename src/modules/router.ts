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
    component: HomeView,
  },
  {
    name: 'projects',
    path: '/projects',
    component: ProjectsView,
  },
  {
    name: 'experiments',
    path: '/experiments',
    component: ExperimentsView,
  },
  {
    name: 'colors',
    path: '/colors',
    component: ColorsView,
  },
  {
    name: 'buttons',
    path: '/buttons',
    component: ButtonsView,
  },
  {
    name: 'cube',
    path: '/cube',
    component: CubeView,
  },
  {
    name: 'statistics',
    path: '/statistics',
    component: StatisticsView,
  },
  {
    name: 'grid',
    path: '/grid',
    component: GridView,
  },
  {
    name: 'gear',
    path: '/gear',
    component: GearView,
  },
  {
    name: 'wheel',
    path: '/wheel',
    component: WheelView,
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