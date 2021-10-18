<template>
  <scroll-area color="royal-purple">
    <container size="400">
      <h1>Login</h1>

      <form @submit.prevent="pressed">
        <column size="100%">
          <row>
            <column size="100%">
              <input
                class="input-label fsz"
                id="email"
                name="email"
                autocomplete="off"
                type="email"
                placeholder="Email"
                v-model="selection.email"
              />
            </column>
          </row>

          <row>
            <column size="100%">
              <input
                class="input-label fsz"
                id="password"
                autocomplete="off"
                name="password"
                placeholder="Password"
                type="password"
                v-model="selection.password"
              />
            </column>
          </row>

          <row>
            <column size="100%">
              <btn class="fsz" type="submit" color="gold-tips" text="Login" />
            </column>
          </row>
        </column>
      </form>
    </container>
  </scroll-area>
</template>

<script lang="ts">
import Vue from "vue";
import { firebaseApp } from "../modules/firebase";
import "firebase/auth";
import { mapGetters } from "vuex";

export default Vue.extend({
  computed: {
    ...mapGetters({
      selection: "getLoginSelection",
    }),
  },
  created() {
    this.$store.commit("setValue", {
      name: "panel",
      value: false,
    });
  },
  methods: {
    async pressed() {
      try {
        await firebaseApp
          .auth()
          .signInWithEmailAndPassword(
            this.selection.email,
            this.selection.password
          );
        this.selection.logged = true;
        this.$router.push("home");
        this.$store.commit("setValue", {
          name: "alert",
          value: {
            message: "You are now logged in.",
            status: "success",
          },
        });
      } catch (err) {
        this.$store.commit("setValue", {
          name: "alert",
          value: {
            message: err.message,
            status: "error",
          },
        });
      }
    },
  },
});
</script>