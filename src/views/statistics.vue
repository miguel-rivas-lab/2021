<template>
  <row class="nano-app">
    <panel-navigation />

    <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
      <scroll-area color="royal-purple" />
    </column>

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
      <scroll-area color="royal-purple">
        <div class="gallery">
          <div class="container">
            <article>
              <h1>Projects Per Month</h1>
              <br>
              <line-chart :chart-data="dates" />
            </article>

            <article>
              <h1>Project's Skills</h1>
              <br>
              <bar-chart :chart-data="tools" />
            </article>
          </div>
        </div>
      </scroll-area>
    </column>
  </row>
</template>

<script lang="ts">
import Vue from "vue";
import PanelNavigation from "../components/panel-navigation.vue";
import { projects, prototypes } from "../db/projects.js";
import LineChart from "../components/line-chart.vue";
import BarChart from "../components/bar-chart.vue";

export default Vue.extend({
  components: {
    PanelNavigation,
    LineChart,
    BarChart,
  },
  data: () => ({
    panel: false,
  }),
  computed: {
    projectsDB() {
      return projects.concat(prototypes);
    },
    tools() {
      let tools = {};
      let result = [];

      this.projectsDB.forEach((project) => {
        if (typeof project.tools !== "undefined") {
          project.tools.forEach((tool) => {
            if (typeof tools[tool] === "undefined") {
              tools[tool] = 1;
            } else {
              tools[tool]++;
            }
          });
        }
      });

      let keys = Object.keys(tools);
      let values = Object.values(tools);

      keys.forEach((key, index) => {
        let newItem = new Object();
        newItem["skill"] = key;
        newItem["total"] = values[index];
        result.push(newItem);
      });

      return result;
    },
    dates() {
      let dates = {};
      let result = [];

      this.projectsDB.forEach((project) => {
        if (typeof project.date !== "undefined") {
          let date = project.date.split("/");
          let year = date[0];
          let month = date[1];
          let key = `${year}${month}`;

          if (typeof dates[key] === "undefined") {
            dates[key] = 1;
          } else {
            dates[key]++;
          }
        }
      });

      let keys = Object.keys(dates);
      let values = Object.values(dates);

      keys.forEach((key, index) => {
        let newItem = new Object();
        newItem["date"] = key;
        newItem["total"] = values[index];
        result.push(newItem);
      });

      return result;
    },
  },
});
</script>