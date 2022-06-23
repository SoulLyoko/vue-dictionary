import { mount } from "@vue/test-utils";

import { Dict } from "..";

describe("Dict", () => {
  it("mount", () => {
    const wrapper = mount(Dict);
    expect(wrapper.html()).toContain("el-select");
  });
});
