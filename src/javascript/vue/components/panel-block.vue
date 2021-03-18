<template>
  <row tag="fieldset">
    <column size="100%">
      <legend v-html="title" />
      <slot />
    </column>
  </row>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    props: {
      title: {
        type: String,
        default: "",
      }
    }
  });
</script>