import Vue from 'vue';
import app from './app.vue';
import router from './modules/router';
import { store } from './modules/store';
import { firestorePlugin } from 'vuefire';
import './stylesheets/application.scss';
import './modules/commons';
import "highlight.js/styles/tomorrow-night-bright.css";
import { analytics } from 'firebase/app';
import 'firebase/analytics';
import { firebaseApp } from "./modules/firebase";
import "nano-grid/modules/tooltip";
import 'firebase/firestore';
import { formatDBtoJSON } from "./modules/format-db";
import './modules/google-maps';
import axios from "axios";

const db = firebaseApp.firestore();

// ---------------- Selection

store.commit("addColumn",
  {
    mode: "Percent",
    size: "100%",
    subtraction: "100",
    color: "silver",
    expression: "sz1b4m100",
    block: "column",
  }
);

store.commit("addColumn",
  {
    mode: "Fixed",
    size: "100",
    subtraction: "0",
    color: "cod-grey",
    expression: "sz100",
    block: "column",
  },
);

db.collection("users")
  .doc("main")
  .get()
  .then((doc) => {
    vueApp.user = doc.data();
  });

db.collection('projects')
  .get()
  .then(item => {
    vueApp.projects = formatDBtoJSON(item);
  });

analytics(firebaseApp);

Vue.prototype.$axios = axios;
Vue.use(firestorePlugin);
Vue.config.productionTip = false;

const vueApp = new Vue({
  router,
  store,
  data: () => ({
    user: {},
    projects: {},
  }),
  render: h => h(app)
}).$mount('#app');
