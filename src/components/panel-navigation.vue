<template>
    <column size="50" class="main-panel">
        <template v-for="(nav, index) in navigation">
            <btn
                :to="{name: nav.route}"
                v-bind:key="index"
                color="gravel"
                size="md"
                :glyph="nav.icon"
                :active="$route.name === nav.route"
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
        navigation: [
            { icon: 'home', route: 'home' },
            { icon: 'projector-screen', route: 'projects' },
            { icon: 'duck', route: 'prototypes' },
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
    },
  });
</script>