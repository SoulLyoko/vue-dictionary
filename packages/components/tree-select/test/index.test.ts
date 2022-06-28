import { mount } from "@vue/test-utils";

import { DictTreeSelect } from "..";

describe("DictTreeSelect", () => {
  it("mount", () => {
    const wrapper = mount(DictTreeSelect, {
      propsData: { data: [{}] }
    });
    expect(wrapper.html()).toContain("el-tree-select");
  });
});
