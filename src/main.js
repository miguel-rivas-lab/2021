import Vue from 'vue';
import app from './javascript/vue/app.vue';
import './stylesheets/application.scss';

import NanoRow from '../modules/nano-grid/vue/row.vue';
import NanoColumn from '../modules/nano-grid/vue/column.vue';
import NanoIcon from '../modules/nano-grid/vue/icon.vue';
import NanoBtn from '../modules/nano-grid/vue/btn.vue';

Vue.config.productionTip = false

Vue.component("row", NanoRow);
Vue.component("column", NanoColumn);
Vue.component("icon", NanoIcon);
Vue.component("btn", NanoBtn);

// ---------------------------------- Alias:Icon
Vue.component("m-icon", Vue.extend({
  props: {
    mode: {
      default: 'mdi'
    }
  },
  extends: NanoIcon
}));
// ---------------------------------- Alias:Column
Vue.component("prefix", Vue.extend({
  props: {
    mode: {
      default: 'prefix'
    }
  },
  extends: NanoColumn
}));

Vue.component("suffix", Vue.extend({
  props: {
    mode: {
      default: 'suffix'
    }
  },
  extends: NanoColumn
}));

Vue.component("t-column", Vue.extend({
  props: {
    tableElement: {
      default: true
    }
  },
  extends: NanoColumn
}));

// ---------------------------------- Alias:Row
Vue.component("t-row", Vue.extend({
  props: {
    tableElement: {
      default: true
    }
  },
  extends: NanoRow
}));

Vue.component("multi-input", Vue.extend({
  props: {
    multiInput: {
      default: true
    }
  },
  extends: NanoRow
}));

new Vue({
  render: h => h(app),
}).$mount('#app');