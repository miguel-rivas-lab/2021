import Vue from 'vue';
import app from './app.vue';
import router from './modules/router';
import { store } from './modules/store';
import { firestorePlugin } from 'vuefire';
import './stylesheets/application.scss';
import './modules/commons.ts';
import "highlight.js/styles/tomorrow-night-bright.css";
import { analytics } from 'firebase/app';
import 'firebase/analytics';
import { firebaseApp } from "./modules/firebase";
import "nano-grid/modules/tooltip";

import 'firebase/firestore';
import helpers from "mr-kernel/modules/helpers";

// ---------------- Enums

import { tool, toolEnum } from "mr-kernel/enums/tools";
import { role, roleEnum } from "mr-kernel/enums/roles";
import { type, typeEnum } from "mr-kernel/enums/types";
import { client, clientEnum } from "mr-kernel/enums/clients";

import { all, users } from "./modules/db";

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
  .then(querySnapshot => {
    const projectsDB = {};
    querySnapshot.docs.forEach(doc => {
      const p = doc.data();

      const links = p["links"].map(
        link => {
          const params = link["params"].length ? `?${link["params"].join("&")}` : '';
          const url = link["url"];

          return {
            "url": `${url}${params}`,
            "text": link["text"],
          }
        }
      );

      const roles = p["roles"].map(
        item => role[roleEnum[item]]
      );

      const tools = p["tools"].map(
        item => tool[toolEnum[item]]
      );

      const project = {
        "title": p["title"],
        "client": client[clientEnum[p.client]],
        "date": p["date"],
        "type": type[typeEnum[p.type]],
        "disabled": p.disabled,
        "links": links,
        "roles": roles,
        "tools": tools,
        "children": p.children,
      };

      const id = helpers.getNewID(project.client, project.date);

      try {
        project["image"] = `https://miguel-rivas.github.io/zapp/img/preview-wide/${id}.jpg`;
      }
      catch {
        project["image"] = require(`@/img/miguelrivas.jpg`);
      }
      projectsDB[id] = project;
    });
    console.log(projectsDB);
    vueApp.projects = projectsDB;
  });

analytics(firebaseApp);

Vue.use(firestorePlugin);
Vue.config.productionTip = false;

const vueApp = new Vue({
  router,
  store,
  data: () => ({
    user: users,
    projects: {},
  }),
  render: h => h(app)
}).$mount('#app');