import { mount } from "@vue/test-utils";
import { isVue2 } from "vue-demi";

import { adaptOnsV3, h, slot } from "../h-demi";

describe("h-demi", () => {
  it("adaptOnsV3", () => {
    const on = {
      input: () => {},
      click: () => {}
    };
    const result = adaptOnsV3(on);
    expect(result).toMatchInlineSnapshot(`
      {
        "onClick": [Function],
        "onInput": [Function],
      }
    `);
  });

  it("h", async () => {
    let isClicked = false;
    const wrapper = mount({
      render: () =>
        h(
          "button",
          {
            props: { name: "hi" },
            on: {
              click: () => {
                isClicked = true;
              }
            }
          },
          "hi"
        )
    });
    if (isVue2) {
      expect(wrapper.html()).toMatchInlineSnapshot('"<button>hi</button>"');
    } else {
      expect(wrapper.html()).toMatchInlineSnapshot('"<button name=\\"hi\\">hi</button>"');
    }
    await wrapper.trigger("click");
    expect(isClicked).toBeTruthy();
  });

  it("slot string", () => {
    const slotString = "slot";
    const result = slot(slotString);
    expect(result).toEqual(slotString);
  });
  it("slot function", () => {
    const slotAttrs = { a: "a", b: "b" };
    const slotFunction = (attrs: typeof slotAttrs) => attrs;
    const result = slot(slotFunction, slotAttrs);
    expect(result).toEqual(slotAttrs);
  });
});
