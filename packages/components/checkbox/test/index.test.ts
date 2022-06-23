import { mount } from "@vue/test-utils";

import { DictCheckbox } from "..";

describe("DictCheckbox", () => {
  it("mount", () => {
    const wrapper = mount(DictCheckbox, {
      propsData: { data: [] }
    });
    expect(wrapper.html()).toContain("el-checkbox-group");
  });
});
