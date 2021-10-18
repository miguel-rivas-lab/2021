<template>
  <scroll-area color="royal-purple">
    <row class="row-block" tag="fieldset" v-if="!selection.logged">
      <column size="100%">
        <btn :to="{ name: 'login' }" color="gold-tips" text="Login" />
      </column>
    </row>

    <row class="row-block" tag="fieldset" v-else>
      <column size="100%">
        <legend>Firebase</legend>

        <row>
          <column size="100%">
            <btn
              @click="deployProjects()"
              color="gold-tips"
              text="Deploy Projects"
            />
          </column>
        </row>
      </column>
    </row>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import { firebaseApp } from "../modules/firebase";
import "firebase/firestore";
import { all as ProjectsDB } from "../db/projects";
import h from "mr-kernel/modules/helpers";
import { client, clientEnum } from "mr-kernel/enums/clients";

const db = firebaseApp.firestore();

export default Vue.extend({
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getLoginSelection;
  },
  methods: {
    openLoginModal() {
      this.$store.commit("setValue", {
        name: "modal",
        value: {
          visible: true,
        },
      });
    },
    deployProjects() {
      ProjectsDB.forEach((item) => {
        const id = h.getNewID(client[clientEnum[item.clients[0]]], item.date);
        db.collection("projects").doc(id).set(item);
      });
    },
  },
});
</script>