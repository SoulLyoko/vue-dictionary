import { mount } from "@vue/test-utils";

import { VButton } from "..";

describe("VButton", () => {
  it("mount", () => {
    const wrapper = mount(VButton);
    expect(wrapper.classes()).toContain("v-button");
  });

  it("type", async () => {
    const wrapper = mount(VButton, {
      attrs: { type: "primary" }
    });
    expect(wrapper.classes()).toContain("v-button--primary");
    await wrapper.setProps({ type: "success" });
    expect(wrapper.classes()).toContain("v-button--success");
  });
  it("size", async () => {
    const wrapper = mount(VButton, {
      attrs: { size: "small" }
    });
    expect(wrapper.classes()).toContain("v-button--small");
    await wrapper.setProps({ size: "large" });
    expect(wrapper.classes()).toContain("v-button--large");
  });

  it("render text", () => {
    const testText = "testText";
    const wrapper = mount(VButton, {
      slots: { default: testText }
    });
    expect(wrapper.text()).toEqual(testText);
  });

  it("handle click", async () => {
    const wrapper = mount(VButton);
    await wrapper.trigger("click");
    expect(wrapper.emitted()).toBeDefined();
  });
});
