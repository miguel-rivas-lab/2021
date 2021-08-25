<template>
  <row breakpoint="md" class="component-row" table-element>
    <column size="40%" table-element>{{ rowData.title }}</column>
    <column size="20%" table-element>{{ rowData.type }}</column>
    <column size="20%" table-element>{{ rowData.date }}</column>
    <column size="20%-35" table-element>{{ rowData.client }}</column>
    <suffix size="35" table-element>
      <btn
        :glyph="showData ? 'chevron-up' : 'chevron-down'"
        :active="showData"
        @click="toggleDataView()"
        color="denim"
        tag="a"
      />
    </suffix>
    <template v-if="showData">
      <column size="200" v-if="rowData.links && rowData.links.web">
        <btn
          tag="a"
          size="md"
          color="royal-purple"
          target="_blank"
          :href="rowData.links.web[0].url"
          value="See Preview"
        />
      </column>
      <column :size="rowData.links && rowData.links.web ? '100%-200' : '100%'" table-element>
        <div class="pill-container">
          <template v-for="(tool, toolIndex) in rowData.tools">
            <span class="pill" v-bind:key="toolIndex" v-html="tool" />
          </template>
        </div>
      </column>
    </template>
  </row>
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