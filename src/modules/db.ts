import { toolEnum } from "mr-kernel/enums/tools";
import { roleEnum } from "mr-kernel/enums/roles";
import { typeEnum } from "mr-kernel/enums/types";
import { client, clientEnum } from "mr-kernel/enums/clients";
import { ProjectFirebase } from "mr-kernel/interfaces/project-firebase";

import h from "mr-kernel/modules/helpers";

const users = {
  "name": "Jesus",
  "middleName": "Miguel",
  "lastName": "Rivas",
  "title": "Frontend Developer",
  "website": "miguel-rivas.github.io",
  "location": {
    "city": "Washington",
    "state": "DC"
  },
  "media": {
    "codepen": {
      "user": "planetwurlex"
    },
    "issuu": {
      "user": "jemiguelrivas"
    },
    "linkedin": {
      "user": "jemiguelrivas"
    },
    "github": {
      "user": "jemiguelrivas",
      "development": "miguel-rivas-lab",
      "production": "miguel-rivas"
    }
  }
};

const linkWeb = (item) => `https://${users.media.github.production}.github.io/${item}`;
const linkGithub = (item) => `https://github.com/${users.media.github.production}/${item}`;
const linkCodepen = (item) => `https://codepen.io/${users.media.codepen.user}/pen/${item}`;
// const linkGithubDev = (item) => `https://github.com/${users.media.github.development}/${item}-dev`;

type ProjectsType = Array<ProjectFirebase>;

const projects: ProjectsType = [
  {
    date: "2013/12/06",
    title: "Pasteleria Del Jardin",
    type: typeEnum.socialMedia,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.delJardin,
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/8", text: "Document" },
    ],
  },
  {
    date: "2013/06/18",
    title: "Lanza tu Promo",
    type: typeEnum.socialMedia,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.highschool,
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/10", text: "Document" },
    ],
  },
  {
    date: "2013/05/28",
    title: "Audrey Hepburn",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.photoshop,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/12", text: "Document" },
    ],
  },
  {
    date: "2013/03/21",
    title: "Audio 2",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/14", text: "Document" },
    ],
  },
  {
    date: "2012/11/26",
    title: "Beauty is a Beast",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/16", text: "Document" },
    ],
  },
  {
    date: "2012/10/24",
    title: "Linux Grub",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.freehand,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/24", text: "Document" },
    ],
  },
  {
    date: "2019/07/10",
    title: "Play Sound",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.javascript,
    ],
    links: [
      { url: linkCodepen("bPzVPJ"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2020/08/08",
    title: "Switch",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.scss,
      toolEnum.slim,
    ],
    links: [
      { url: linkCodepen("LYNEwLZ"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2020/06/17",
    title: "Toggle Arrow",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.scss,
      toolEnum.slim,
    ],
    links: [
      { url: linkCodepen("VwembzX"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2020/08/18",
    title: "Range Slider",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.scss,
      toolEnum.slim,
    ],
    links: [
      { url: linkCodepen("qBZNMyQ"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2011/07/17",
    title: "Madre Naturaleza",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.sk1,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/40", text: "Document" },
    ],
  },
  {
    date: "2011/04/24",
    title: "El Montaje",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.animation,
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.flash,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/42", text: "Document" },
    ],
  },
  {
    date: "2011/02/22",
    title: "Transformer",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/44", text: "Document" },
    ],
  },
  {
    date: "2009/04/27",
    title: "Flygon",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.fireworks,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/48", text: "Document" },
    ],
  },
  {
    date: "2012/12/12",
    title: "Baká",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.indesign,
      toolEnum.pencil,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/16", text: "Document" },
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/28", text: "Document" },
    ],
  },
  {
    date: "2012/06/14",
    title: "Le Machine",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.inkscape,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/18", text: "Document" },
    ],
  },
  {
    date: "2012/01/16",
    title: "Stars",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.inkscape,
      toolEnum.html,
      toolEnum.javascript,
      toolEnum.css,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/20", text: "Document" },
    ],
  },
  {
    date: "2012/06/25",
    title: "Water Matters",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.indesign,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/24", text: "Document" },
    ],
  },
  {
    date: "2012/06/21",
    title: "Wickhop",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.inkscape,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/28", text: "Document" },
    ],
  },
  {
    date: "2012/04/29",
    title: "Corel Draw",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.corelDraw,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/34", text: "Document" },
    ],
  },
  {
    date: "2011/08/03",
    title: "MP4",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
      roleEnum.animation,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.flash,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/38", text: "Document" },
    ],
  },
  {
    date: "2011/04/25",
    title: "Dream",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/40", text: "Document" },
    ],
  },
  {
    date: "2010/12/27",
    title: "Lapices de Colores",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.fireworks,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/48", text: "Document" },
    ],
  },
  {
    date: "2012/07/14",
    title: "Living Walls",
    type: typeEnum.graphicDesign,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.inkscape,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/42", text: "Document" },
    ],
  },
  {
    date: "2012/08/23",
    title: "Tambora",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.inkscape,
      toolEnum.indesign,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/38", text: "Document" },
    ],
  },
  {
    date: "2012/09/20",
    title: "T-Magazine",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.scribus,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/32", text: "Document" },
    ],
  },
  {
    date: "2013/11/30",
    title: "AguacateKun Identidad",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.autocad,
      toolEnum.illustrator,
      toolEnum.indesign,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/14", text: "Document" },
    ],
  },
  {
    date: "2013/01/20",
    title: "Libro de Cuentos",
    type: typeEnum.graphicDesign,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.gimp,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/10", text: "Document" },
      { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/14", text: "Document" },
    ],
  },
  {
    date: "2013/12/03",
    title: "Vacaciones Navideñas",
    type: typeEnum.socialMedia,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.descubria,
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/12", text: "Document" },
    ],
  },
  {
    date: "2013/08/03",
    title: "Social Network Facebook",
    type: typeEnum.socialMedia,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.socialNetwork,
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/16", text: "Document" },
    ],
  },
  {
    date: "2013/07/06",
    title: "Facebook App",
    type: typeEnum.graphicDesign,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.tiempoExtra,
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/18", text: "Document" },
    ],
  },
  {
    date: "2013/07/05",
    title: "Home Gallery Facebook",
    type: typeEnum.socialMedia,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.homeGallery,
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/20", text: "Document" },
    ],
  },
  {
    date: "2013/07/05",
    title: "SDQ Training Center Facebook",
    type: typeEnum.socialMedia,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.sdq,
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/22", text: "Document" },
    ],
  },
  {
    date: "2013/06/27",
    title: "Harina Blaquita Facebook",
    type: typeEnum.socialMedia,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.harinaBlanquita,
    tools: [
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/24", text: "Document" },
    ],
  },
  {
    date: "2012/12/29",
    title: "Jenny Aquino",
    type: typeEnum.graphicDesign,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.inkscape,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/26", text: "Document" },
    ],
  },
  {
    date: "2012/10/12",
    title: "Blindness Poster",
    type: typeEnum.graphicDesign,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.photoshop,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/30", text: "Document" },
    ],
  },
  {
    date: "2012/09/13",
    title: "Diseño de Productos",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.indesign,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/34", text: "Document" },
    ],
  },
  {
    date: "2012/04/16",
    title: "Raspberry Pi C",
    type: typeEnum.graphicDesign,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.inkscape,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/44", text: "Document" },
    ],
  },
  {
    date: "2012/02/28",
    title: "Maggiver",
    type: typeEnum.document,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.mangoBajito,
    tools: [
      toolEnum.inkscape,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/46", text: "Document" },
    ],
  },
  {
    date: "2013/12/15",
    title: "Badges",
    type: typeEnum.graphicDesign,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.cosplayDominicano,
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/8", text: "Document" },
    ],
  },

  {
    date: "2012/10/26",
    title: "Print Portfolio",
    type: typeEnum.document,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.indesign,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf3_005", text: "Portfolio 3" },
      { url: "https://issuu.com/jemiguelrivas/docs/ptf2_000", text: "Portfolio 2" },
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000", text: "Portfolio 1" },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2009/04/27"),
      h.getNewID(client.itla, "2010/07/07"),
      h.getNewID(client.miguelRivas, "2010/12/27"),
      h.getNewID(client.itla, "2011/06/22"),
      h.getNewID(client.itla, "2011/02/22"),
      h.getNewID(client.itla, "2011/04/24"),
      h.getNewID(client.itla, "2011/04/25"),
      h.getNewID(client.itla, "2011/07/06"),
      h.getNewID(client.miguelRivas, "2011/07/17"),
      h.getNewID(client.itla, "2011/07/25"),
      h.getNewID(client.itla, "2011/07/31"),
      h.getNewID(client.itla, "2011/08/03"),
      h.getNewID(client.itla, "2011/11/15"),
      h.getNewID(client.itla, "2011/11/18"),
      h.getNewID(client.itla, "2011/12/05"),
      h.getNewID(client.miguelRivas, "2012/01/16"),
      h.getNewID(client.mangoBajito, "2012/02/28"),
      h.getNewID(client.itla, "2012/04/16"),
      h.getNewID(client.miguelRivas, "2012/04/29"),
      h.getNewID(client.miguelRivas, "2012/06/14"),
      h.getNewID(client.miguelRivas, "2012/06/21"),
      h.getNewID(client.itla, "2012/06/25"),
      h.getNewID(client.miguelRivas, "2012/07/14"),
      h.getNewID(client.itla, "2012/07/24"),
      h.getNewID(client.miguelRivas, "2012/08/23"),
      h.getNewID(client.miguelRivas, "2012/09/26"),
      h.getNewID(client.itla, "2012/09/13"),
      h.getNewID(client.miguelRivas, "2012/09/20"),
      h.getNewID(client.itla, "2012/10/12"),
      h.getNewID(client.miguelRivas, "2012/10/24"),
      h.getNewID(client.miguelRivas, "2012/11/06"),
      h.getNewID(client.itla, "2012/11/26"),
      h.getNewID(client.miguelRivas, "2012/12/12"),
      h.getNewID(client.miguelRivas, "2012/12/29"),
      h.getNewID(client.miguelRivas, "2013/01/20"),
      h.getNewID(client.itla, "2013/03/21"),
      h.getNewID(client.miguelRivas, "2013/05/28"),
      h.getNewID(client.highschool, "2013/06/18"),
      h.getNewID(client.harinaBlanquita, "2013/06/27"),
      h.getNewID(client.sdq, "2013/07/05"),
      h.getNewID(client.homeGallery, "2013/07/05"),
      h.getNewID(client.tiempoExtra, "2013/07/06"),
      h.getNewID(client.socialNetwork, "2013/08/03"),
      h.getNewID(client.miguelRivas, "2013/11/30"),
      h.getNewID(client.descubria, "2013/12/03"),
      h.getNewID(client.delJardin, "2013/12/06"),
      h.getNewID(client.cosplayDominicano, "2013/12/15"),
      h.getNewID(client.miguelRivas, "2014/02/09"),
    ],
  },

  {
    date: "2015/01/03",
    title: "Mainfront",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("main-front"), text: "App" },
      { url: linkGithub("main-front"), text: "Github" },
    ],
  },
  {
    date: "2015/04/19",
    title: "CSS Study",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.angular,
      toolEnum.sweetAlert,
      toolEnum.illustrator,
      toolEnum.scss,
      toolEnum.pug,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("css-study"), text: "App" },
      { url: linkGithub("css-study"), text: "Github" },
    ],
  },
  {
    date: "2021/03/24",
    title: "Hello",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.vue,
      toolEnum.illustrator,
      toolEnum.scss,
      toolEnum.git,
    ],
    links: [
      { url: `${linkWeb("hello")}`, text: "berlin", params: ["city=berlin"] },
      { url: `${linkWeb("hello")}`, text: "dusseldorf", params: ["city=dusseldorf"] },
      { url: `${linkWeb("hello")}`, text: "melbourne", params: ["city=melbourne"] },
      { url: `${linkWeb("hello")}`, text: "schwangau", params: ["city=schwangau"] },
      { url: `${linkWeb("hello")}`, text: "texas", params: ["city=texas"] },
      { url: linkGithub("hello"), text: "Github" },
    ],
  },
  {
    date: "2015/04/26",
    title: "Evolution of the Web",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.stellar,
      toolEnum.inkscape,
      toolEnum.pug,
      toolEnum.git,
      toolEnum.scss,
    ],
    links: [
      { url: linkWeb("evolution-web"), text: "App" },
      { url: linkGithub("evolution-web"), text: "Github" },
    ],
  },
  {
    date: "2015/05/14",
    title: "Robotic Screen",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.illustrator,
    ],
    links: [
      { url: linkCodepen("oXxPvw"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2015/05/23",
    title: "Mini Van",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    disabled: true,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
    ],
    links: [
      { url: linkCodepen("VLKNBz"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2015/05/25",
    title: "Windows Form",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.scss,
      toolEnum.jade,
      toolEnum.illustrator,
    ],
    links: [
      { url: linkCodepen("PqbqpL"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2015/05/28",
    title: "Gear Builder",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.canvas,
      toolEnum.pug,
      toolEnum.scss,
    ],
    disabled: true,
    links: [
      { url: linkCodepen("yNJJpG"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2015/12/07",
    title: "SVG 101",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.stellar,
      toolEnum.snapSVG,
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("svg-101"), text: "Prototype" },
      { url: linkGithub("svg-101"), text: "Github" },
    ],
  },
  {
    date: "2015/12/22",
    title: "Tetravex",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.javascript,
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.sizzle,
      toolEnum.lodash,
      toolEnum.velocity,
      toolEnum.illustrator,
      toolEnum.inkscape,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("tetravex"), text: "App" },
      { url: linkGithub("tetravex"), text: "Github" },
    ],
  },
  {
    date: "2017/02/20",
    title: "Pills",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.slim,
      toolEnum.scss,
    ],
    links: [
      { url: linkCodepen("qRzzmz"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2010/07/07",
    title: "French Toast",
    disabled: true,
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation,
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.flash,
    ],
    links: [
      { url: "https://vimeo.com/224945169", text: "Video" },
    ],
  },
  {
    date: "2012/07/24",
    title: "La Guerra de Vectores",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation,
    ],
    disabled: true,
    client: clientEnum.itla,
    tools: [
      toolEnum.flash,
    ],
    links: [
      { url: "https://vimeo.com/175240185", text: "Video" },
    ],
  },
  {
    date: "2016/11/21",
    title: "Wurlex",
    type: typeEnum.animation3D,
    role: [
      roleEnum.animation, roleEnum.design
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.unity,
      toolEnum.premiere,
    ],
    links: [
      { url: "https://vimeo.com/224977703", text: "Video" },
    ],
    children: [
      h.getNewID(client.itla, "2011/04/25"),
    ],
  },
  {
    date: "2014/02/09",
    title: "Screens Portfolio",
    type: typeEnum.app,
    role: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.php,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("2014"), text: "App" },
      { url: linkGithub("2014"), text: "Github" },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2012/01/16"),
      h.getNewID(client.miguelRivas, "2015/05/14"),
    ]
  },
  {
    date: "2016/08/11",
    title: "Monster Portfolio",
    type: typeEnum.app,
    role: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.php,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("2016"), text: "App" },
      { url: linkGithub("2016"), text: "Github" },
    ],
  },
  {
    date: "2021/08/12",
    title: "Vue Portfolio",
    type: typeEnum.app,
    role: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.vue,
      toolEnum.vuex,
      toolEnum.vueRouter,
      toolEnum.typescript,
      toolEnum.three,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.chartJS,
      toolEnum.firebase,
      toolEnum.highlight,
    ],
    links: [
      { url: linkWeb("2021-vue"), text: "App" },
      { url: linkGithub("2021-vue"), text: "Github" },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2012/11/06"),
      h.getNewID(client.miguelRivas, "2015/05/28"),
      h.getNewID(client.miguelRivas, "2017/01/01"),
      h.getNewID(client.miguelRivas, "2018/06/27"),
      h.getNewID(client.miguelRivas, "2021/03/22"),
      h.getNewID(client.miguelRivas, "2021/09/12"),
      h.getNewID(client.miguelRivas, "2021/02/27"),
    ],
  },
  {
    date: "2018/01/01",
    title: "Grid Portfolio",
    type: typeEnum.app,
    role: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.angular,
      toolEnum.scss,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("2018"), text: "Home" },
      { url: linkWeb("2018/drlogic.html"), text: "DrLogic" },
      { url: linkWeb("2018/apap.html"), text: "Apap" },
      { url: linkWeb("2018/bpr.html"), text: "BPR Bank" },
      { url: linkWeb("2018/presidente.html"), text: "Presidente" },
      { url: linkWeb("2018/tests.html"), text: "Tests" },
      { url: "https://vimeo.com/260621089", text: "Video" },
      { url: linkGithub("2018"), text: "Github" },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2021/03/24"),
    ]
  },
  {
    date: "2016/01/11",
    title: "HTML/LOVE",
    type: typeEnum.landingPage,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.animate,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("html-love"), text: "App" },
      { url: linkGithub("html-love"), text: "Github" },
    ],
  },
  {
    date: "2021/03/22",
    title: "Nano Grid",
    type: typeEnum.module,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.vue,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.typescript,
    ],
    disabled: true,
    links: [
      { url: "https://www.npmjs.com/package/nano-grid", text: "Node Module" },
      { url: linkGithub("nano-grid"), text: "Github" },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2019/07/10"),
      h.getNewID(client.miguelRivas, "2020/08/18"),
    ],
  },
  {
    date: "2021/09/12",
    title: "MR Kernel",
    type: typeEnum.module,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [

      toolEnum.typescript,
      toolEnum.scss,
      toolEnum.git,
    ],
    links: [
      { url: linkGithub("mr-kernel"), text: "Github" },
    ],
    disabled: true,
  },
  {
    date: "2012/09/26",
    title: "Tips of Design",
    type: typeEnum.document,
    role: [
      roleEnum.design,
    ],
    disabled: true,
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.indesign,
    ],
  },
  {
    date: "2017/03/05",
    title: "Art Direction",
    type: typeEnum.document,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.indesign,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    disabled: true,
  },
  {
    date: "2015/05/10",
    title: "Bootstrap Prototype",
    type: typeEnum.landingPage,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.bootstrap,
      toolEnum.pug,
      toolEnum.illustrator,
      toolEnum.scss,
    ]
  },
  {
    date: "2021/03/26",
    title: "React Portfolio",
    type: typeEnum.app,
    role: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.react,
      toolEnum.redux,
      toolEnum.three,
      toolEnum.firebase,
      toolEnum.scss,
      toolEnum.typescript,
      toolEnum.git,
    ],
    disabled: false,
    links: [
      // { url: linkWeb("2021-react"), text: "App" },
      { url: linkGithub("2021-react"), text: "Github" },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2021/03/22"),
      h.getNewID(client.miguelRivas, "2021/09/12"),
      h.getNewID(client.itla, "2011/07/06"),
    ],
  },
  {
    date: "2017/01/01",
    title: "FlatCSS",
    type: typeEnum.module,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.css,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("flat-css"), text: "App" },
      { url: linkGithub("flat-css"), text: "Github" },
    ],
  },
  {
    date: "2020/10/04",
    title: "Fake Audience",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    disabled: true,
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.kotlin,
      toolEnum.git,
    ],
    links: [
      { url: linkGithub("fake_audience"), text: "Github" }
    ],
  },
  {
    date: "2021/02/27",
    title: "3D Graph Colors",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.three,
    ],
    links: [
      { url: linkCodepen("dyOmXWO"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2020/05/09",
    title: "Animated SVG Header",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.tweenMax,
      toolEnum.html,
      toolEnum.scss,
    ],
    links: [
      { url: linkCodepen("zYvjwEM"), text: "Codepen Prototype" },
    ]
  },
  {
    date: "2020/03/23",
    title: "Xpinner",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.svg,
      toolEnum.scss,
    ],
    links: [
      { url: linkCodepen("VwLGgYv"), text: "Codepen Prototype" },
    ]
  },
  {
    date: "2018/06/27",
    title: "Color Wheel Creator",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.javascript,
      toolEnum.scss,
    ],
    links: [
      { url: linkCodepen("ERdMLO"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2018/09/11",
    title: "Movie projector",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.svg,
      toolEnum.scss,
    ],
    links: [
      { url: linkCodepen("rZdMYj"), text: "Codepen Prototype" },
    ]
  },
  {
    date: "2018/05/31",
    title: "Check Animation",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.svg,
      toolEnum.scss,
    ],
    links: [
      { url: linkCodepen("ZRGpbQ"), text: "Codepen Prototype" },
    ]
  },
  {
    date: "2018/03/28",
    title: "Bounce Animation",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.canvas,
    ],
    links: [
      { url: linkCodepen("GxyMMz"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2015/05/29",
    title: "Spinners",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
    ],
    links: [
      { url: linkCodepen("eNgRRe"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2012/11/06",
    title: "Drakkar",
    type: typeEnum.animation3D,
    role: [
      roleEnum.design,
    ],
    disabled: true,
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.blender,
    ],
    links: [
      { url: "https://sketchfab.com/3d-models/drakkar-d0f14c73155e460cb848a3db80e1cb07", text: "3D Model" },
    ],
  },
  {
    date: "2011/12/05",
    title: "Reloj",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/28", text: "Document" },
    ],
  },
  {
    date: "2011/11/15",
    title: "Pencil Sharpener",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/30", text: "Document" },
    ],
  },
  {
    date: "2011/11/18",
    title: "Batteries: depth of field",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/30", text: "Document" },
    ],
  },
  {
    date: "2011/07/25",
    title: "Audi",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/32", text: "Document" },
    ],
  },
  {
    date: "2011/07/31",
    title: "Mackbook Pro",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/34", text: "Document" },
    ],
  },
  {
    date: "2011/06/22",
    title: "Backpack",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/36", text: "Document" },
    ],
  },
  {
    date: "2011/07/06",
    title: "X-wing",
    type: typeEnum.animation3D,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.maya,
    ],
    links: [
      { url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/38", text: "Document" },
    ],
  },
  {
    date: "2014/06/16",
    title: "Destapa el Coro",
    type: typeEnum.app,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.presidente,
    disabled: true,
    tools: [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.css,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("presidente-destapa-coro"), text: "App" },
      { url: linkGithub("presidente-destapa-coro"), text: "Github" },
    ],
  },
  {
    date: "2015/03/30",
    title: "Pacman",
    disabled: true,
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation
    ],
    client: clientEnum.presidente,
    tools: [
      toolEnum.flash,
    ],
    links: [
      { url: "https://vimeo.com/175240177", text: "Video" },
    ],
  },
  {
    date: "2015/03/24",
    title: "BigPapi Selfie",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation
    ],
    client: clientEnum.pepsi,
    tools: [
      toolEnum.flash,
    ],
    disabled: true,
    links: [
      { url: "https://vimeo.com/175240184", text: "Video" },
    ],
  },
  {
    date: "2015/04/18",
    title: "Carnaval Presidente 2015",
    type: typeEnum.landingPage,
    role: [
      roleEnum.frontend
    ],
    disabled: true,
    client: clientEnum.presidente,
    tools: [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.scss,
      toolEnum.php,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("presidente-carnaval-2015/filter.html"), text: "Filter" },
      { url: linkWeb("presidente-carnaval-2015/home.html"), text: "Home" },
      { url: linkGithub("presidente-carnaval-2015"), text: "Github" },
    ],
  },
  {
    date: "2015/05/20",
    title: "Recarga Con RedRock",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation
    ],
    disabled: true,
    client: clientEnum.redRock,
    tools: [
      toolEnum.flash,
    ],
    links: [
      { url: "https://vimeo.com/175240186", text: "Video" },
    ],
  },
  {
    date: "2015/10/23",
    title: "Retrobrindis",
    type: typeEnum.app,
    disabled: true,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.presidente,
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.php,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("presidente-retro-brindis"), text: "App" },
      { url: linkGithub("presidente-retro-brindis"), text: "Github" },
    ],
  },
  {
    date: "2015/11/12",
    title: "Mineriza a tu Familia",
    type: typeEnum.app,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.apap,
    tools: [
      toolEnum.pug,
      toolEnum.jQuery,
      toolEnum.css,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("apap-mineriza-familia"), text: "App" },
      { url: linkGithub("apap-mineriza-familia"), text: "Github" },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2017/04/04"),
    ],
  },
  {
    date: "2017/04/04",
    title: "Promo",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.afterEffects,
      toolEnum.premiere,
    ],
    links: [
      { url: "https://vimeo.com/211801157", text: "Video" },
    ],
    disabled: true,
  },
  {
    date: "2015/12/16",
    title: "Verano Presidente 2015",
    type: typeEnum.prototype,
    disabled: true,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.presidente,
    tools: [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.css,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("presidente-verano-2015"), text: "Filter" },
      { url: linkWeb("presidente-loader"), text: "Loader" },
      { url: linkGithub("presidente-verano-2015"), text: "Github" },
    ],
  },
  {
    date: "2016/02/22",
    title: "Website",
    type: typeEnum.app,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.drLogic,
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.bootstrap,
      toolEnum.rails,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("drlogic/home.html"), text: "Home" },
      { url: linkWeb("drlogic/about-us.html"), text: "About Us" },
      { url: linkWeb("drlogic/contact-us.html"), text: "Contact Us" },
      { url: linkWeb("drlogic/portfolio.html"), text: "Portfolio" },
      { url: linkWeb("drlogic/404.html"), text: "404" },
      { url: linkGithub("drlogic"), text: "Github" },
    ],
    children: [
      h.getNewID(client.drLogic, "2016/03/08"),
      h.getNewID(client.miguelRivas, "2017/03/06"),
    ],
  },
  {
    date: "2017/03/06",
    title: "Promo",
    type: typeEnum.animation3D,
    role: [
      roleEnum.animation,
    ],
    client: clientEnum.miguelRivas,
    tools: [
      toolEnum.flash,
    ],
    links: [
      { url: "https://vimeo.com/207152756", text: "Video" },
    ],
    disabled: true,
  },
  {
    date: "2016/03/08",
    title: "Terms and Conditions",
    type: typeEnum.document,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.drLogic,
    tools: [
      toolEnum.indesign,
    ],
    disabled: true,
  },
  {
    date: "2016/06/16",
    title: "Server Prompt",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.pixelPerfectTree,
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.rails,
      toolEnum.git,
    ],
    disabled: true,
    links: [
      { url: linkWeb("pixel-server-prompt/404"), text: "404" },
      { url: linkWeb("pixel-server-prompt/500"), text: "500" },
      { url: linkGithub("pixel-server-prompt"), text: "Github" },
    ],
  },
  {
    date: "2016/06/30",
    title: "Animated Header",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.voxel,
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.photoshop,
      toolEnum.rails,
      toolEnum.git,
    ],
    disabled: true,
    links: [
      { url: linkWeb("voxel-animation"), text: "Animated Header" },
      { url: linkGithub("voxel-animation"), text: "Github" },
    ],
  },
  {
    date: "2015/05/27",
    title: "Orange Reel",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation,
    ],
    client: clientEnum.orange,
    tools: [
      toolEnum.premiere,
    ],
    links: [
      { url: "https://vimeo.com/212177083", text: "Video" },
    ],
    children: [
      h.getNewID(client.orange, "2015/03/22"),
      h.getNewID(client.orange, "2015/03/24"),
      h.getNewID(client.orange, "2015/03/31"),
      h.getNewID(client.orange, "2015/04/24"),
      h.getNewID(client.orange, "2015/05/22"),
    ],
  },
  {
    date: "2015/03/22",
    title: "Essentials",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation,
    ],
    client: clientEnum.orange,
    tools: [
      toolEnum.flash,
    ],
    disabled: true,
  },
  {
    date: "2015/03/24",
    title: "Selfie",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation,
    ],
    client: clientEnum.orange,
    tools: [
      toolEnum.flash,
    ],
    disabled: true,
  },
  {
    date: "2015/04/24",
    title: "Café",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation,
    ],
    client: clientEnum.orange,
    tools: [
      toolEnum.flash,
    ],
    disabled: true,
  },
  {
    date: "2015/05/22",
    title: "Día de las Madres",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation,
    ],
    client: clientEnum.orange,
    tools: [
      toolEnum.flash,
    ],
    disabled: true,
  },
  {
    date: "2015/03/31",
    title: "Snorkeling",
    type: typeEnum.motionGraphics,
    role: [
      roleEnum.animation,
    ],
    client: clientEnum.orange,
    tools: [
      toolEnum.flash,
    ],
    disabled: true,
  },
  {
    date: "2014/01/14",
    title: "Descubria Website",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    disabled: true,
    client: clientEnum.descubria,
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("descubria"), text: "Home" },
      { url: linkGithub("descubria"), text: "Github" },
    ],
  },
  {
    date: "2014/08/06",
    title: "Server Prompt",
    type: typeEnum.prototype,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.capitalDBG,
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    disabled: true,
    links: [
      { url: linkWeb("capital-dbg-server-prompt"), text: "Prototype" },
      { url: linkGithub("capital-dbg-server-prompt"), text: "Github" },
    ],
  },
  {
    date: "2015/10/28",
    title: "Test",
    type: typeEnum.landingPage,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    client: clientEnum.pixelPerfectTree,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    links: [
      { url: linkWeb("test-pixel-perfect-tree"), text: "Test" },
      { url: linkGithub("test-pixel-perfect-tree"), text: "Github" },
    ],
  },
  {
    client: clientEnum.presidente,
    title: "Destapa el Coro: User Flow",
    date: "2014/06/02",
    tools: [
      toolEnum.illustrator,
    ],
    type: typeEnum.userFlow,
    role: [
      roleEnum.design,
    ],
    disabled: true,
  },
  {
    date: "2020/05/05",
    title: "Popkern",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.enovational,
    tools: [
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.rails,
      toolEnum.slim,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.three,
      toolEnum.tweenMax,
    ],
    children: [
      h.getNewID(client.miguelRivas, "2020/03/23"),
      h.getNewID(client.miguelRivas, "2020/05/09"),
      h.getNewID(client.miguelRivas, "2020/06/17"),
      h.getNewID(client.miguelRivas, "2020/08/18"),
    ],
    disabled: true,
  },
  {
    date: "2017/09/20",
    title: "Lemon Deal",
    type: typeEnum.landingPage,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.plantTherapy,
    tools: [
      toolEnum.html,
      toolEnum.miva,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2017/12/01",
    title: "25 Days of Christmas",
    type: typeEnum.landingPage,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.plantTherapy,
    tools: [
      toolEnum.html,
      toolEnum.miva,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2015/08/03",
    title: "SIP",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.capitalDBG,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
    ],
    disabled: true,
  },
  {
    date: "2014/10/18",
    title: "Presidente Photo Assignmet",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.presidente,
    tools: [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.php,
      toolEnum.scss,
    ],
    disabled: true,
  },
  {
    date: "2014/11/05",
    title: "Pronosticos: Wireframe",
    type: typeEnum.wireFrame,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.presidente,
    tools: [
      toolEnum.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2016/01/29",
    title: "Shop.pr",
    type: typeEnum.document,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.pixelPerfectTree,
    tools: [
      toolEnum.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2017/08/04",
    title: "Chakras",
    disabled: true,
    type: typeEnum.wireFrame,
    role: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    client: clientEnum.plantTherapy,
    tools: [
      toolEnum.illustrator,
    ]
  },
  {
    date: "2016/02/18",
    title: "BPR Bank",
    type: typeEnum.app,
    role: [
      roleEnum.frontend
    ],
    client: clientEnum.bprBank,
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.bootstrap,
      toolEnum.rails,
      toolEnum.git,
    ],
    disabled: true,
  },
  {
    date: "2016/06/24",
    title: "Social Media Posts",
    type: typeEnum.socialMedia,
    disabled: true,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.voxel,
    tools: [
      toolEnum.photoshop,
      toolEnum.illustrator,
    ]
  },
  {
    date: "2019/01/01",
    title: "MSEC Financial Disclosures Portal",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.enovational,
    tools: [
      toolEnum.html,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    disabled: true,
    links: [
      { url: "https://efds.ethics.maryland.gov/", text: "Website" },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2018/05/31"),
    ],
  },
  {
    date: "2018/05/01",
    title: "MDA Vetboard Portal",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.enovational,
    tools: [
      toolEnum.html,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    disabled: true,
    links: [
      { url: "https://portal.mda.maryland.gov/", text: "Website" },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2018/05/31"),
    ],
  },
  {
    date: "2018/06/25",
    title: "Maryland Onestop",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    disabled: true,
    client: clientEnum.enovational,
    tools: [
      toolEnum.vue,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    children: [
      h.getNewID(client.enovational, "2020/05/05"),
    ],
  },
  {
    date: "2018/09/04",
    title: "Formability",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    disabled: true,
    client: clientEnum.enovational,
    tools: [
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.vuex,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.cucumber,
      toolEnum.bootstrap,
    ],
    children: [
      h.getNewID(client.miguelRivas, "2018/05/31"),
      h.getNewID(client.miguelRivas, "2018/06/27"),
      h.getNewID(client.miguelRivas, "2018/09/11"),
      h.getNewID(client.enovational, "2020/05/05"),
    ],
  },
  {
    date: "2021/06/21",
    title: "Connections Academy",
    type: typeEnum.app,
    role: [
      roleEnum.frontend,
    ],
    disabled: true,
    client: clientEnum.jellyfish,
    tools: [
      toolEnum.php,
      toolEnum.wordpress,
      toolEnum.html,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.grunt,
    ]
  },
  {
    date: "2015/05/13",
    title: "Summary",
    type: typeEnum.group,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.codepen,
    tools: [
      toolEnum.html,
      toolEnum.slim,
      toolEnum.haml,
      toolEnum.pug,
      toolEnum.css,
      toolEnum.scss,
      toolEnum.javascript,
      toolEnum.jQuery,
      toolEnum.vue,
      toolEnum.three,
      toolEnum.tweenMax,
    ],
    children: [
      h.getNewID(client.miguelRivas, "2015/05/14"),
      h.getNewID(client.miguelRivas, "2015/05/23"),
      h.getNewID(client.miguelRivas, "2015/05/25"),
      h.getNewID(client.miguelRivas, "2015/05/28"),
      h.getNewID(client.miguelRivas, "2017/02/20"),
      h.getNewID(client.miguelRivas, "2021/02/27"),
    ],
  },

  {
    date: "2009/09/01",
    title: "Summary",
    type: typeEnum.group,
    role: [
      roleEnum.design,
    ],
    client: clientEnum.itla,
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.php,

      toolEnum.flash,
      toolEnum.premiere,
      toolEnum.maya,
      toolEnum.indesign,
      toolEnum.inkscape,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    children: [
      h.getNewID(client.itla, "2010/07/07"),
      h.getNewID(client.itla, "2011/06/22"),
      h.getNewID(client.itla, "2011/02/22"),
      h.getNewID(client.itla, "2011/04/24"),
      h.getNewID(client.itla, "2011/04/25"),
      h.getNewID(client.itla, "2011/07/06"),
      h.getNewID(client.itla, "2011/07/25"),
      h.getNewID(client.itla, "2011/07/31"),
      h.getNewID(client.itla, "2011/08/03"),
      h.getNewID(client.itla, "2011/11/15"),
      h.getNewID(client.itla, "2011/11/18"),
      h.getNewID(client.itla, "2011/12/05"),
      h.getNewID(client.itla, "2012/04/16"),
      h.getNewID(client.itla, "2012/06/25"),
      h.getNewID(client.itla, "2012/07/24"),
      h.getNewID(client.itla, "2012/09/13"),
      h.getNewID(client.itla, "2012/10/12"),
      h.getNewID(client.itla, "2012/11/26"),
      h.getNewID(client.itla, "2013/03/21"),
    ],
  },

  {
    date: "2013/01/01",
    title: "Summary",
    type: typeEnum.group,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.socialNetwork,
    tools: [
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    children: [
      h.getNewID(client.socialNetwork, "2013/08/03"),
      h.getNewID(client.tiempoExtra, "2013/07/06"),
      h.getNewID(client.homeGallery, "2013/07/05"),
      h.getNewID(client.sdq, "2013/07/05"),
      h.getNewID(client.harinaBlanquita, "2013/06/27"),
      h.getNewID(client.highschool, "2013/06/18"),
    ],
  },
  {
    date: "2014/06/01",
    title: "Summary",
    type: typeEnum.group,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.presidente,
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.flash,
      toolEnum.grunt,
      toolEnum.php,
    ],
    children: [
      h.getNewID(client.presidente, "2014/06/02"),
      h.getNewID(client.presidente, "2014/06/16"),
      h.getNewID(client.presidente, "2014/10/18"),
      h.getNewID(client.presidente, "2014/11/05"),
      h.getNewID(client.presidente, "2015/03/30"),
      h.getNewID(client.presidente, "2015/04/18"),
      h.getNewID(client.presidente, "2015/10/23"),
      h.getNewID(client.presidente, "2015/12/16"),
    ],
  },
  {
    date: "2014/05/01",
    title: "Summary",
    type: typeEnum.group,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.capitalDBG,
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.grunt,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.flash,
    ],
    children: [
      h.getNewID(client.presidente, "2014/06/02"),
      h.getNewID(client.presidente, "2014/06/16"),
      h.getNewID(client.presidente, "2015/04/18"),
      h.getNewID(client.capitalDBG, "2014/08/06"),
      h.getNewID(client.presidente, "2014/10/18"),
      h.getNewID(client.presidente, "2014/11/05"),
      h.getNewID(client.pepsi, "2015/03/24"),
      h.getNewID(client.presidente, "2015/03/30"),
      h.getNewID(client.redRock, "2015/05/20"),
      h.getNewID(client.orange, "2015/05/27"),
      h.getNewID(client.capitalDBG, "2015/08/03"),
      h.getNewID(client.presidente, "2015/10/23"),
      h.getNewID(client.apap, "2015/11/12"),
      h.getNewID(client.presidente, "2015/12/16"),
    ],
  },
  {
    date: "2016/01/01",
    title: "Summary",
    type: typeEnum.group,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.pixelPerfectTree,
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.react,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.rails,
      toolEnum.bootstrap,
      toolEnum.git,
    ],
    children: [
      h.getNewID(client.pixelPerfectTree, "2015/10/28"),
      h.getNewID(client.pixelPerfectTree, "2016/01/29"),
      h.getNewID(client.bprBank, "2016/02/18"),
      h.getNewID(client.pixelPerfectTree, "2016/06/16"),
      h.getNewID(client.voxel, "2016/06/24"),
      h.getNewID(client.voxel, "2016/06/30"),
      h.getNewID(client.drLogic, "2016/02/22"),
    ],
  },
  {
    date: "2013/07/15",
    title: "Summary",
    type: typeEnum.group,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.avante,
    tools: [
      toolEnum.php,
      toolEnum.wordpress,
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    children: [
      h.getNewID(client.descubria, "2013/12/03"),
      h.getNewID(client.delJardin, "2013/12/06"),
      h.getNewID(client.descubria, "2014/01/14"),
    ],
  },
  {
    date: "2017/07/01",
    title: "Summary",
    type: typeEnum.group,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.plantTherapy,
    tools: [
      toolEnum.php,
      toolEnum.miva,
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    children: [
      h.getNewID(client.plantTherapy, "2017/08/04"),
      h.getNewID(client.plantTherapy, "2017/09/20"),
      h.getNewID(client.plantTherapy, "2017/12/01"),

    ],
  },
  {
    date: "2021/03/29",
    title: "Summary",
    type: typeEnum.group,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.jellyfish,
    tools: [
      toolEnum.php,
      toolEnum.wordpress,
      toolEnum.html,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.grunt,
      toolEnum.javascript,
      toolEnum.jQuery,
    ],
    children: [
      h.getNewID(client.jellyfish, "2021/06/21"),
    ],
  },
  {
    date: "2018/04/01",
    title: "Summary",
    type: typeEnum.group,
    role: [
      roleEnum.frontend,
    ],
    client: clientEnum.enovational,
    tools: [
      toolEnum.html,
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.vuex,
      toolEnum.scss,
      toolEnum.slim,
      toolEnum.git,
      toolEnum.rails,
      toolEnum.bootstrap,
      toolEnum.jQuery,
      toolEnum.cucumber,
      toolEnum.three,
      toolEnum.svg,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.tweenMax,
    ],
    children: [
      h.getNewID(client.enovational, "2018/05/01"),
      h.getNewID(client.enovational, "2018/06/25"),
      h.getNewID(client.enovational, "2018/09/04"),
      h.getNewID(client.enovational, "2019/01/01"),
    ],
  },
];

const all = projects.sort((a, b) => {
  return h.dateToNumber(b.date) - h.dateToNumber(a.date);
}).map(item => {

  let links = [];
  if (item["links"]?.length > 0) {
    links = item["links"].map(
      link => {
        const params = link["params"] ? link["params"] : [];
        return {
          "url": link["url"],
          "text": link["text"],
          "params": params,
        }
      }
    );
  }

  const roles = item["role"].sort();
  const tools = item["tools"].sort();
  const disabled = item.disabled ? true : false;
  const children = item.children || [];

  return {
    "title": item.title,
    "client": item.client,
    "date": item.date,
    "type": item.type || 0,
    "disabled": disabled,
    "links": links,
    "roles": roles,
    "tools": tools,
    "children": children,
  }
});

export { users, all };