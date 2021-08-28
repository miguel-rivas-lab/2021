<template>
  <row class="nano-app">
    <panel-navigation />

    <column size="300" class="panel" :class="{ 'hide-panel': !panel }">
      <scroll-area color="royal-purple" />
    </column>

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
      <div class="out-card">
        <div class="card">
          <div v-if="user.lastName" class="content">
            <h1 v-html="`${user.middleName} ${user.lastName}`" />
            <h2 v-html="user.title" />
          </div>
          <div class="bk" />
        </div>
        <div class="out-bk" />
      </div>
    </column>
  </row>
</template>

<script lang="ts">
import Vue from "vue";
import PanelNavigation from "../components/panel-navigation.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: {
    PanelNavigation,
  },
  data: () => ({
    panel: false,

  }),
  computed: {
    ...mapGetters({
      user: "getUser",
    }),
  },
});
</script>