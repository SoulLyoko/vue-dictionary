import { mount } from "@vue/test-utils";

import { VDict } from "..";

describe("VDict", () => {
  const wrapper = mount(VDict, {
    propsData: { data: [] }
  });

  it("mount", () => {
    expect(wrapper.html()).toContain("el-select");
  });

  it("type", async () => {
    await wrapper.setProps({ type: "checkbox" });
    expect(wrapper.html()).toContain("el-checkbox-group");
    await wrapper.setProps({ type: "text" });
    expect(wrapper.html()).toContain("span");
  });
});
