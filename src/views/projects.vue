<template>
  <row class="nano-app nano-dark section-project">
    <panel-navigation />

    <column size="300" class="panel" :class="{'hide-panel': !panel}">
      <scroll-area color="royal-purple">
      </scroll-area>
    </column>

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea gallery">
      <scroll-area color="royal-purple">
        <div class="container">
          <template v-for="project, projectIndex in projectsDB">
            <article v-bind:key="projectIndex">
              <row :spacing="100">
                <column size="100%-300">
                  <img
                    :src="getImage(project.client, project.date)"
                    alt=""
                  >
                </column>
                <column size="300">
                  <h3 v-html="project.client" />
                  <h4 v-html="project.title" />
                  <h5>
                    <time v-html="project.date" />
                  </h5>
                  <ul class="skills">
                    <template v-for="(tool, toolIndex) in project.tools">
                      <li v-bind:key="toolIndex">{{tool}}</li>
                    </template>
                  </ul>
                  <hr>
                  <ul class="navigation">
                    <template v-for="(link, linkIndex) in project.links.web">
                      <li v-bind:key="linkIndex">
                        <btn
                          tag="a"
                          size="md"
                          color="royal-purple"
                          target="_blank"
                          :href="link.url"
                          :value="link.text"
                        />
                      </li>
                    </template>
                  </ul>
                  <ul class="links">
                    <li v-if="project.links.github">
                      <btn
                        tag="a"
                        size="md"
                        color="charcoal"
                        :href="project.links.github"
                        target="_blank"
                        glyph="github"
                      />
                    </li>
                  </ul>
                </column>
              </row>
            </article>
          </template>
        </div>
      </scroll-area>
    </column>
  </row>
</template>

<script lang="ts">
  import Vue from "vue";
  import PanelNavigation from "../components/panel-navigation.vue";
  import {
    projects,
  } from '../db/projects.js';

  export default Vue.extend({
    components: {
      PanelNavigation,
    },
    data: () => ({
      panel: false,
    }),
    computed: {
      projectsDB():Array<any> {
        return projects;
      }
    },
    methods: {
      getImage(client:string, date:string):any {
        client = client.replace(/\s/g, '').toLowerCase();
        date = date.replace(/\//g, '');
        return require(`@/assets/${client}_${date}.png`);
      }
    },
  });
</script>