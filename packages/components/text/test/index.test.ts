import { mount } from "@vue/test-utils";

import { DictText } from "..";

describe("DictText", () => {
  it("mount", () => {
    const wrapper = mount(DictText, {
      propsData: {
        data: [{ label: "1", value: "1" }],
        modelValue: "1",
        value: "1"
      }
    });
    expect(wrapper.html()).toMatchInlineSnapshot('"<span>1</span>"');
  });
});
