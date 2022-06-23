import { mount } from "@vue/test-utils";

import { DictRadio } from "..";

describe("DictRadio", () => {
  it("mount", () => {
    const wrapper = mount(DictRadio, {
      propsData: { data: [] }
    });
    expect(wrapper.html()).toContain("el-radio-group");
  });
});
