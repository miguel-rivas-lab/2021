<template>
  <scroll-area color="royal-purple">
    <div class="gallery">
      <div class="container">
        <article class="nano-box">
          <h1>Yearly Average</h1>
          <br />
          <line-chart :chart-data="dates" />
        </article>

        <article class="nano-box">
          <h1>Skills</h1>
          <br />
          <bar-chart :chart-data="tools" />
        </article>

        <article class="nano-box">
          <h1>Projects</h1>
          <hr />
          <div class="table">
            <div class="table-head">
              <row breakpoint="md" table-element>
                <column size="40%" table-element>Name</column>
                <column size="20%" table-element>Type</column>
                <column size="20%" table-element>Date</column>
                <column size="20%" table-element>Client</column>
              </row>
            </div>
            <div class="table-body">
              <template v-for="(project, projectIndex) in projectsDB">
                <row-more v-bind:key="projectIndex" :row-data="project" />
              </template>
            </div>
          </div>
        </article>
      </div>
    </div>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import LineChart from "../components/line-chart.vue";
import BarChart from "../components/bar-chart.vue";
import RowMore from "../components/row-more.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {
    LineChart,
    BarChart,
    RowMore,
  },
  data: () => ({
    panel: false,
  }),
  computed: {
    ...mapGetters({
      projectsDB: "getProjects",
    }),
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
          let key = project.date.split("/")[0];

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
  created() {
    this.$store.commit("setValue", { name: "panel", value: false });
  },
});
</script>