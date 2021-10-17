<template>
  <scroll-area color="royal-purple">
    <form @submit.prevent="pressed" v-if="!logged">
      <row class="row-block" tag="fieldset">
        <column size="100%">
          <legend>Firebase Login</legend>

          <row>
            <column size="100%">
              <!-- <label for="email">Email</label> -->
              <input
                class="input-label fsz"
                id="email"
                name="email"
                autocomplete="off"
                type="email"
                placeholder="Email"
                v-model="email"
              />
            </column>
          </row>

          <row>
            <column size="100%">
              <!-- <label for="password">Password</label> -->
              <input
                class="input-label fsz"
                id="password"
                autocomplete="off"
                name="password"
                placeholder="Password"
                type="password"
                v-model="password"
              />
            </column>
          </row>

          <row>
            <column size="100%">
              <btn type="submit" color="gold-tips" text="Login" />
            </column>
          </row>
        </column>
      </row>
    </form>

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

        <row>
          <column size="100%">
            <btn
              @click="logoutFirebase()"
              color="persian-red"
              text="Logout"
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
import "firebase/auth";

const db = firebaseApp.firestore();

export default Vue.extend({
  data: () => ({
    email: "",
    password: "",
    logged: false,
  }),
  methods: {
    async pressed() {
      try {
        const val = await firebaseApp
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.logged = true;
      } catch (err) {
        console.error(err);
      }
    },
    logoutFirebase(){
      firebaseApp.auth().signOut();
      this.logged = false;
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