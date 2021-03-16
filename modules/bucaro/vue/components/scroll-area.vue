<template>
  <div
    @scroll.passive="$emit('scroll', $event)"
    class="scroll-area"
    :class="computedClasses">
    <slot/>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import StringManager from '../../ts/string-manager.ts';

  export default Vue.extend({
    props: {
      color: {
        type: String,
        default: "grey"
      },
      allowHorizontal: {
        type: Boolean,
        default: false
      },
    },
    computed: {
      itemColor() {
        return StringManager.camelToDash(this.color);
      },
      computedClasses() {
        return [
          this.itemColor,
          {
            'horizontal': this.allowHorizontal,
          }
        ];
      }
    },
  });
</script>