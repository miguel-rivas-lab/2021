<template>
  <main>
    <row class="nano-app">
      <column size="50" class="main-panel">
        <btn @click="togglePanel()" color="purple" glyph="robot-industrial"/>
      </column>

      <column size="300" class="panel" :class="{'hide-panel': !state.panel}">
        <row tag="fieldset">
          <column size="100%">
            <legend>
              Row Styles
            </legend>
            
            <row>
              <column size="100%">
                <label class="btn flat grey" :class="{active: selection.row == 'Row'}">
                  Row
                  <input type="radio" value="Row" name="row-style" v-model="selection.row">
                </label>
              </column>
            </row>

            <row>
              <column size="100%">
                <label class="btn flat grey" :class="{active: selection.row == 'Content'}">
                  Content
                  <input type="radio" value="Content" name="row-style" v-model="selection.row">
                </label>
              </column>
            </row>

            <row>
              <column size="100%">
                <label class="btn flat grey" :class="{active: selection.row == 'Group'}">
                  Group
                  <input type="radio" value="Group" name="row-style" v-model="selection.row">
                </label>
              </column>
            </row>

            <row v-if="selection.row == 'Group'">
              <column size="100%">
                <label class="btn flat grey" :class="{active: selection.integrate}">
                  Integrate
                  <input type="checkbox" value="Integrate" v-model="selection.integrate">
                </label>
              </column>
            </row>

          </column>
        </row>

        <row tag="fieldset">
          <column size="100%">
            <legend>
              A: Prefix Styles
            </legend>
            <row>
              <column size="100%">
                <label for="a-size">Size</label>
              </column>
              <column size="100%">
                <select id="a-size-type" v-model="selection.a.mode">
                  <option v-for="option in gridType" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
            </row>

            <row>
              <column size="100%" v-if="selection.a.mode == 'Percent'">
                <select id="a-size" v-model="selection.a.size">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in percentsValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
              <column size="100%" v-if="selection.a.mode == 'Twelve Grid'">
                <select id="a-size" v-model="selection.a.size">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in twelveValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
              <column size="100%" v-if="selection.a.mode == 'Fixed'">
                <select id="a-size" v-model="selection.a.size">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in fixesValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
              <column size="100%" v-if="selection.a.mode == 'Column Based'">
                <select id="a-size" v-model="selection.a.size">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in columnsValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
            </row>

            <row v-if="selection.a.mode != 'Fixed'">
              <column size="100%">
                <label for="a-subtraction">Subtraction</label>
              </column>
              <column size="100%">
                <select id="a-subtraction" v-model="selection.a.subtraction">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in fixesSubstractionValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
            </row>

            <row>
              <column>
                <label for="a-result">Result</label>
              </column>
              <column size="100%">
                <input id="a-result" disabled type="text" v-model="aExpression">
              </column>
            </row>
          </column>
        </row>

        <row tag="fieldset">
          <column size="100%">
            <legend>
              B: Column Styles
            </legend>
            <row>
              <column size="100%">
                <label for="b-size">Size</label>
              </column>
              <column size="100%">
                <select id="b-size-type" v-model="selection.b.mode">
                  <option v-for="option in gridType" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
            </row>

            <row>
              <column size="100%" v-if="selection.b.mode == 'Percent'">
                <select id="b-size" v-model="selection.b.size">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in percentsValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
              <column size="100%" v-if="selection.b.mode == 'Twelve Grid'">
                <select id="b-size" v-model="selection.b.size">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in twelveValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
              <column size="100%" v-if="selection.b.mode == 'Fixed'">
                <select id="b-size" v-model="selection.b.size">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in fixesValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
              <column size="100%" v-if="selection.b.mode == 'Column Based'">
                <select id="b-size" v-model="selection.b.size">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in columnsValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
            </row>

            <row v-if="selection.b.mode != 'Fixed'">
              <column size="100%">
                <label for="b-subtraction">Subtraction</label>
              </column>
              <column size="100%">
                <select id="b-subtraction" v-model="selection.b.subtraction">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in fixesSubstractionValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
            </row>

            <row>
              <column size="100%">
                <label for="b-result">Result</label>
              </column>
              <column size="100%">
                <input id="b-result" disabled type="text" v-model="bExpression">
              </column>
            </row>
          </column>
        </row>

        <row tag="fieldset">
          <column size="100%">
            <legend>
              C: Suffix Styles
            </legend>

            <row>
              <column size="100%">
                <label for="c-size">Size</label>
              </column>
              <column size="100%">
                <select id="c-size-type" v-model="selection.c.mode">
                  <option v-for="option in gridType" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
            </row>

            <row>
              <column size="100%" v-if="selection.c.mode == 'Percent'">
                <select id="c-size" v-model="selection.c.size">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in percentsValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
              <column size="100%" v-if="selection.c.mode == 'Twelve Grid'">
                <select id="c-size" v-model="selection.c.size">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in twelveValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
              <column size="100%" v-if="selection.c.mode == 'Fixed'">
                <select id="c-size" v-model="selection.c.size">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in fixesValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
              <column size="100%" v-if="selection.c.mode == 'Column Based'">
                <select id="c-size" v-model="selection.c.size">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in columnsValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
            </row>

            <row v-if="selection.b.mode != 'Fixed'">
              <column size="100%">
                <label for="c-subtraction">Subtraction</label>
              </column>
              <column size="100%">
                <select id="c-subtraction" v-model="selection.b.subtraction">
                  <option value="0" key="0" v-html="0"/>
                  <option v-for="option in fixesSubstractionValues" :value="option" :key="option" v-html="option"/>
                </select>
              </column>
            </row>

            <row>
              <column size="100%">
                <label for="c-result">Result</label>
              </column>
              <column size="100%">
                <input id="c-result" disabled type="text" v-model="cExpression">
              </column>
            </row>

          </column>
        </row>

        <row tag="fieldset">
          <column size="100%">
            <btn color="red" @click="resetValues()" value="Reset Styles" />
          </column>
        </row>

      </column>

      <column :size="state.panel ? '100%-350' : '100%-50'" class="workarea">
        <div class="container">
          <svg title="logo" width="300" height="300"></svg>

          <div class="builder-container">
            <row :group="selection.row == 'Group'" :integrate="selection.integrate" :content="selection.row == 'Content'">
              <prefix :size="aExpression">
                <btn color="blue" value="A"/>
              </prefix>
              <column :size="bExpression">
                <btn value="B"/>
              </column>
              <suffix :size="cExpression">
                <btn color="red" value="C"/>
              </suffix>
            </row>
          </div>
        </div>
      </column>
    </row>
  </main>
</template>

<script lang="ts">
  import Vue from "vue";
  import {validateSize} from '../../../modules/nano-grid/ts/columns-manager.ts';

  export default Vue.extend({
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

      state: {
        panel: true,
      },

      selection: {
        row: "Row",
        integrate: false,
        a: {
          mode: "Fixed",
          size: "110",
          subtraction: "0"
        },
        b: {
          mode: "Percent",
          size: "80%",
          subtraction: "55"
        },
        c: {
          mode: "Column Based",
          size: "1/5",
          subtraction: "55"
        },
      },

      gridType: ['Percent', 'Fixed', 'Twelve Grid', 'Column Based'],
      fixesValues: [],
      fixesSubstractionValues: [],
      percentsValues: [],
      twelveValues: [],
      columnsValues: [],
    }),
    mounted(){
      let increment = 5;
      for(let c = 5; c <= 60; c++ ){
        this.fixesValues.push(`${c * increment}`);
      }

      for(let c = 1; c <= 120; c++ ){
        this.fixesSubstractionValues.push(`${c * increment}`);
      }

      for(let c = 1; c*5 <= 100; c++ ){
        this.percentsValues.push(`${c * increment}%`);
      }

      for(let c = 1; c <= 12; c++ ){
        this.twelveValues.push(`${c}/12`);
      }

      for(let c = 1; c <= 20; c++ ){
        this.columnsValues.push(`1/${c}`);
      }
    },
    computed: {
      aExpression(){
        let result = "";
        if(this.selection.a.size){
          result += this.selection.a.size;
          if(this.selection.a.subtraction > 0){
            result += `-${this.selection.a.subtraction}`;
          }
        }
        return validateSize(result);
      },
      bExpression(){
        let result = "";
        if(this.selection.b.size){
          result += this.selection.b.size;
          if(this.selection.b.subtraction > 0){
            result += `-${this.selection.b.subtraction}`;
          }
        }
        return validateSize(result);
      },
      cExpression(){
        let result = "";
        if(this.selection.c.size){
          result += this.selection.c.size;
          if(this.selection.c.subtraction > 0){
            result += `-${this.selection.c.subtraction}`;
          }
        }
        return validateSize(result);
      },
    },
    methods: {
      resetValues(){
        this.selection.a.size = this.selection.b.size = this.selection.c.size = "1/3";
        this.selection.a.mode = this.selection.b.mode = this.selection.c.mode = "Column Based"
        this.selection.a.subtraction = this.selection.b.subtraction = this.selection.c.subtraction = "0";
      },
      togglePanel(){
        this.state.panel = !this.state.panel;
      }
    },
  });
</script>