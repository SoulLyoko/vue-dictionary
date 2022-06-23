import { mount } from "@vue/test-utils";

import { VDict } from "..";

describe("VDict", () => {
  it("mount", () => {
    const wrapper = mount(VDict, {
      propsData: { data: [] }
    });
    expect(wrapper.html()).toContain("el-select");
  });
});
