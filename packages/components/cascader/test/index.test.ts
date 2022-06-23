import { mount } from "@vue/test-utils";

import { DictCascader } from "..";

describe("DictCascader", () => {
  it("mount", () => {
    const wrapper = mount(DictCascader, {
      propsData: { data: [] }
    });
    expect(wrapper.html()).toContain("el-cascader");
  });
});
