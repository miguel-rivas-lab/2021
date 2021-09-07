<template>
  <div class="gallery" v-if="dataBase">
    <div class="container">
      <template v-for="(project, projectIndex) in dataBase">
        <article v-bind:key="projectIndex">
          <row :spacing="100" breakpoint="lg">
            <column size="100%-300">
              <img
                :src="getImage(project.image)"
                :alt="`${project.client} ${project.date}`"
              />
            </column>
            <column size="300">
              <h1 v-html="project.client" />
              <h2 v-html="project.title" />
              <h3>
                <time v-html="project.date" />
              </h3>
              <ul class="skills">
                <template v-for="(tool, toolIndex) in project.tools">
                  <li v-bind:key="toolIndex">{{ tool }}</li>
                </template>
              </ul>
              <hr />
              <ul class="navigation">
                <template v-for="(link, linkIndex) in project.links">
                  <li v-bind:key="linkIndex">
                    <btn
                      tag="a"
                      size="md"
                      :color="
                        link.text == 'Github' ? 'charcoal' : 'royal-purple'
                      "
                      target="_blank"
                      :href="link.url"
                      :value="link.text"
                    />
                  </li>
                </template>
              </ul>
            </column>
          </row>
        </article>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { images as storage } from "../modules/firebase-storage";

export default Vue.extend({
  components: {},
  props: {
    db: undefined,
  },
  data: () => ({
    imagesStorage: [],
  }),
  computed: {
    dataBase() {
      return this.db;
    },
  },
  methods: {
    getID(client: string, date: string): string {
      client = client.replace(/\s/g, "").toLowerCase();
      date = date.replace(/\//g, "");
      return `${client}_${date}`;
    },
    getImage(url: string): string {
      return url !== "" ? url : require(`@/assets/miguelrivas.jpg`);
    },
  },
});
</script>