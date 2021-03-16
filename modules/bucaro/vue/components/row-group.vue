<template>
  <component :is="tag" role="rowgroup">
    <slot/>
  </component>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    props: {
      tag: {
        type: String,
        default: 'div'
      },
    },
  });
</script>