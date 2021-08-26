import Vue from 'vue';
import app from './app.vue';
import './stylesheets/application.scss';
import router from './router';
import './commons.ts';
import store from './store';
import VueGtag from 'vue-gtag';

Vue.use(VueGtag, {
  config: { id: "G-R0PK9P1L3L" }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount('#app');