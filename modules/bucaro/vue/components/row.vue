<template>
  <component :is="tag" :class="classes" :role="role">
    <slot/>
  </component>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    /*
      tag: ['div', 'li', 'tr' ...]
      type: ['Bootstrap', 'Custom', 'Table']
    */
    props: {
      tag: {
        type: String,
        default: 'div',
      },
      isHeading: {
        type: Boolean,
        default: false,
      },
      multiInput: {
        type: Boolean,
        default: false,
      },
      componentRow: {
        type: Boolean,
        default: false,
      },
      size: {
        default: ''
      },
      additionalClass: {
        type: String,
        default: ''
      },
      inline: {
        type: Boolean,
        default: false,
      },
      compress: {
        type: Boolean,
        default: false,
      },
      squareTag: {
        type: Boolean,
        default: false,
      },
      tableElement: {
        type: Boolean,
        default: false,
      },
    },
    data: function(){
      return {
        minSize: 25,
        maxSize: 800,
        increment: 5,
      }
    },
    computed: {
      classes() {
        return [
          'bu-row',
          this.finalSize,
          this.additionalClass,
          {
            'inline': this.inline,
            'compress': this.compress,
            'component-row': this.componentRow,
            'multi-input': this.multiInput,
            'square-tag': this.squareTag,
          }
        ]
      },
      role() {
        if(this.tableElement){
          let result = 'row';
          if(this.multiInput || this.squareTag) {
            result = 'group';
          }
          return result;
        } else {
          return "";
        }
      },
      finalSize() {
        let result = this.size;
        if(/^\d+$/.test(this.size)){
          result = 'sz' + this.processNumber(this.size);
        }
        return result;
      },
    },
    methods: {
      processNumber(size) {
        let newSize = parseInt(size, 10);
        newSize = (newSize < this.minSize) ? this.minSize : newSize;
        newSize = (newSize > this.maxSize) ? this.maxSize : newSize;

        let rest = newSize % this.increment;
        let hasNoClassEquivalent = rest > 0;
        if(hasNoClassEquivalent){
          newSize = newSize - rest + this.increment;
        }

        return newSize.toString();
      }
    }
  });
</script>