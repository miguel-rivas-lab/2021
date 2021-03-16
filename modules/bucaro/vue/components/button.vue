<template>
  <component
    v-if="!responsive"
    :is="computedTag"
    :class="computedClasses"
    role="button"
    :aria-label="computedLabel"
    :to="to"
    @click.passive="$emit('click', $event)">
    <icon v-if="glyph !== ''" :glyph="glyph"/> 
    <span class="caption" v-if="computedValue">
      {{computedValue}}
    </span>
  </component>

  <component
    v-else
    :is="computedTag"
    :class="computedClasses"
    role="button"
    :to="to"
    :aria-label="computedLabel"
    v-tooltip="computedValue"
    data-c-tooltip-class="responsive-btn"
    @click.passive="$emit('click', $event)">
    <icon v-if="glyph !== ''" :glyph="glyph"/> 
    <span class="caption">
      {{computedValue}}
    </span>
  </component>
</template>

<script lang="ts">
  import Vue from "vue";
  import {EColor} from "~/enums/eColor";
  import {eColors} from "~/modules/gColors/colors";
  import {Logger} from "~/services/logger";
  import {StringHelper} from "~/helpers/stringHelper";

  export default Vue.extend({
    props: {
      tag: {
        type: String,
        default: 'button',
      },
      glyph: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        default: undefined,
      },
      color: {
        type: String,
        default: 'Gravel',
      },
      size: {
        type: String,
        default: 'md',
      },
      arrow: {
        type: Boolean,
        default: false,
      },
      square: {
        type: Boolean,
        default: false,
      },
      outline: {
        type: Boolean,
        default: false,
      },
      active: {
        type: Boolean,
        default: false,
      },
      responsive: {
        type: Boolean,
        default: false,
      },
      to: {
        default: undefined
      },
    },
    data: function(){
      return {
        colors: [
          ...eColors,
          'ClearArea',
          'GravelToBlue',
          'ClearToBlue',
          'ClearToRed',
          'InputColor',
          'GreyToBlue',
          'GreyToRed'
        ],
      }
    },
    computed: {
      computedValue(){
        if(typeof this.value !== "undefined") {
          return this.value;
        } else if (this.$slots !== {} && this.$slots?.default?.[0]?.text) {
          return this.$slots.default[0].text.trim();
        } else {
          return false;
        }
      },
      buttonType(){
        if(!this.computedValue) {
          return 'btn-icon';
        } else {
          return 'btn';
        }
      },
      itemColor() {
        if(this.colors.includes(this.color)){
          return EColor[this.color];
        } else if(this.color === "") {
          return "";
        } else {
          Logger.errorOnce('Button/BTN', `Color *${this.color}* not available for the button.`, 'Try one of these values instead:', this.colors);
          return "color-unavailable";
        }
      },
      computedTag(){
        if(this.to){
          return 'router-link';
        } else {
          return this.tag;
        }
      },
      computedLabel(){
        if(this.computedValue){
          return `${this.computedValue} button`
        } else {
          return `${StringHelper.dashToTitle(this.glyph)} button`
        }
      },
      computedClasses(): object {
        return [
          this.buttonType,
          this.itemColor,
          this.size, {
            responsive: this.responsive,
            outline: this.outline,
            square: this.square,
            arrow: this.arrow,
            active: this.active,
          }
        ];
      },
    },
  });
</script>
