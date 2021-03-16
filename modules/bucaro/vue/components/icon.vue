<template>
  <component
    :is="tag"
    class="icon"
    :class="computedClasses"
  />
</template>

<script lang="ts">
  import Vue from "vue";
  import StringManager from '../../ts/string-manager.ts';

  export default Vue.extend({
    props: {
      color: {
        type: String,
        default: ""
      },
      tag: {
        type: String,
        default: 'span'
      },
      glyph: {
        type: String
      },
      direction: {
        type: String
      },
    },
    computed: {
    itemColor() {
      return StringManager.camelToDash(this.color);
    },
    computedClasses(){
      return [
        this.itemColor,
        this.glyph,
        this.direction,
        {
          'colorized': this.color !== ''
        }
      ]
    },
    }
  });
</script>