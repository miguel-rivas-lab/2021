import { client } from "mr-kernel/enums/clients";
import { sortByDate } from "../modules/format-db";
import { tool } from "mr-kernel/enums/tools";

const locations = [
  {
    title: client.itla,
    description: "Associates of Arts, Multimedia",
    projectId: '20090901_itla',
    date: '2009/09/01',
    list: [
      `Digital Illustration`,
      `Visual Communication`,
      `Bitmap Graphics`,
      `Vector Graphics`,
      `Desktop Publishing`,
      `Digital Video`,
      `Website Creation`,
      `Flash Animation with Action Script`,
      `3D Graphics & Animation`,
      `Digital Audio`,
      `Branding`,
    ],
    position: {
      lat: 18.45316651707145,
      lng: -69.66131456337963,
    },
  },
  {
    title: client.studioSeveral,
    description: "Graphic Designer",
    projectId: '20130101_socialnetwork',
    date: '2013/01/01',
    list: [
      `Retouch pictures with ${tool.photoshop}`,
      `Design yearbooks with ${tool.indesign} and ${tool.photoshop}`,
    ],
    position: {
      lat: 18.4659438,
      lng: -69.915391,
    },
    zoom: 21,
  },
  {
    title: client.socialNetwork,
    description: "Web Designer",
    projectId: '20130101_socialnetwork',
    date: '2013/05/01',
    list: [
      `Design applications UI using ${tool.illustrator}.`,
      `Design social media assets using ${tool.illustrator}, ${tool.photoshop} and ${tool.indesign}.`,
    ],
    position: {
      lat: 18.466018304331566,
      lng: -69.91533470462102,
    },
    zoom: 21,
  },
  {
    title: client.avante,
    description: "Web Designer",
    projectId: '20130715_avantemarketing',
    date: '2013/07/15',
    list: [
      `Design and build applications using ${tool.html}, ${tool.css}, ${tool.jQuery} on a ${tool.php} environment.`,
      "Optimize applications for maximum speed.",
      `Design social media assets using ${tool.illustrator}, ${tool.photoshop} and ${tool.indesign}.`,
    ],
    position: {
      lat: 18.4703103,
      lng: -69.940124,
    },
  },
  {
    title: client.capitalDBG,
    description: "Frontend Developer",
    projectId: '20140501_capitaldbg',
    date: '2014/05/01',
    list: [
      `Build applications using ${tool.jade}, ${tool.scss}, ${tool.jQuery} on a ${tool.php} environment with ${tool.grunt}.`,
      "Optimize applications for maximum speed.",
      `Create wireframes and users flow with ${tool.illustrator}.`,
      "Collaborate with Backend Developers, Designers and Project Managers to improve usability.",
      `Animate ad banners for websites using ${tool.flash}.`,
      `Create motion graphics for social media using ${tool.flash}.`,
    ],
    position: {
      lat: 18.4648539,
      lng: -69.9582155,
    },
  },
  {
    title: client.pixelPerfectTree,
    description: "Frontend Developer",
    projectId: '20160101_pixelperfecttree',
    date: '2016/01/01',
    list: [
      `Design and develop applications using ${tool.haml}, ${tool.scss}, ${tool.bootstrap}, ${tool.jQuery}/${tool.react} on a ${tool.rails} environment with ${tool.webpack}.`,
      "Maintain and optimize applications.",
      "Collaborate with Full Stack Developers and Project Managers to improve usability.",
      `Work with ${tool.git} for control version on projects.`,
      "Work with Agile.",
    ],
    position: {
      lat: 18.4460353,
      lng: -69.959968,
    },
  },
  {
    title: client.plantTherapy,
    description: "Graphic Web Designer",
    projectId: '20170701_planttherapy',
    date: '2017/07/01',
    list: [
      `Build prototypes and landing pages with ${tool.pug}, ${tool.scss}, ${tool.jQuery} and ${tool.miva}.`,
      "Maintain and optimize the website.",
      `Create wireframes and users flow with ${tool.illustrator}.`,
    ],
    position: {
      lat: 42.5395726,
      lng: -114.4798225,
    },
  },
  {
    title: client.enovational,
    description: "Frontend Developer",
    projectId: '20180401_enovational',
    date: '2018/04/01',
    list: [
      `Build government apps using ${tool.html}/${tool.slim}, ${tool.scss}, ${tool.bootstrap}, ${tool.jQuery}/${tool.vue} on a ${tool.rails} environment with ${tool.webpack}.`,
      "Optimize applications for maximum speed compressing images and replacing repeated code with partials/headers/mixins/components.",
      "Make sure applications are following conventions and extending them according to the complexity of the project and frameworks being used.",
      "Collaborate with UI/UX Designers, Full Stack Developers, Project Managers, QA Testers and Business Analysts to improve usability.",
      `Work with ${tool.git} for control version on projects.`,
      "Work with Agile.",
    ],
    position: {
      lat: 38.902872,
      lng: -77.0299321,
    },
  },
  {
    title: client.jellyfish,
    description: "Frontend Developer",
    projectId: '20210329_jellyfish',
    date: '2021/03/29',
    list: [
      `Build apps using ${tool.html}, ${tool.scss} and ${tool.jQuery} on a ${tool.php} environment with ${tool.grunt}.`,
      "Optimize applications for maximum speed.",
      `Work with ${tool.git} for control version on projects.`,
    ],
    position: {
      lat: 38.9550186,
      lng: -77.3670827,
    },
  },
].sort(sortByDate);

export {locations};
