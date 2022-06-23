import { mount } from "@vue/test-utils";

import { DictCascaderPanel } from "..";

describe("DictCascaderPanel", () => {
  it("mount", () => {
    const wrapper = mount(DictCascaderPanel, {
      propsData: { data: [] }
    });
    expect(wrapper.html()).toContain("el-cascader-panel");
  });
});
