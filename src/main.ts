import Vue from 'vue';
import app from './app.vue';
import './stylesheets/application.scss';
import router from './router';
import './commons.ts';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app');