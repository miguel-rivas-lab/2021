import Vue from 'vue';
import app from './app.vue';
import router from './modules/router';
import { store } from './modules/store';
import { firestorePlugin } from 'vuefire';
import './stylesheets/application.scss';
import './modules/commons.ts';
import './modules/db-organizer';
import "highlight.js/styles/tomorrow-night-bright.css";

import { analytics } from 'firebase/app';
import 'firebase/analytics';
import { firebaseApp } from "./modules/firebase";

analytics(firebaseApp);

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app');