<template>
  <section class="modal login" v-if="modal.visible">
    <div class="container sz400">
      <button class="close-btn" @click="closeModal()">
        <m-icon glyph="close" />
      </button>

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
            <column size="50%">
              <btn
                class="fsz"
                type="reset"
                color="silver"
                text="Return"
                @click="closeModal()"
              />
            </column>
            <column size="50%">
              <btn class="fsz" type="submit" color="gold-tips" text="Login" />
            </column>
          </row>
        </column>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { firebaseApp } from "../modules/firebase";
import "firebase/auth";

import { mapGetters } from "vuex";

export default Vue.extend({
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getLoginSelection;
  },
  computed: {
    ...mapGetters({
      modal: "getModal",
    }),
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
        this.closeModal();
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
    closeModal() {
      this.$store.commit("setValue", {
        name: "modal",
        value: {
          visible: false,
        },
      });
    },
  },
});
</script>