<template>
  <row tag="fieldset" class="row-block">
    <column size="100%">
      <legend>
        <row>
          <column size="100%-35">
            {{title}}
          </column>
          <suffix size="35">
            <btn
                color="persian-red"
                size="md"
                glyph="close"
                @click="removeBlock"
              />
          </suffix>
        </row>
      </legend>
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
    },
    created() {
      this.$emit('created');
    },
    methods: {
      removeBlock($event:any) {
        this.$emit('onRemove', $event);
      },
    }
  });
</script>