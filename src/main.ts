import Vue from 'vue';
import app from './app.vue';
import router from './modules/router';
import {store} from './modules/store';
import { firestorePlugin } from 'vuefire';

// to sort firebase database
// import "./modules/db-sync";

import './stylesheets/application.scss';
import './modules/commons.ts';
import './modules/db-organizer';

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app');