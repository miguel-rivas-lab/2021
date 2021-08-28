<template>
  <t-row breakpoint="md" class="component-row">
    <t-column size="40%">{{ rowData.title }}</t-column>
    <t-column size="20%">{{ rowData.type }}</t-column>
    <t-column size="20%">{{ rowData.date }}</t-column>
    <t-column size="20%-35">{{ rowData.client }}</t-column>
    <t-suffix size="35">
      <btn
        :glyph="showData ? 'chevron-up' : 'chevron-down'"
        :active="showData"
        @click="toggleDataView()"
        color="denim"
        tag="a"
      />
    </t-suffix>
    <template v-if="showData">
      <t-column size="200">
        <template v-if="rowData.links && rowData.links[0]">
          <btn
            tag="a"
            size="md"
            color="royal-purple"
            target="_blank"
            :href="rowData.links[0].url"
            value="See Preview"
          />
        </template>
        <template v-else>
          <btn tag="span" size="md" color="persian-red" value="No Link" />
        </template>
      </t-column>
      <t-column size="100%-200">
        <div class="pill-container">
          <template v-for="(tool, toolIndex) in rowData.tools">
            <span class="pill" v-bind:key="toolIndex" v-html="tool" />
          </template>
        </div>
      </t-column>
    </template>
  </t-row>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    rowData: {
      type: Object,
    },
  },
  data: () => ({
    showData: false,
  }),
  methods: {
    toggleDataView() {
      this.showData = !this.showData;
    },
  },
});
</script>