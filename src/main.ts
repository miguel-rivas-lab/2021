import Vue from 'vue';
import app from './app.vue';
import router from './router';
import {store} from './store';
import { firestorePlugin } from 'vuefire';

// to sort firebase database
// import "./db-sync";

import './stylesheets/application.scss';
import './commons.ts';
import './db-organizer';

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app');