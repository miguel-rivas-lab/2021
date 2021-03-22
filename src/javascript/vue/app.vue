<template>
  <main>
    <row class="nano-app nano-dark">
      <column size="50" class="main-panel">
        <btn @click="togglePanel()" size="md" color="royal-purple" glyph="robot-industrial"/>
      </column>

      <column size="300" class="panel" :class="{'hide-panel': !state.panel}">
        <scroll-area color="royal-purple">
          <panel-block title="Row Styles">
            <row>
              <column size="100%">
                <label class="btn flat charcoal" :class="{active: selection.row == 'Row'}">
                  Row
                  <input type="radio" value="Row" name="row-style" v-model="selection.row">
                </label>
              </column>
            </row>

            <row>
              <column size="100%">
                <label class="btn flat charcoal" :class="{active: selection.row == 'Content'}">
                  Content
                  <input type="radio" value="Content" name="row-style" v-model="selection.row">
                </label>
              </column>
            </row>

            <row>
              <column size="100%">
                <label class="btn flat charcoal" :class="{active: selection.row == 'Group'}">
                  Group
                  <input type="radio" value="Group" name="row-style" v-model="selection.row">
                </label>
              </column>
            </row>

            <row v-if="selection.row == 'Group'">
              <column size="100%">
                <label class="btn flat charcoal" :class="{active: selection.integrate}">
                  Integrate
                  <input type="checkbox" value="Integrate" v-model="selection.integrate">
                </label>
              </column>
            </row>
          </panel-block>

          <panel-block-column :selection="selection.a" name="a" />
          <panel-block-column :selection="selection.b" name="b" />
          <panel-block-column :selection="selection.c" name="c" />

          <row tag="fieldset">
            <column size="100%">
              <btn
                color="persian-red"
                @click="resetValues()"
                value="Reset Styles"
              />
            </column>
          </row>
        </scroll-area>
      </column>

      <column :size="state.panel ? '100%-350' : '100%-50'" class="workarea">
        <div class="container">
          
          <robotic-arm/>

          <div class="builder-container">
            <row
              :group="selection.row == 'Group'"
              :integrate="selection.integrate"
              :content="selection.row == 'Content'"
            >
              <prefix :size="aFinalValue">
                <btn value="A" :color="selection.a.color" />
              </prefix>
              <column :size="bFinalValue">
                <btn value="B" :color="selection.b.color "/>
              </column>
              <suffix :size="cFinalValue">
                <btn value="C" :color="selection.c.color "/>
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
  import {validateSize} from 'nano-grid/ts/columns-manager.ts';
  import panelBlock from "./components/panel-block.vue";
  import panelBlockColumn from "./components/panel-block-column.vue";
  import roboticArm from "./components/robotic-arm.vue";

  export default Vue.extend({
    components: {panelBlock, panelBlockColumn, roboticArm},
    data: () => ({
      state: {
        panel: true,
      },
      selection: {
        row: "Row",
        integrate: false,
        a: {
          mode: "Fixed",
          size: "110",
          subtraction: "0",
          color: "denim",
          expression: "sz110"
        },
        b: {
          mode: "Percent",
          size: "80%",
          subtraction: "55",
          color: "gravel",
          expression: "sz80b100m55"
        },
        c: {
          mode: "Column Based",
          size: "1/5",
          subtraction: "55",
          color: "persian-red",
          expression: "1b5m55"
        },
      },
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
      aFinalValue(){
        return this.finalExpression('a');
      },
      bFinalValue(){
        return this.finalExpression('b');
      },
      cFinalValue(){
        return this.finalExpression('c');
      },
    },
    methods: {
      finalExpression(column){
        let result = "";
        if(this.selection[column].size){
          result += this.selection[column].size;
          if(this.selection[column].subtraction > 0){
            result += `-${this.selection[column].subtraction}`;
          }
        }
        return validateSize(result);
      },
      resetValues(){
        this.selection.row = "Row";
        this.selection.a.size = this.selection.b.size = this.selection.c.size = "1/3";
        this.selection.a.mode = this.selection.b.mode = this.selection.c.mode = "Column Based"
        this.selection.a.subtraction = this.selection.b.subtraction = this.selection.c.subtraction = "0";
        this.selection.a.color = "denim";
        this.selection.b.color = "gravel";
        this.selection.c.color = "persian-red";
      },
      togglePanel(){
        this.state.panel = !this.state.panel;
      }
    },
  });
</script>