<template>
  <div :class="classes"
    class="word-wrap"
    :style="{'width': tableBodyWidth}"
    role="table"
    aria-describedby="table"
  >
    <p class="sr-only">A table that shows the data as a list or a grid</p>

    <template v-if="hasHeader">
      <row-group class="table-header">
        <t-row is-heading>
          <slot name="table-header"/>
        </t-row>
      </row-group>
    </template>

    <row-group class="table-body">
      <template v-if="hasData">
        <slot name="table-body"/>
      </template>

      <template v-else>
        <t-row class="prompt">
          <column>
            <strong>{{fetchingMessage}}</strong>
          </column>
        </t-row>
      </template>
    </row-group>

    <template v-if="hasFooter">
      <row-group class="table-footer">
        <slot name="table-footer"/>
      </row-group>
    </template>

  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  /* ------------------------- Readme
  Additional classes that you can use:
  'clear-table': erase the grey area around the table
  ---------------------------- */
  export default Vue.extend({
    props: {
      listLayout: {
        type: String,
        default: "rows"
      },
      hasData: {
        type: Boolean,
        default: false
      },
      fetchingMessage: {
        type: String,
        default: "No data has been found."
      },
      hasHeader: {
        type: Boolean,
        default: true
      },
      hasFooter: {
        type: Boolean,
        default: false
      },
      allowHorizontal: {
        type: Boolean,
        default: false
      },
      tableBodySize: {
        type: Number,
        default: 0
      },
    },
    computed: {
      classes(): any {
        return [
          this.allowHorizontal ? '' : this.listLayout,
          this.allowHorizontal ? 'table-horizontal' : 'table-grid',
          {
            'no-header': !this.hasHeader
          }
        ];
      },
      tableBodyWidth(): string {
        let hasTableBodySize = parseInt(this.tableBodySize, 0) > 199;
        return hasTableBodySize ? `${this.tableBodySize}px` : '100%';
      }
    }
  });
</script>