<template>
  <scroll-area color="royal-purple">
    <row class="row-block" tag="fieldset">
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
import { all as ProjectsDB } from "../modules/db";
import h from "mr-kernel/modules/helpers";
import { client, clientEnum } from "mr-kernel/enums/clients";

const db = firebaseApp.firestore();

export default Vue.extend({
  methods: {
    deployProjects() {
      ProjectsDB.forEach((item) => {
        const id = h.getNewID(client[clientEnum[item.clients[0]]], item.date);
        db.collection("projects").doc(id).set(item);
      });
    },
  },
});
</script>