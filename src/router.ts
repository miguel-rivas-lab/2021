import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import ButtonsView from './views/buttons.vue';
import ColorsView from './views/colors.vue';
import DocumentsView from './views/documents.vue';
import GridView from './views/grid.vue';
import HomeView from './views/home.vue';
import ProjectsView from './views/projects.vue';
import PrototypesView from './views/prototypes.vue';

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
    name: 'prototypes',
    path: '/prototypes',
    component: PrototypesView,
  },
  {
    name: 'documents',
    path: '/documents',
    component: DocumentsView,
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