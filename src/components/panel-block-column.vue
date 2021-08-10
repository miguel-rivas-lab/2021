<template>
  <panel-block @onRemove="removeBlock()" :title="`${name.toUpperCase()}: Column Styles`">
    <row>
      <column size="100%">
        <label :for="`${name}-size`">Size</label>
      </column>
      <column size="100%">
        <select :id="`${name}-size-type`" v-model="selection.columns[index].mode">
          <option v-for="option in gridType" :value="option" :key="option" v-html="option"/>
        </select>
      </column>
    </row>

    <row>
      <column size="100%" v-if="selection.columns[index].mode == 'Percent'">
        <select id="a-size" v-model="selection.columns[index].size">
          <option value="0" key="0" v-html="0"/>
          <option v-for="option in percentsValues" :value="option" :key="option" v-html="option"/>
        </select>
      </column>
      <column size="100%" v-if="selection.columns[index].mode == 'Twelve Grid'">
        <select :id="`${name}-size`" v-model="selection.columns[index].size">
          <option value="0" key="0" v-html="0"/>
          <option v-for="option in twelveValues" :value="option" :key="option" v-html="option"/>
        </select>
      </column>
      <column size="100%" v-if="selection.columns[index].mode == 'Fixed'">
        <select :id="`${name}-size`" v-model="selection.columns[index].size">
          <option value="0" key="0" v-html="0"/>
          <option v-for="option in fixesValues" :value="option" :key="option" v-html="option"/>
        </select>
      </column>
      <column size="100%" v-if="selection.columns[index].mode == 'Column Based'">
        <select id="`${name}-size`" v-model="selection.columns[index].size">
          <option value="0" key="0" v-html="0"/>
          <option v-for="option in columnsValues" :value="option" :key="option" v-html="option"/>
        </select>
      </column>
    </row>

    <row v-if="selection.columns[index].mode != 'Fixed'">
      <column size="100%">
        <label :for="`${name}-subtraction`">Subtraction</label>
      </column>
      <column size="100%">
        <select :id="`${name}-subtraction`" v-model="selection.columns[index].subtraction">
          <option value="0" key="0" v-html="0"/>
          <option v-for="option in fixesSubstractionValues" :value="option" :key="option" v-html="option"/>
        </select>
      </column>
    </row>

    <row>
      <column>
        <label :for="`${name}-result`">Result</label>
      </column>
      <column size="100%">
        <input :id="`${name}-result`" disabled type="text" v-model="finalValue">
      </column>
    </row>

    <row>
      <column size="100%">
        <label :for="`${name}-color`">Button Color</label>
      </column>
      <column size="100%">
        <select :id="`${name}-color`" v-model="selection.columns[index].color">
          <option v-for="option in colorValues" :value="option" :key="option" v-html="option"/>
        </select>
      </column>
    </row>

    <row>
      <column size="100%">
        <label :for="`${name}-style`">Column Style</label>
      </column>
      <column size="100%">
        <select :id="`${name}-style`" v-model="selection.columns[index].block">
          <option v-for="option in styles" :value="option" :key="option" v-html="option"/>
        </select>
      </column>
    </row>

  </panel-block>
</template>

<script lang="ts">
  import Vue from "vue";
  import panelBlock from "./panel-block.vue";
  import {validateSize} from 'nano-grid/ts/columns-manager';

  export default Vue.extend({
    components: {panelBlock},
    props: {
      name: {
        type: String,
        default: "",
      },
      selection: undefined,
      index: undefined,
    },
    data: () => ({
      cssSizes: [
        [1,1],
        [19,20],
        [11,12],
        [9,10],
        [17,20],
        [5,6],
        [4,5],
        [3,4],
        [7,10],
        [2,3],
        [13,20],
        [3,5],
        [7,12],
        [11,20],
        [1,2],
        [9,20],
        [5,12],
        [2,5],
        [7,20],
        [1,3],
        [3,10],
        [1,4],
        [1,5],
        [1,6],
        [3,20],
        [1,7],
        [1,8],
        [1,9],
        [1,10],
        [1,11],
        [1,12],
        [1,13],
        [1,14],
        [1,15],
        [1,16],
        [1,17],
        [1,18],
        [1,19],
        [1,20],
      ],
      gridType: ['Percent', 'Fixed', 'Twelve Grid', 'Column Based'],
      colorValues: [
        'silver',
        'royal-purple',
        'persian-red',
        'denim',
        'gold-tips',
        'shamrock',
        'cod-grey',
        'gravel',
        'emerald',
        'burn-orange',
        'razzmatazz',
        'desert',
        'charcoal',
      ],
      styles: [
        'prefix',
        'column',
        'suffix',
      ],
    }),
    computed: {
      fixesValues() {
        let result = [];
        for(let c = 5; c <= 60; c++ ){
          result.push(`${c * 5}`);
        }
        return result;
      },
      fixesSubstractionValues() {
        let result = [];
        for(let c = 1; c <= 120; c++ ){
          result.push(`${c * 5}`);
        }
        return result;
      },
      percentsValues() {
        let result = [];
        for(let c = 1; c*5 <= 100; c++ ){
          result.push(`${c * 5}%`);
        }
        return result;
      },
      twelveValues() {
        let result = [];
        for(let c = 1; c <= 12; c++ ){
          result.push(`${c}/12`);
        }
        return result;
      },
      columnsValues() {
        let result = [];
        for(let c = 1; c <= 20; c++ ){
          result.push(`1/${c}`);
        }
        return result;
      },
      finalValue(){
        let result = "";
        if(this.selection.columns[this.index].size){
          result += this.selection.columns[this.index].size;
          if(this.selection.columns[this.index].subtraction > 0){
            result += `-${this.selection.columns[this.index].subtraction}`;
          }
        }
        return validateSize(result);
      },
    },
    methods: {
      removeBlock(){
        this.selection.columns.splice(this.index, 1);
      }
    }
  });
</script>