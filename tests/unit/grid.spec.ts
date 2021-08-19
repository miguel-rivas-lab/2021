import { shallowMount } from '@vue/test-utils';
import GridView from "@/views/grid.vue";

describe("grid.vue", () => {
  it("renders", () => {
    const wrapper = shallowMount(GridView, {});
    // expect(wrapper.text()).toMatch(msg);
    // expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.section-grid .workarea h1').text()).toBe("100%");
  });
});