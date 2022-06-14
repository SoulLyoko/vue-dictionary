import { mount } from "@vue/test-utils";

import { VDict } from "..";

describe("VDict", () => {
  it("mount", () => {
    const wrapper = mount(VDict);
    expect(wrapper.html()).toContain("el-select");
  });
});
