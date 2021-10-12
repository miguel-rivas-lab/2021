import helpers from "mr-kernel/modules/helpers";

// ---------------- Enums

import { tool, toolEnum } from "mr-kernel/enums/tools";
import { role, roleEnum } from "mr-kernel/enums/roles";
import { type, typeEnum } from "mr-kernel/enums/types";
import { client, clientEnum } from "mr-kernel/enums/clients";

export function formatDBToFirebase(item) {
  let links = [];
  if (item.links?.length > 0) {
    links = item.links.map(
      link => {
        const params = link.params ? link.params : [];
        return {
          "url": link.url,
          "text": link.text,
          "params": params,
          "self": link.self || false,
        }
      }
    );
  }

  const roles = item.roles.sort();
  const tools = item.tools.sort();
  const clients = item.clients.sort();
  const types = item.types.sort();
  const disabled = item.disabled ? true : false;
  const children = item.children || [];

  return {
    "title": item.title,
    "clients": clients,
    "date": item.date,
    "types": types,
    "disabled": disabled,
    "links": links,
    "roles": roles,
    "tools": tools,
    "children": children,
  }
}

export function formatDBtoJSON(querySnapshot) {
  const projectsDB = {};
  querySnapshot.docs.forEach(doc => {
    const p = doc.data();

    const links = p.links.map(
      link => {
        const params = link.params.length ? `?${link.params.join("&")}` : '';
        const url = link.url;

        return {
          "url": `${url}${params}`,
          "text": link.text,
          "self": link.self,
        }
      }
    );

    const roles = p.roles.map(
      item => role[roleEnum[item]]
    );

    const tools = p.tools.map(
      item => tool[toolEnum[item]]
    );

    const clients = p.clients.map(
      item => client[clientEnum[item]]
    );

    const types = p.types.map(
      item => type[typeEnum[item]]
    ).join(' & ');

    const project = {
      "title": p.title,
      "clients": clients,
      "date": p.date,
      "types": types,
      "disabled": p.disabled,
      "links": links,
      "roles": roles,
      "tools": tools,
      "children": p.children,
      "image": ""
    };

    const id = helpers.getNewID(project.clients[0], project.date);

    try {
      project.image = `https://miguel-rivas.github.io/zapp/img/preview-wide/${id}.jpg`;
    }
    catch {
      project.image = require(`@/img/miguelrivas.jpg`);
    }
    projectsDB[id] = project;
  });
  return projectsDB;
}

export function sortByDate(a, b) {
  return helpers.dateToNumber(b.date) - helpers.dateToNumber(a.date);
}