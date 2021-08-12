<template>
    <column size="50" class="main-panel">
        <template v-for="(nav, index) in navigation">
            <btn
                :to="{name: nav.route}"
                v-bind:key="index"
                color="gravel"
                size="md"
                :glyph="nav.icon"
                @click="togglePanel()"
            />
        </template>
    </column>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    components: {
    },
    data: () => ({
    //   state: {
    //     panel: false,
    //   },
        navigation: [
            { icon: 'home', route: 'home' },
            { icon: 'duck', route: 'projects' },
            // { icon: 'projector-screen', route: 'prototypes' },
            { icon: 'robot-industrial', route: 'grid' },
            // { icon: 'gesture-tap-button', route: 'buttons' },
            // { icon: 'format-color-fill', route: 'colors' },
            // { icon: 'video', route: 'videos' },
            // { icon: 'file-document-outline', route: 'documents' },
        ],
    }),
    computed: {
    },
    methods: {
        togglePanel(){
            // this.state.panel = !this.state.panel;
        }
    },
  });
</script>