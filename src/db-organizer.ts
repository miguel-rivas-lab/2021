import { store } from "./store";
import { db } from "./firebase-db";

// ---------------- Enums

import { tool, toolEnum } from "./enums/tools";
import { role, roleEnum } from "./enums/roles";
import { type, typeEnum } from "./enums/types";
import { client, clientEnum } from "./enums/clients";
import { categoryEnum } from "./enums/categories";

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

// ---------------- Firebase

db.collection("users")
  .doc("main")
  .get()
  .then((doc) => {
    store.commit("loadUsers", doc.data());
  });

db.collection('projects')
  .get()
  .then(querySnapshot => {
    const projectsDB = querySnapshot.docs.map(doc => {
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
        "category": categoryEnum[p["category"]],
        "client": client[clientEnum[p["client"]]],
        "date": p["date"],
        "type": type[typeEnum[p["type"]]],
        "disabled": p["disabled"],
        "links": links,
        "roles": roles,
        "tools": tools,
      };

      return project;
    });
    store.commit("loadProjects", projectsDB);
  });