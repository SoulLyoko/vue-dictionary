import { mount } from "@vue/test-utils";

import { VInput } from "..";

describe("VInput", () => {
  it("mount", () => {
    const wrapper = mount(VInput);
    expect(wrapper.classes()).toContain("v-input");
  });

  it("type", async () => {
    const wrapper = mount(VInput, {
      attrs: { type: "password" }
    });
    expect(wrapper.attributes("type")).toEqual("password");
    await wrapper.setProps({ type: "number" });
    expect(wrapper.attributes("type")).toEqual("number");
    await wrapper.setProps({ type: "textarea" });
    expect(wrapper.html()).toContain("textarea");
  });
  it("size", async () => {
    const wrapper = mount(VInput, {
      attrs: { size: "small" }
    });
    expect(wrapper.classes()).toContain("v-input--small");
    await wrapper.setProps({ size: "large" });
    expect(wrapper.classes()).toContain("v-input--large");
  });
  it("rows", async () => {
    const wrapper = mount(VInput, {
      attrs: { type: "textarea", rows: "1" }
    });
    const elm = wrapper.element as HTMLTextAreaElement;
    expect(elm.rows).toBe(1);
    await wrapper.setProps({ rows: "2" });
    expect(elm.rows).toBe(2);
  });

  it("input value", async () => {
    const testValue = "testValue";
    const wrapper = mount(VInput, {
      attrs: { value: testValue, modelValue: testValue }
    });
    const elm = wrapper.element as HTMLInputElement;
    expect(elm.value).toEqual(testValue);
    const newValue = "newValue";
    await wrapper.setProps({ value: newValue, modelValue: newValue });
    expect(elm.value).toEqual(newValue);
  });

  it("handle input", async () => {
    const wrapper = mount(VInput);
    await wrapper.trigger("input");
    expect(wrapper.emitted()).toHaveProperty("input");
    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
  });
});
