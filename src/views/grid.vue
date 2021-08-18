<template>
  <row class="nano-app nano-dark">
    <panel-navigation />

    <column size="300" class="panel" :class="{'hide-panel': !panel}">
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
                      <label class="btn flat charcoal" :class="{active: selection.row == 'Group'}">
                      Group
                      <input type="radio" value="Group" name="row-style" v-model="selection.row">
                      </label>
                  </column>
                  </row>

                  <row v-if="selection.row == 'Row'">
                    <column size="100%">
                      <label :for="`spacing`">Spacing</label>
                    </column>
                    <column size="100%">
                      <select :id="`spacing`" v-model="selection.spacing">
                        <option v-for="option in spacing" :value="option" :key="option" v-html="option/100"/>
                      </select>
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

    <column :size="panel ? '100%-350' : '100%-50'" class="workarea">
      <div class="container">
        
        <h1>
          {{rowSize}}
        </h1>

        <div class="builder-container">
          <row
            :group="selection.row == 'Group'"
            :integrate="computedIntegrate"
            :spacing="computedSpacing"
          >
              <template v-for="column, index in selection.columns">
                  <component
                    v-bind:is="column.block"
                    v-bind:key="index"
                    :size="finalExpression(index)"
                  >
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
  import {
    validateSize,
  } from 'nano-grid/modules/columns-manager.js';
  import panelBlock from "../components/panel-block.vue";
  import panelBlockColumn from "../components/panel-block-column.vue";
  import PanelNavigation from "../components/panel-navigation.vue";
  import {
    mapGetters,
  } from 'vuex';

  export default Vue.extend({
    components: {
      PanelNavigation,
      panelBlock,
      panelBlockColumn,
    },
    data: () => ({
      selection: {columns: []},
      spacing: [
        0,
        25,
        50,
        75,
        100,
        125,
        150,
        175,
        200,
        225,
        250,
        275,
        300,
        325,
        350,
        375,
        400,
      ],
    }),
    mounted() {
      this.$store.commit("setPanelVisibility", true);
      this.selection = this.$store.getters.getSelection;
    },
    computed: {
      ...mapGetters({
        panel: 'getPanelVisibility',
      }),
      computedSpacing():number {
        return this.selection.row === 'Row' ? this.selection.spacing : 0;
      },
      computedIntegrate():boolean {
        return this.selection.row === 'Group' ? this.selection.integrate : false;
      },
      rowSize():string {
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
        return parseInt(fixResult) !== 0 ? `${fraction}%${fixResult}` : `${fraction}%`;
      }
    },
    methods: {
      finalExpression(column:number):string {
        let result = "";
        if(this.selection.columns[column].size){
          result += this.selection.columns[column].size;
          if(parseInt(this.selection.columns[column].subtraction) > 0){
            result += `-${this.selection.columns[column].subtraction}`;
          }
        }
        return validateSize(result);
      },
      addColumn():any {
        this.$store.commit("addColumn", {
          mode: "Percent",
          size: "50%",
          subtraction: "0",
          color: "desert",
          expression: "sz1b4",
          block: "column",
        });
        this.selection = this.$store.getters.getSelection;
      },
      
    },
  });
</script>