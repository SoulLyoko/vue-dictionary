import { mount } from "@vue/test-utils";

import { DictSelect } from "..";

describe("DictSelect", () => {
  it("mount", () => {
    const wrapper = mount(DictSelect, {
      propsData: { data: [{}] }
    });
    expect(wrapper.html()).toContain("el-select");
  });
});
