import { mount } from "@vue/test-utils";

import { DictSwitch } from "..";

describe("DictSwitch", () => {
  it("mount", () => {
    const wrapper = mount(DictSwitch, {
      propsData: { data: [] }
    });
    expect(wrapper.html()).toContain("el-switch");
  });
});
