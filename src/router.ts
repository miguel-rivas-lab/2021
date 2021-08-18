import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import ButtonsView from './views/buttons.vue';
import ColorsView from './views/colors.vue';
import GridView from './views/grid.vue';
import HomeView from './views/home.vue';
import ProjectsView from './views/projects.vue';
import ExperimentsView from './views/experiments.vue';

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
    name: 'grid',
    path: '/grid',
    component: GridView
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