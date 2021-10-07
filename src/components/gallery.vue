<template>
  <div class="gallery" v-if="database">
    <div class="container">
      <template v-for="(project, projectIndex) in database">
        <article v-bind:key="projectIndex" class="nano-box">
          <row :spacing="100" breakpoint="lg">
            <column size="60%">
              <img
                loading="lazy"
                width="1050"
                height="551"
                :src="project.image"
                :alt="`${project.client} ${project.date}`"
              />
            </column>
            <column size="40%">
              <scroll-area color="royal-purple">
                <h1 v-html="project.client" />
                <ul class="summary">
                  <li class="table" role="table">
                    <div role="rowgroup" class="table-body">
                      <toggle-row>
                        <template v-slot:header>
                          <column size="100%-35" v-html="project.title" />
                        </template>
                        <template v-slot:more>
                          <t-column size="100%">
                            <h3>
                              <time v-html="project.date" />
                            </h3>
                            <ul class="skills">
                              <template
                                v-for="(tool, toolIndex) in project.tools"
                              >
                                <li v-bind:key="`tool-${toolIndex}`">
                                  {{ tool }}
                                </li>
                              </template>
                            </ul>
                            <ul class="navigation">
                              <template
                                v-for="(link, linkIndex) in project.links"
                              >
                                <li v-bind:key="linkIndex">
                                  <btn
                                    tag="a"
                                    size="md"
                                    :color="
                                      link.text == 'Github'
                                        ? 'charcoal'
                                        : 'royal-purple'
                                    "
                                    target="_blank"
                                    :href="link.url"
                                    :text="link.text"
                                  />
                                </li>
                              </template>
                            </ul>
                          </t-column>
                        </template>
                      </toggle-row>
                    </div>

                    <ul class="summary" v-if="project.children.length">
                      <summary-row
                        v-for="(project2, projectIndex2) in project.children"
                        v-bind:key="`projectIndex2-${projectIndex2}`"
                        :project="project2"
                      >
                        <ul
                          class="summary"
                          v-if="projects[project2].children.length"
                        >
                          <summary-row
                            v-for="(project3, projectIndex3) in projects[
                              project2
                            ].children"
                            v-bind:key="`projectIndex3-${projectIndex3}`"
                            :project="project3"
                          >
                            <ul
                              class="summary"
                              v-if="projects[project3].children.length"
                            >
                              <summary-row
                                v-for="(project4, projectIndex4) in projects[
                                  project3
                                ].children"
                                v-bind:key="`projectIndex4-${projectIndex4}`"
                                :project="project4"
                              >
                              </summary-row>
                            </ul>
                          </summary-row>
                        </ul>
                      </summary-row>
                    </ul>
                  </li>
                </ul>
              </scroll-area>
            </column>
          </row>
        </article>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import toggleRow from "./toggle-row.vue";
import summaryRow from "./summary.vue";

export default Vue.extend({
  components: { toggleRow, summaryRow },
  props: {
    db: {
      type: Array,
    },
  },
  computed: {
    projects() {
      return this.$root.projects;
    },
    database() {
      return this.db;
    },
  },
});
</script>