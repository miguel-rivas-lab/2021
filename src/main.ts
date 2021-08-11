import Vue from 'vue';
import app from './app.vue';
import './stylesheets/application.scss';
import router from './router';
import './commons.ts';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(app)
}).$mount('#app')
