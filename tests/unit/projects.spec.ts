// import { mount, shallowMount } from "@vue/test-utils";
// import ProjectsWorkarea from "@/views/projects-workarea.vue";
// import ProjectsPanel from "@/views/projects-panel.vue";

// describe('Gallery component unit tests: ', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(ProjectsWorkarea, {
//       // propsData: {

//       // }
//     });
//     expect(wrapper.isVueInstance()).toBeTruthy();
//   });
// });


import Row from 'nano-grid/vue/row.vue';
import Column from 'nano-grid/vue/column.vue';


// import NanoIcon from 'nano-grid/vue/icon.vue';
// import NanoBtn from 'nano-grid/vue/btn.vue';
// import NanoScrollArea from 'nano-grid/vue/scroll-area.vue';
// import NumberInput from 'nano-grid/vue/number-input.vue';

// Vue.component("row", NanoRow);
// Vue.component("column", NanoColumn);
// Vue.component("icon", NanoIcon);
// Vue.component("btn", NanoBtn);
// Vue.component("scroll-area", NanoScrollArea);
// Vue.component("number-input", NumberInput);

import { mount, shallowMount } from "@vue/test-utils";
import Gallery from "@/components/gallery.vue";

describe('Gallery component unit tests: ', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Gallery, {
      propsData: {
        db: [{
          "title": "olis",
          "category": "project",
          "client": "Presidente",
          "date": "2014/12/05",
          "type": "banana",
          "disabled": false,
          "links": [],
          "roles": ["president"],
          "tools": ["git"],
          "image": "https://miguel-rivas.github.io/zapp/img/preview.png"
        }]
      },
      components : {Row, Column}
    });
    // expect(wrapper.isVueInstance()).toBeTruthy();
    // expect(wrapper.html()).toMatchSnapshot();
    console.log(wrapper.html());
  });
});



// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       propsData: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//     console.log('olis')
//   })
// })