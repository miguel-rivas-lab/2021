<template>
  <row class="nano-app nano-dark">
    <panel-navigation />

    <column size="300" class="panel" :class="{'hide-panel': !state.panel}">
      <scroll-area color="royal-purple">

          <row class="row-block" tag="fieldset">
              <column size="100%">
                  <legend>Row Styles</legend>

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
              </column>
          </row>


        <template v-for="column, index in selection.columns">
          <panel-block-column
              v-bind:key="index"
              :index="index"
              :selection="selection"
              :name="(index + 1).toString()" />
        </template>

        <row class="row-block">
          <column size="100%">
            <btn
              color="denim"
              @click="addColumn()"
              value="Add Column"
            />
          </column>
        </row>
      </scroll-area>
    </column>

    <column :size="state.panel ? '100%-350' : '100%-50'" class="workarea">
      <div class="container">
        
        <h1 class="app-title">
          {{rowSize}}
        </h1>

        <div class="builder-container">
          <row
            :group="selection.row == 'Group'"
            :integrate="selection.integrate"
            :content="selection.row == 'Content'"
          >
              <template v-for="column, index in selection.columns">
                  <component
                      v-bind:is="column.block"
                      v-bind:key="index"
                      :size="finalExpression(index)">
                      <btn :value="column.size" :color="column.color" />
                  </component>
              </template>
          </row>
        </div>
      </div>
    </column>
  </row>
</template>

<script lang="ts">
  import Vue from "vue";
  import {validateSize} from 'nano-grid/ts/columns-manager';
  import panelBlock from "../components/panel-block.vue";
  import panelBlockColumn from "../components/panel-block-column.vue";
  import PanelNavigation from "../components/panel-navigation.vue";

  export default Vue.extend({
    components: {
      PanelNavigation,
      panelBlock,
      panelBlockColumn
    },
    data: () => ({
      state: {
        panel: true,
      },
      selection: {
        row: "Row",
        integrate: false,
        columns: [
          {
              mode: "Percent",
              size: "50%",
              subtraction: "0",
              color: "denim",
              expression: "sz1b4",
              block: "column",
          },
          {
              mode: "Percent",
              size: "50%",
              subtraction: "0",
              color: "persian-red",
              expression: "sz1b4",
              block: "column",
          },
        ]
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
      rowSize(){
        let subtraction = 0
        let fraction = 0
        let fixVal = 0;
        let columns = this.selection.columns;


        columns.forEach(column => {
            subtraction += parseInt(column.subtraction);

            let isPercent = /[%]/.test(column.size);
            let isFraction = /[/]/.test(column.size);
            if(isPercent){
                fraction += parseInt(column.size);
            } else if(isFraction) {
                let parts = column.size.split('/');
                fraction += parseInt(parts[0]) / parseInt(parts[1]) * 100;
            } else {
                fixVal += parseInt(column.size);
            }
        });
        let fixResult = fixVal-subtraction > -1 ? '+' + (fixVal-subtraction).toString() : (fixVal-subtraction).toString();
        return `${fraction}%${fixResult}`;
      }
    },
    methods: {
      finalExpression(column){
        let result = "";
        if(this.selection.columns[column].size){
          result += this.selection.columns[column].size;
          if(parseInt(this.selection.columns[column].subtraction) > 0){
            result += `-${this.selection.columns[column].subtraction}`;
          }
        }
        return validateSize(result);
      },
      addColumn(){
          this.selection.columns.push(
              {
                mode: "Percent",
                size: "50%",
                subtraction: "0",
                color: "desert",
                expression: "sz1b4",
                block: "column",
              }
          );
      },
      togglePanel(){
        this.state.panel = !this.state.panel;
      }
    },
  });
</script>